import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

class MailServices {
  constructor() {
    this.transportier = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    await this.transportier.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Activate account on ${process.env.API_URL}`,
      text: "",
      html: `
      <div>
      <h1> On activate your contact link to</h1>
      <a href="${link}">${link}</a>
      </div>`,
    });
  }
}

export default new MailServices();
