import { Metadata } from 'next';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '送信完了 | Web Hack（ウェブハック）',
  description: 'お問い合わせの完了ページです。担当者からご連絡差し上げますのでしばらくお待ち下さい。',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Complete() {
  return (
    <div className="inner">
      <SectionTitle titleEn="Complete" titleJa="送信完了" />
      <div className="contents">

        <p>
          お問い合わせいただきましてありがとうございました。<br />
          担当者が確認次第、ご連絡いたしますのでしばらくお待ち下さい。
        </p>
        <Button className="mt-4 text-white" asChild>
          <Link href="/" className="text-white">トップページへ戻る</Link>
        </Button>
      </div>
    </div>
  );
}