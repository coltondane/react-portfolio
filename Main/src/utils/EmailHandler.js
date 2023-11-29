// component handling emailJS logic on form submit from contact page
import emailjs from '@emailjs/browser';

const sendEmail = async (name, email, message) => {
    try {
        const res = await emailjs.send(
            "service_4bodsd8",
            "template_p2nz6nb",
            {
                from_name: name,
                from_email: email,
                message: message,
            },
            "3k2mEyjS8Of0O5omb"
        );

        console.log("email sent successfully", res);
        return;
    } catch (error) {
        console.log("error sending email", error);
        return;
    }
}

export default sendEmail;