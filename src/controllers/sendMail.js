import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
const sendMail = async ({ name, email, message }) => {
    console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Message",
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Thank you for contacting us!",
    html: `
      <h2>Hello ${name},</h2>
      <p>We received your message.</p>
      <p>We will reply soon.</p>
      <hr/>
      <p><strong>Your message:</strong></p>
      <p>${message}</p>
    `,
  });
};

export default sendMail;