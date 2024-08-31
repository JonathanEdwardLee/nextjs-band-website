"use client";

import React, { useState } from "react";

const GuestbookForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", location: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm({ name: "", location: "", message: "" });
        setStatus("Message submitted successfully!");
      } else {
        const { message } = await res.json();
        setStatus(`Error: ${message}`);
      }
    } catch (error) {
      console.error("Failed to submit form", error);
      setStatus("Failed to submit message");
    }
  };

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-center text-3xl mb-8 font-bold">
          Sign Our Guestbook!
        </h2>
        <div className="bg-[#333] rounded-lg p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-black placeholder-gray-400"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={form.location}
              onChange={handleChange}
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-black placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-600 rounded bg-gray-700 text-black placeholder-gray-400 h-32"
            />
            <button type="submit" className="btn-custom w-full">
              Post Message
            </button>
          </form>
          {status && <p className="mt-4 text-sm text-white">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default GuestbookForm;
