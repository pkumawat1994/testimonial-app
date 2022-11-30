import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { emailRegex } from "../../assets/regex/regex";

const ContactFormSection = () => {
  const errorStyle = {
    color: "red",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    var templateParams = data;

    emailjs
      .send(
        "service_zb873pa",
        "template_bgjg5ra",
        templateParams,
        "6-439WYKDVk5WElfa"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("email send successfully !");
          }
        },
        (error) => {
          toast.error("email was not send ??");
        }
      );
    reset();
  };
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Contact Form </h4>
              <p className="text">
                Any Query And Question Please Conatct Our Developer Team
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        {...register("name", { required: "name is require" })}
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        data-error="Name is required."
                      />
                      <div className="help-block with-errors">
                        <p style={errorStyle}>
                          {errors.name && errors.name.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        {...register("email", {
                          required: "Valid email is required",
                          pattern: {
                            value: emailRegex,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        // data-error="Valid email is required."
                        // required="required"
                      />
                      <div className="help-block with-errors">
                        <p style={errorStyle}>
                          {errors.email && errors.email.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        data-error="Subject is required."
                      />
                      <div className="help-block with-errors">
                        {" "}
                        <p style={errorStyle}>
                          {errors.subject && errors.subject.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-form form-group">
                      <input
                        {...register("phone", {
                          required: "phone is require",
                        })}
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        data-error="Phone is required."
                      />
                      <div className="help-block with-errors">
                        <p style={errorStyle}>
                          {errors.phone && errors.phone.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-form form-group">
                      <textarea
                        {...register("message", {
                          required: "message is require",
                        })}
                        placeholder="Your Mesaage"
                        name="message"
                        // data-error="Please, leave us a message."
                        // required="required"
                      ></textarea>
                      <div className="help-block with-errors">
                        <p style={errorStyle}>
                          {errors.message && errors.message.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="form-message"></p>
                  <div className="col-md-12">
                    <div className="single-form form-group text-center">
                      <button type="submit" className="main-btn">
                        send message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
