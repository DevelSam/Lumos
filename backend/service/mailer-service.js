const nodemailer = require('nodemailer')
const process = require('process')
class MailerService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD },
    })
  }
  async sendActivationMail(to, link) {
    console.log(link)
    console.log(to)
    this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Активация аккаунта на сайте ' + process.env.CLIENT_URL,
      text: '',
      html: `
        <div>
        <h1>Для активация аккаунта перейдети по ссылке</h1>
        <a href="${link}" >Ссылка</a>
        </div>
      `,
    })
  }
}
module.exports = new MailerService()
