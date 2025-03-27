import nodemailer from "nodemailer";

export const POST = async (req: Request) => {

  try {
    const body = await req.json();

    const { 
      contactType,
      detail,
      yourName,
      tel,
      email,
    } = body;

    // const message = "";
    
    if (!contactType || !yourName || !tel || !email) {
      return new Response(JSON.stringify({ message: "全てのフィールドを入力してください" }), {
        status: 400,
      });
    }

    const mailBody = (`
    お問い合わせを受け付けました。
    ２営業日以内に担当者からご連絡いたしますのでしばらくお待ち下さい。
    
    ----お客様情報----
    担当者名： ${yourName}
    電話番号： ${tel}
    メールアドレス： ${email}

    ----お問い合わせ内容----
    ご用件： ${contactType}
    詳細： ${detail}
    `);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    } as nodemailer.TransportOptions);
  
    await transporter.sendMail({
      from: `"Web Hack(ウェブハック)" <${process.env.SMTP_FROM}>`,
      to: [`${process.env.SMTP_OWNER}`, `${email}`], // 管理者のメールアドレス
      subject: "【Web Hack】お問い合わせを受け付けました",
      text: mailBody,
    });

    return new Response(JSON.stringify({ message: "メールが送信されました"}), {status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return new Response(JSON.stringify({ message: "メールの送信に失敗しました", error: error.message}), {status: 500});
    } else {
      console.log("予期せぬエラーが発生しました");
      return new Response(JSON.stringify({ message: "メールの送信に失敗しました"}), {status: 500});
    }
  }
};