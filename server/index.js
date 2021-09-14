const express = require('express');
const router = express.Router();
require('dotenv').config()

const nodemailer = require('nodemailer');
const cors = require('cors');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
  process.env.CLIENTID,
  process.env.CLIENTSECRET,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: process.env.REFRESHTOKEN
});

const sendEmail = async (name, email, message, subject) => {
  try {
    const accessToken = await oauth2Client.getAccessToken();
    const transport = {
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        type: 'OAuth2',
        user: process.env.USER,
        clientId:  process.env.CLIENTID,
        clientSecret:  process.env.CLIENTSECRET,
        refreshToken:  process.env.REFRESHTOKEN,
        accessToken: accessToken,
      },
      tls: {
        rejectUnauthorized: false
      }
    }
    const transporter = nodemailer.createTransport(transport);

    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
        throw new Error(error);
      } else {
        console.log('Server is ready to take messages');
      }
    });

    const content = `name: ${name} \n subject: ${subject} \n email: ${email} \n message: ${message}`;

    const mailOptions = {
      from: name,
      to: 'ericsabag@gmail.com',
      subject: 'New Message from Contact Form',
      text: content
    }

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch(error) {
    throw new Error(error);
  }
}

router.post('/send', (req, res, next) => {
  console.log(req.body.name)
  console.log(req.body.message)

  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const subject = req.body.subject

  sendEmail(name, email, message, subject)
    .then(result => res.json({
      status: 'success'
    }))
    .catch(error => {
      res.json({
        status: error
      })
    });

})

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
// app.use(express.urlencoded());
// app.use(express.multipart());
app.use('/', router)
const PORT = process.env.PORT || 3002
app.listen(PORT)

module.exports = app;
