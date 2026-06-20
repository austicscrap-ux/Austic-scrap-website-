"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

interface FormField {
  name: string;
  type: "text" | "email" | "tel" | "number" | "textarea";
  placeholder: string;
  required: boolean;
  options?: { value: string; label: string }[];
}

interface ContactFormProps {
  fields: FormField[];
  submissionEndpoint: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  fields,
  submissionEndpoint,
}) => {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Logic for frontend only mode
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("Thank you! Your enquiry has been sent.");
      event.currentTarget.reset();
    }, 1000);
  };

  const inputClasses =
    "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#127749]/20 focus:border-[#127749] outline-none transition-all placeholder-neutral-400 text-neutral-800 font-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="relative">
          {field.type === "textarea" ? (
            <textarea
              className={`${inputClasses} min-h-[140px] resize-none`}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              disabled={isSubmitting}
              rows={4}
            ></textarea>
          ) : (
            <input
              type={field.type}
              className={inputClasses}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              disabled={isSubmitting}
            />
          )}
        </div>
      ))}

      <Button
        type="submit"
        className="w-full py-6 text-lg font-bold bg-[#127749] hover:bg-[#0e5e3a] text-white shadow-lg transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Enquiry"}
      </Button>

      {status && (
        <div className="bg-green-50 text-[#127749] p-3 rounded-lg text-center font-medium border border-green-100">
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
