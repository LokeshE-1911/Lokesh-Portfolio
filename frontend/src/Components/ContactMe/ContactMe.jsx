import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t5lvw63",
        "template_i5s7v2p",
        formData,
        "RYRCyllNQMIU77ZS_"
      )
      .then(
        (result) => {
          alert("Message Sent!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again");
        }
      );
  };
  return (
    <div className="font-display mx-3" id="contact-me">
      <div className="mx-auto w-full max-w-[550px]">
        <h4 className="mb-8 text-4xl font-bold text-center md:text-left">
          Contact-Me
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label for="name" className="mb-3 block text-base font-medium ">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label for="email" className="mb-3 block text-base font-medium ">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label for="subject" className="mb-3 block text-base font-medium ">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label for="message" className="mb-3 block text-base font-medium ">
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </div>
  );
};

export default ContactMe;
