import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const templatePath = path.join(
      process.cwd(),
      "src/app/api/send-email/template.html"
    );
    let template = fs.readFileSync(templatePath, "utf8");
    template = template.replace(/{{name}}/g, name);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thanks for Reaching Out, ${name}!`,
      html: template,
    });

    return NextResponse.json({ message: "Email sent", info }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
