import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Gmail App Password (no spaces)
      },
    });

    // Verify transporter connection
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: "mohitmishra8921@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #4f46e5;">New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">Sent from your portfolio contact form</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}