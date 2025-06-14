import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, date, guests, city, agree } = body;
  console.log(body)

  if (!name || !phone || !date) {
    return new Response(JSON.stringify({ message: "Please fill all required fields." }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Wedding Booking from Tryuginarayan Shaadi website" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Wedding Booking from Tryuginarayan Shaadi website",
    html: `
      <h3>New Wedding Booking Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>City:</strong> ${city}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Email sent successfully."}), {
      status: 200,
    });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ message: "Error sending email." }), {
      status: 500,
    });
  }
}
