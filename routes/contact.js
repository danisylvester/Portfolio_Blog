const express = require('express');
const { json, response } = require('express');
const dotenv = require('dotenv').config();
const mailgun = require('mailgun-js')

const router = express.Router();

// mailgun api variables
var DOMAIN = process.env.MAILGUN_DOMAIN;
var API_KEY = process.env.MAILGUN_API_KEY;

router.post('/', (req, res) => {
    //cfconsole.log(req.body);
    const mg = mailgun({apiKey: API_KEY, domain: DOMAIN});
    const data = {
        from: req.body.email,
        to: 'maria.sylvester10@gmail.com',
        subject: req.body.subject,
        text: 'lol'
    };
    mg.messages().send(data, (err, body) => {
            console.log('made it here')
            if(err){
                console.log('dungoofed')
                res.status(500).send({error: err})
            }
            res.send('Message was sent successfully!');
            console.log(body);
        })
});

module.exports = router;