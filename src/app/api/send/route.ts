import { Resend } from 'resend';
import { EmailTemplate } from '~/app/_components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.RESEND_TO_EMAIL ?? 'default@example.com';
const fromEmail = process.env.RESEND_FROM_EMAIL ?? 'default@example.com';

type Body = {
  firstName: string;
  email: string;
  message: string;
};


export async function POST(request: Request) {
  try {
    const { firstName, email, message } = await request.json() as Body;
    const { data, error } = await resend.emails.send({
      from: `Huang Go <${fromEmail}>`,
      to: toEmail,
      subject: 'Novo Contato',
      react: EmailTemplate({ firstName, email, message }),
    });

    if (error) {
      console.log(error);

      return new Response(JSON.stringify(error), { status: 400 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
};