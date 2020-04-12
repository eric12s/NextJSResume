var express = require('express');
var router = express.Router();
require('dotenv').config()

var nodemailer = require('nodemailer');
var cors = require('cors');
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
const accessToken = oauth2Client.getAccessToken()

var transport = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      type: 'OAuth2',
      user: process.env.USER,
      clientId:  process.env.CLIENTID,
      clientSecret:  process.env.CLIENTSECRET,
      refreshToken:  process.env.REFRESHTOKEN,
      accessToken: accessToken,
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  console.log(req.body.name)
  console.log(req.body.message)

  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var subject = req.body.subject
  var content = `name: ${name} \n subject: ${subject} \n email: ${email} \n message: ${message}`

  var mail = {
    from: name,
    to: 'ericsabag@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: err
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
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