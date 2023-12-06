// component handling emailJS logic on form submit from contact page
import emailjs from '@emailjs/browser';

// const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
// const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
// const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

const serviceId = "service_38f7k8i";
const templateId = "template_p2nz6nb";   
const publicKey = "3k2mEyjS8Of0O5omb";

console.log(serviceId, templateId, publicKey);

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