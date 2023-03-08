const {User} = require("../models")
const bcrypt = require("bcrypt")
const saltRounds = 12
const nodemailer = require('nodemailer')
const validateRegister = require("../validation/user")

var mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anyaforge500@gmail.com',
        pass: 'mrxsbibdvswxkeak'
    }
})

module.exports = {
    //create user.
    createUser: (req, res) => {
        // check validator when user register.
        const {errors, isValid} = validateRegister(req.body);
        // if not valid return status 400 (errors).
        if (!isValid) {
            return res.status(400).json(errors)
        }
        //create new user
        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        })
        let mailDetails = {
            from: 'anyaforge500@gmail.com',
            to: req.body.email,
            subject: "welcome",
            text: "Thank you for register to our website!"
        }
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                // console.log("Error Occurs");
                console.log('Failed in sending mail');
                console.dir({success: false, existing: false, sendError: true});
                console.dir(err);
                res.end('Failed in sending mail');
            } else {
                // console.log("Email sent successfully!");
                console.log('Successful in sending email');
                console.dir({success: true, existing: false, sendError: false});
                console.dir(response);
                res.end('Successful in sending email');
            }
        })

        //hash password.
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(newUser.password, salt, function (err,hash) {
                if(err) throw err;
                newUser.password = hash; // for hash password.
                newUser
                .save()
                .then((result) => {
                    //password confirm.
                    if(req.body.password !== req.body.passwordConfirm) {
                        res.json("Password undefined")
                    } else {
                        req.body.password == req.body.passwordConfirm
                        res.json(result)
                    }
                })
                .catch((err) => {
                    throw err
                })
            })
        })
    },
}