"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MessageSquare, User, Mail, MapPin } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface GetInTouchFormProps {
  onSubmit?: (data: GetInTouchData) => void;
}

interface GetInTouchData {
  name: string;
  email: string;
  phone: string;
  phoneCountryCode: string;
  phoneNumber: string;
  address: string;
  serviceType: string;
  city: string;
  message: string;
}

const GetInTouchForm: React.FC<GetInTouchFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<GetInTouchData>({
    name: '',
    email: '',
    phone: '',
    phoneCountryCode: '',
    phoneNumber: '',
    address: '',
    serviceType: '',
    city: 'Kolkata',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhoneChange = (value: string, country: any) => {
    const dialCode = country?.dialCode || '';
    const number = value.replace(dialCode, '').trim();
    setFormData(prev => ({
      ...prev,
      phone: value,
      phoneCountryCode: dialCode,
      phoneNumber: number
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setStatus("Thank you! Your message has been sent successfully.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        phoneCountryCode: '',
        phoneNumber: '',
        address: '',
        serviceType: '',
        city: 'Kolkata',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#127749]/20 focus:border-[#127749] outline-none transition-all placeholder-neutral-400 text-neutral-800 font-secondary";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name *"
          value={formData.name}
          onChange={handleInputChange}
          className={inputClasses}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            value={formData.email}
            onChange={handleInputChange}
            className={inputClasses}
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <PhoneInput
            country={'in'}
            value={formData.phone}
            onChange={handlePhoneChange}
            inputClass="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#127749]/20 focus:border-[#127749] outline-none transition-all placeholder-neutral-400 text-neutral-800 font-secondary"
            buttonClass="bg-neutral-50 border border-neutral-200 rounded-l-lg"
            dropdownClass="bg-white border border-neutral-200 rounded-lg shadow-lg"
            containerClass="w-full"
            placeholder="Phone Number *"
            disabled={isSubmitting}
            required
          />
        </div>
      </div>

      <div>
        <input
          type="text"
          name="address"
          placeholder="Your Address *"
          value={formData.address}
          onChange={handleInputChange}
          className={inputClasses}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
            className={inputClasses}
            required
            disabled={isSubmitting}
          >
            <option value="">Type of Service *</option>
            <option value="electronic">Electronic Waste</option>
            <option value="metal">Metal Scrap</option>
            <option value="plastic">Plastic</option>
            <option value="paper">Paper/Cardboard</option>
            <option value="mixed">Mixed Scrap</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <select
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className={inputClasses}
            required
            disabled={isSubmitting}
          >
            <option value="">Select City *</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Patna">Patna</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
        </div>
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Tell us how we can help you..."
          value={formData.message}
          onChange={handleInputChange}
          className={`${inputClasses} min-h-32 resize-none`}
          rows={4}
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        className="w-full py-4 text-lg font-bold bg-[#127749] hover:bg-[#0e5e3a] text-white shadow-lg transition-all"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>

      {status && (
        <div className={`p-4 rounded-lg text-center font-medium border ${
          status.includes("success") || status.includes("Thank you") 
            ? "bg-green-50 text-[#127749] border-green-100" 
            : "bg-red-50 text-red-600 border-red-100"
        }`}>
          {status}
        </div>
      )}
    </form>
  );
};

export default GetInTouchForm;
