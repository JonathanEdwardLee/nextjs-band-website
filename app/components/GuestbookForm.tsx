"use client";

import React, { useState } from "react";

const initialFormState = { name: "", location: "", message: "" };
const maxLengths = { name: 50, location: 50, message: 750 };

interface Props {
  onSubmitSuccess: () => void;
}

const GuestbookForm: React.FC<Props> = ({ onSubmitSuccess }) => {
  const [form, setForm] = useState(initialFormState);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (value.length <= maxLengths[name as keyof typeof maxLengths]) {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    } else {
      alert(
        `Maximum ${
          maxLengths[name as keyof typeof maxLengths]
        } characters allowed for ${name}`
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit");
      }

      const data = await res.json();
      setForm(initialFormState);
      setStatus("Message submitted successfully!");
      onSubmitSuccess(); // Call this function after successful submission
    } catch (error) {
      console.error("Failed to submit form", error);
      setStatus(
        error instanceof Error ? error.message : "Failed to submit message"
      );
    }
  };

  const inputClass =
    "w-full p-2 border border-gray-600 rounded bg-white text-black placeholder-gray-500 shadow-md";

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-center text-3xl mb-8 font-bold">
          Sign Our Guestbook!
        </h2>
        <div className="bg-muted rounded-lg p-8 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-8">
            {Object.entries(form).map(([key, value]) =>
              key === "message" ? (
                <textarea
                  key={key}
                  name={key}
                  placeholder="Say hello! Leave a message! Where did you see us perform? Which band member you dislike the most? Do we suck? Which band is better? Tell us all anonymously!"
                  value={value}
                  onChange={handleChange}
                  required
                  className={`${inputClass} h-32 resize-none`}
                  maxLength={maxLengths[key as keyof typeof maxLengths]}
                />
              ) : (
                <input
                  key={key}
                  type="text"
                  name={key}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={value}
                  onChange={handleChange}
                  required={key !== "location"}
                  className={`${inputClass} w-3/4 mx-auto block`}
                  maxLength={maxLengths[key as keyof typeof maxLengths]}
                />
              )
            )}
            <div className="flex justify-center">
              <button type="submit" className="btn-custom w-1/2">
                Post Message
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-sm text-white">{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default GuestbookForm;
