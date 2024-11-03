import { Resend } from 'resend';
import { EmailTemplate } from '~/app/_components/EmailTemplate';
import type { NextApiRequest, NextApiResponse } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.RESEND_TO_EMAIL ?? 'default@example.com';
const fromEmail = process.env.RESEND_TO_EMAIL ?? 'default@example.com';

type Body = {
  firstName: string;
  email: string;
  message: string;
};


const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { firstName, email, message } = req.body as Body;
  const { data, error } = await resend.emails.send({
    from: `Huang Go <${fromEmail}>`,
    to: toEmail,
    subject: 'Hello world',
    react: EmailTemplate({ firstName, email, message }),
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

export default send;