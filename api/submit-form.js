import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins or specify your frontend URL
    res.status(200).end();
    return;
  }

  // Handle POST requests
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}