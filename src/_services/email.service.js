import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export const emailService = {
    sendEmail
};

function sendEmail(receiversMail){
    let nodemailer = require('nodemailer');

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    let mailOptions = {
        from: process.env.EMAIL,
        to: receiversMail,
        subject: 'Thank you for joining Good2Meet',
        text: 'Nice to meet you! Now you can start using page. In case of any questions, please contact us on good2meet.info@gmail.com'
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}
