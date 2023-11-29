// component handling emailJS logic on form submit from contact page
import emailjs from '@emailjs/browser';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const sendEmail = async (name, email, message) => {
    try {
        const res = await emailjs.send(
            serviceId,
            templateId,
            {
                from_name: name,
                from_email: email,
                message: message,
            },
            publicKey
        );

        console.log("email sent successfully", res);
        return;
    } catch (error) {
        console.log("error sending email", error);
        return;
    }
}

export default sendEmail;