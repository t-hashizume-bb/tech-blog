import SectionTitle from "@/components/SectionTitle/SectionTitle"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: '著作権について | Web Hack（ウェブハック）',
  description: '当ブログで定めている著作権についてのページです。また、当ブログで掲載している文章や一部画像などにつきましては、無断転載することを禁止します。',
}

export default function Copyright() {
    return (
        <div className="inner">
            <SectionTitle titleEn="Copyright" titleJa="著作権について" />

            <div className="contents">
                <p>当ブログで掲載している文章や一部画像などにつきましては、無断転載することを禁止します。</p>
                <p>
                    当ブログは著作権や肖像権の侵害を目的としたものではありません。<br/>
                    著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。<br/>
                    迅速に対応いたします。
                </p>
            </div>
        </div>
    )
}