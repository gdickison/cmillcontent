const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
  port: 465,
  host: process.env.APPLICATION_EMAIL_HOST,
  auth: {
    user: process.env.APPLICATION_EMAIL_USER,
    pass: process.env.APPLICATION_EMAIL_PASSWORD
  },
  secure: true
});

export default async function contact (req, res) {
  console.log('req.body', req.body)
  try {
    const mailData = {
      from: '"Website Contact Request" <contact-form@bluecanoemailer.dev>',
      to: 'cmillcontent@gmail.com',
      replyTo: `${req.body.formData.email}`,
      subject: `${req.body.formData.subject}`,
      text: `${req.body.formData.message}`,
      html: `<div>
        <p>You have a contact request from CMillContent.com:</p>
        <p>${req.body.formData.message}</p>
        <p>${req.body.formData.email}</p>
      </div>`
    }
console.log('mailData', mailData)
    await transporter.sendMail(mailData);

    return res.json({status: 200})

  } catch {
  
    return res.json({status: 400})
}}