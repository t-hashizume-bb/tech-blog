'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import "./ContactForm.css";

interface ContactFormData {
    contactType: string;
    detail?: string;
    yourName: string;
    tel: string;
    email: string;
}

export default function ContactForm() {

    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<ContactFormData>();

    const [message, setMessage] = useState("");

    const onSubmit = async(data: ContactFormData) => {
        try {
            const response = await fetch("api/sendMail", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setMessage("お問い合わせが送信されました");
                console.log(message);
                router.push('/contact/complete')
            } else {
                throw new Error("送信に失敗しました");
            }
            
        } catch(error) {
            if (error instanceof Error) {
                setMessage(error.message);
            } else {
                setMessage("予期せぬエラーが発生しました");
            }
            router.push('/contact/error');
        }
    }

    const [acceptanceCheck, setAcceptanceCheck] = useState(false);

    const changeAcceptance = () => {
        setAcceptanceCheck(!(acceptanceCheck))
    }

    const contactType: string[] = [
        "お仕事のご相談",
        "協業・ご提案",
        "ページ内容の修正",
        "その他"
    ]

    return (
        <form method="POST" action="" onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="contact-items__title">お問い合わせ内容</h3>
                        <div className="contact-item__wrapper">
                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="contactType">ご用件<span className="require">必須</span></label>
                                <div className="contact-item-radio__wrapper">
                                    {contactType.map((item) => {
                                        return (
                                            <label className="contact-item-radio" key={item}>
                                                <input className="contact-item-radio__btn"
                                                type="radio" {...register("contactType", {required:true})}
                                                value={item} />
                                                <span className="contact-item-radio__text">{item}</span>
                                            </label>
                                        )
                                    })}
                                </div>
                                {errors.contactType && <span className="error-message">ご要件をお選びください。</span>}
                            </div>

                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="detail">詳細</label>
                                <textarea className="contact-item__form" {...register("detail")} id="detail" />
                            </div>
                        </div>

                        <h3 className="contact-items__title">お客様情報</h3>
                        <div className="contact-item__wrapper">

                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="yourName">担当者名<span className="require">必須</span></label>
                                <input className="contact-item__form" type="text" {...register("yourName", {required: true})} id="name" />
                                {errors.yourName && <span className="error-message">担当者名を入力してください。</span>}
                            </div>

                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="tel">電話番号<span className="require">必須</span></label>
                                <input className="contact-item__form" type="text" {...register("tel", {required: true})} id="tel" />
                                {errors.tel && <span className="error-message">電話番号を入力してください。</span>}
                            </div>
                            
                            <div className="contact-item">
                                <label className="contact-item__title" htmlFor="email">メールアドレス<span className="require">必須</span></label>
                                <input className="contact-item__form" type="email" 
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                          value:
                                            /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                                          message: "正しいメールアドレスを入力してください。",
                                    },})} 
                                id="email" />
                                {errors.email && <span className="error-message">メールアドレスを入力してください。</span>}
                            </div>
                        </div>
                        <div className="contact-acceptance">
                            <input type="checkbox" checked={acceptanceCheck} onChange={changeAcceptance} className="contact-acceptance__check" name="acceptance" id="acceptance"/>
                            <label htmlFor="acceptance" className="contact-acceptance__text">
                                <a href="/privacy-policy" target="_blank" rel="noreferrer" className="contact-acceptance__link">個人情報保護方針</a>に同意します。
                            </label>
                        </div>

                        <div className="contact-submit">
                            <button className="contact-submit__btn" disabled={!(acceptanceCheck)} type="submit">送信する</button>
                        </div>
                    </form>
    )
}