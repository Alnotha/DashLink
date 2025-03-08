import nodemailer from 'nodemailer';

// Create reusable transporter object using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER || '',
    // Use App Password for Gmail, not your regular password
    pass: process.env.GMAIL_APP_PASSWORD || ''
  }
});

interface ContactNotification {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  message: string;
  storeCount: number;
}

export async function sendContactNotification(data: ContactNotification): Promise<void> {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'alnotha@gmail.com',
    subject: `New Contact Form Submission - ${data.businessName}`,
    text: `
New contact form submission received:

Business Name: ${data.businessName}
Owner Name: ${data.ownerName}
Email: ${data.email}
Phone: ${data.phone}
Number of Stores: ${data.storeCount}

Message:
${data.message}
    `,
    html: `
      <h2>New contact form submission received</h2>
      <table>
        <tr><td><strong>Business Name:</strong></td><td>${data.businessName}</td></tr>
        <tr><td><strong>Owner Name:</strong></td><td>${data.ownerName}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Phone:</strong></td><td>${data.phone}</td></tr>
        <tr><td><strong>Number of Stores:</strong></td><td>${data.storeCount}</td></tr>
      </table>
      <h3>Message:</h3>
      <p>${data.message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send notification email');
  }
}