import ContactForm from "@/components/ContactForm/ContactForm"
import ContactFormSkeleton from "@/components/ContactForm/ContactFormSkeleton"
import SectionTitle from "@/components/SectionTitle/SectionTitle"
import { Suspense } from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'お問い合わせ | Web Hack（ウェブハック）',
  description: 'お問い合わせページです。ご不明点、ご相談等ございましたら、お問い合わせフォームよりお問い合わせください。',
}

export default function Contact() {
    return (
        <div className="inner">
            <SectionTitle titleEn="Contact" titleJa="お問い合わせ" />

            <Suspense fallback={<ContactFormSkeleton />}>
                <ContactForm />
            </Suspense>
        </div>
    )
}