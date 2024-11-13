import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { Send } from "react-feather";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const GetDetails: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    emailjs
      .send(
        "service_y6a81lr", 
        "template_dirkj4k", 
        formData,
        "himan9714@gmail.com" 
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-shadow flex items-center justify-center space-x-2"
      >
        <span>{loading ? "Sending..." : "Send Message"}</span>
        <Send size={20} />
      </button>

      {sent && (
        <p className="text-green-500 text-sm mt-4">
          Message sent successfully!
        </p>
      )}
    </form>
  );
};

export default GetDetails;
