import SectionTitle from "@/components/SectionTitle/SectionTitle"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'プライバシーポリシー | Web Hack（ウェブハック）',
  description: '当ブログで定めているプライバシーポリシーのページです。当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。ご了承の上ご利用ください。',
}

export default function PrivacyPolicy() {
    return (
        <div className="inner">
            <SectionTitle titleEn="Privacy Policy" titleJa="プライバシーポリシー" />

            <div className="contents">
                <h2>個人情報の利用目的</h2>
                <p>当ブログでは、お問い合わせや記事へのコメントの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。<br />
                取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどをでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。</p>

                <h2>広告について</h2>
                <p>
                    当ブログでは、第三者配信の広告サービス（Googleアドセンス、A8.net）を利用しており、ユーザーの興味に応じた商品やサービスの広告を表示するため、クッキー（Cookie）を使用しております。<br />
                    クッキーを使用することで当サイトはお客様のコンピュータを識別できるようになりますが、お客様個人を特定できるものではありません。
                </p>
                
                <p> 
                    Cookieを無効にする方法やGoogleアドセンスに関する詳細は「広告 – ポリシーと規約 – Google」をご確認ください。
                </p>
                <p>
                    また、当サイトWeb Hackは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
                </p>

                <h2>アクセス解析ツールについて</h2>
                <p>
                    当ブログは、Googleアナリティクスを利用しています。<br />
                    このGoogleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。<br />
                    このトラフィックデータは匿名で収集されており、個人を特定するものではありません。<br />
                </p>
            </div>

        </div>
    )
}