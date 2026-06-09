import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Campos obrigatórios ausentes.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Site AB3Design <contato@ab3design.com.br>',
    to: 'oi@ab3design.com.br',
    replyTo: email,
    subject: `Novo contato: ${name}`,
    text: [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefone: ${phone}` : null,
      `\nMensagem:\n${message}`,
    ].filter(Boolean).join('\n'),
  });

  if (error) {
    return NextResponse.json({ error: 'Falha ao enviar e-mail.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
