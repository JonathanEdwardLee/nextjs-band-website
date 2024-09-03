"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    emailjs
      .sendForm(
        "service_kxbflgi",
        "template_w5jvp2s",
        e.currentTarget,
        "dmP6hrIo8MJ-LYk4H"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  const inputClass =
    "w-full p-2 border border-gray-600 rounded bg-white text-black placeholder-gray-500 shadow-md";

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-muted rounded-lg p-8 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-white font-semibold mb-2">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Enter your name"
              onChange={handleChange}
              value={formData.from_name}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Email</label>
            <input
              type="email"
              name="from_email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={formData.from_email}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              placeholder="Enter your message"
              onChange={handleChange}
              value={formData.message}
              required
              className={`${inputClass} resize-none`}
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn-custom w-1/2">
              Send Message
            </button>
          </div>
        </form>
        {status && <p className="mt-4 text-center text-white">{status}</p>}
      </div>
    </div>
  );
};

export default ContactForm;
