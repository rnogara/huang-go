import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email, message
}) => (
  <div>
    <h2>{firstName} acabou de enviar uma mensagem do site Huang Go</h2>
    <p>O email do individuo: {email}</p>
    <p>A mensagem é:</p>
    <p>{message}</p>
  </div>
);