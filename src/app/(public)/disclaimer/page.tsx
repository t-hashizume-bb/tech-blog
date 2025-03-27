import SectionTitle from "@/components/SectionTitle/SectionTitle"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: '免責事項 | Web Hack（ウェブハック）',
  description: '当ブログで定めている免責事項のページです。当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いませんのでご了承ください。',
}

export default function Disclaimer() {
    return (
        <div className="inner">
            <SectionTitle titleEn="Disclaimer" titleJa="免責事項" />

            <div className="contents">
                <p>当ブログからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。</p>
                <p>
                また当ブログでは、AIアシスタントを活用して作成・編集しております。<br/>
                人間の視点での最終確認を行っていますが、AIが生成した部分も含まれているため、参考情報としてご理解いただけますと幸いです。
                </p>
                <p>できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。<br />
                情報が古くなっていることもございます。</p>
                <p>当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。</p>
            </div>
        </div>
    )
}