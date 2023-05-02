
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const templateParams = {
  from_name: "",
  from_email: "",
  message: "",
}

const sendEmail = () => {
  e.preventDefault();
  emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.log('FAILED...', err);
    });
}

export {templateParams, sendEmail}
