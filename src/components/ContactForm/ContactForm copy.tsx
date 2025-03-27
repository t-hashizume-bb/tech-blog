"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
// import { formSchema, form, onSubmit } from "@/utilities/contactSetting"

import { Button } from "@/components/ui/button" 
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import "./ContactForm.css"

const formSchema = z.object({
  yourName: z.string().min(2, {
    message: "お名前は2文字以上で入力してください。",
  }),
  email: z.string().email({
    message: "メールアドレスが正しくありません。",
  }),
  phone: z.string().regex(/^[0-9]+$/, {
    message: "電話番号が正しくありません。",
  }),
  message: z.string().min(1, {
    message: "メッセージを入力してください。",
  }),
})


export function ContactForm() {
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      yourName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const googleFormUrl = process.env.NEXT_PUBLIC_GOOGLE_FORM_URL;

    const formBody = new URLSearchParams();
    formBody.append('entry.1550937390', values.yourName); // Replace with your form's entry ID
    formBody.append('entry.930996064', values.email); // Replace with your form's entry ID
    formBody.append('entry.1842619082', values.phone); // Replace with your form's entry ID
    formBody.append('entry.176276446', values.message); // Replace with your form's entry ID

    if (!googleFormUrl) {
        console.error('Google Form URL is not set');
        return;
    }

    fetch(googleFormUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody
    }).then(() => {
        // alert('お問い合わせを受け付けました。確認後、担当者からご連絡いたしますので、しばらくお待ちください。');
        // form.reset();
        router.push('/contact/complete');
    }).catch(error => {
        console.error('Error:', error);
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form space-y-8">
        <FormField
          control={form.control}
          name="yourName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">お名前</FormLabel>
              <FormControl>
                <Input placeholder="お名前を入力してください" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder="メールアドレスを入力してください" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />      
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">電話番号</FormLabel>
              <FormControl>
                <Input placeholder="電話番号を入力してください" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="form-label">お問い合わせ内容</FormLabel>
              <FormControl>
                <Textarea placeholder="詳細な問い合わせ内容を入力してください" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="form-button">送信する</Button>
      </form>
    </Form>
  )
}
