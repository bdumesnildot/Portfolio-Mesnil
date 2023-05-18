import { useEffect } from "react";
import { useForm } from 'react-hook-form';

import "../styles/pages-styles/Contact.scss";

import sendEmail from "../utils/sendEmail";
import Notification from "../components/Notification/Notification";

function Contact() {
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    // sendEmail(data.userName, data.email, data.message);
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      return Notification({ text: "Message envoyé avec succès" })
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="contact">
      <h2>Contact</h2>
      <div className="contact-form-cont">
        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="label" >
            Nom
            <span className="error" >
              {errors.userName?.message}
            </span>
          </p>
          <input type="text" {...register("userName", {
            required: true,
            minLength: {
              value: 3,
              message: "saisir 3 charactères minimun"
            },
            maxLength: {
              value: 80,
              message: "saisir 80 charactères maximun"
            }
          })} />

          <p className="label" >
            Email
            <span className="error" >
              {errors.email?.message}
            </span>
          </p>
          <input type="text" {...register("email", {
            required: true, 
            pattern: {
              value: /^\S+@\S+$/i,
              message: "saisir une adresse valide"
            }
          })} />

          <p className="label" >
            Message
            <span className="error" >
              {errors.message?.message}
            </span>
          </p>
          <textarea {...register("message", {
            required: true, 
            minLength: {
              value: 20,
              message: "saisir 20 charactères minimun"
            },
            maxLength: {
              value: 999,
              message: "saisir 999 charactères maximun"
            }
          })} />

          <button 
            className="btn-type-1" 
            type="submit">
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
