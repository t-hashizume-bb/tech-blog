import SectionTitle from "@/components/SectionTitle/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'お問い合わせ | Web Hack（ウェブハック）',
  description: 'エラーが発生しました。お手数ですが再度お問い合わせください。',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ContactError() {
    return (
        <div className="inner">
            <SectionTitle titleEn="Error" titleJa="エラー" />

            <div className="contents">
                <p>お問い合わせの送信に失敗しました。<br />恐れ入りますが、再度お問い合わせください。</p>

                <Button asChild>
                    <Link href="/contact" className="mt-4">お問い合わせへ戻る</Link>
                </Button>
            </div>
        </div>
    )
}