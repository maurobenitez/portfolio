
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: import.meta.env.VITE_MAIL_USERNAME,
        pass: import.meta.env.VITE_MAIL_PASSWORD,
        clientId: import.meta.env.VITE_OAUTH_CLIENTID,
        clientSecret: import.meta.env.VITE_OAUTH_CLIENT_SECRET,
        refreshToken: import.meta.env.VITE_OAUTH_REFRESH_TOKEN
    }
});

export const sendEmail = () => {
    let mailOptions = {
        from: "maurogabrielbenitez@gmail.com",
        to: "maurogabrielbenitez@gmail.com",
        subject: 'Nodemailer test',
        text: 'Hi from your nodemailer project'
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Email sent successfully");
            console.log(data)
        }
    });
}

module.exports = { sendEmail };