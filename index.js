const nodemailer = require('nodemailer');
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
require("dotenv").config()
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    }
});
  
let mailDetails = {
    from: 'sk5105938@gmail.com',
    to: 'anurag21@navgurukul.org',
    cc:'khaja21@navgurukul.org',
    bcc:'ss5105928@gmail.com',
    subject: 'Test mail',
    text: 'HI everyone I m  Surajkumar from up'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log('Error Occurs');
    } else {
        console.log('Email sent successfully');
    }
});


app.listen(port,()=>{
    console.log(`Server is on :${port}`)
})



