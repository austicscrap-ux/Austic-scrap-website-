'use client';

import React, { useState } from 'react';

interface FormField {
  name: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  placeholder: string;
  required: boolean;
  options?: { value: string; label: string }[]; // For select/dropdown if needed in future
}

interface ContactFormProps {
  fields: FormField[];
  submissionEndpoint: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ fields, submissionEndpoint }) => {
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
     // Logic for frontend only mode
    setTimeout(() => {
        setIsSubmitting(false);
        setStatus('Thank you! Your enquiry has been sent. (Frontend only mode)');
        event.currentTarget.reset();
    }, 1000);
  };

  const inputClasses = "w-full p-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-neutral-400 text-neutral-800";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => (
        <div key={field.name} className="relative">
          {field.type === 'textarea' ? (
            <textarea
              className={`${inputClasses} min-h-[120px] resize-none`}
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
      <button
        type="submit"
        className="w-full btn-primary py-3 font-semibold text-lg mt-4"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
      </button>
      {status && (
        <p className={`mt-4 text-center font-medium ${status.includes('Thank you') ? 'text-secondary' : 'text-red-500'}`}>
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;