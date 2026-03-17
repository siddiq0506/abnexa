
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message, pageSource } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: 'Name, Email, and Message are required fields.' }), { status: 400 });
    }

    // Email format validation
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ message: 'Invalid email format.' }), { status: 400 });
    }

    const timestamp = new Date().toISOString();

    const emailBody = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Message: ${message}

Timestamp: ${timestamp}
Page Source: ${pageSource || 'N/A'}
    `;

    await resend.emails.send({
      from: 'Abnexa Technologies <noreply@abnexatechnologies.in>', // Replace with your verified domain from Resend
      to: 'siddiq0506@gmail.com',
      subject: 'New Lead from Abnexa Website',
      html: emailBody.replace(/\n/g, '<br />'), // Convert newlines to <br /> for HTML emails
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Error sending email.' }), { status: 500 });
  }
}
