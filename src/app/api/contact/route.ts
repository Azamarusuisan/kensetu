import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { COMPANY_INFO } from '@/lib/metadata';

interface ContactFormData {
    name: string;
    company?: string;
    email: string;
    phone: string;
    category: string;
    message: string;
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // バリデーション
        if (!body.name || !body.email || !body.phone || !body.message) {
            return NextResponse.json(
                { error: '必須項目を入力してください。' },
                { status: 400 }
            );
        }

        await sgMail.send({
            from: {
                email: COMPANY_INFO.email,
                name: 'お問い合わせフォーム',
            },
            to: COMPANY_INFO.email,
            subject: `【お問い合わせ】${body.category} - ${body.name}様`,
            replyTo: body.email,
            html: `
                <h2>お問い合わせがありました</h2>
                <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px; font-weight: bold; width: 140px; background: #f9f9f9;">お名前</td>
                        <td style="padding: 12px;">${body.name}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px; font-weight: bold; background: #f9f9f9;">貴社名</td>
                        <td style="padding: 12px;">${body.company || '—'}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px; font-weight: bold; background: #f9f9f9;">メールアドレス</td>
                        <td style="padding: 12px;"><a href="mailto:${body.email}">${body.email}</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px; font-weight: bold; background: #f9f9f9;">電話番号</td>
                        <td style="padding: 12px;">${body.phone}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px; font-weight: bold; background: #f9f9f9;">お問い合わせ種別</td>
                        <td style="padding: 12px;">${body.category}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; font-weight: bold; background: #f9f9f9; vertical-align: top;">お問い合わせ内容</td>
                        <td style="padding: 12px; white-space: pre-wrap;">${body.message}</td>
                    </tr>
                </table>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact API error:', err);
        return NextResponse.json(
            { error: 'メール送信に失敗しました。しばらくしてからもう一度お試しください。' },
            { status: 500 }
        );
    }
}
