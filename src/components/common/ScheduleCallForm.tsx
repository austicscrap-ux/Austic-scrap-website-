"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, Phone, Mail } from "lucide-react";

interface ScheduleCallFormProps {
  onSubmit?: (data: ScheduleCallData) => void;
}

interface ScheduleCallData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
}

const ScheduleCallForm: React.FC<ScheduleCallFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<ScheduleCallData>({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      if (onSubmit) {
        onSubmit(formData);
      }
      
      setStatus("Thank you! Your consultation has been scheduled successfully.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
      });
    } catch (error) {
      console.error('Error scheduling call:', error);
      setStatus("Failed to schedule consultation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:ring-2 focus:ring-[#127749]/20 focus:border-[#127749] outline-none transition-all placeholder-neutral-400 text-neutral-800 font-secondary";

  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-neutral-900 font-primary mb-4">
            Schedule Your Consultation
          </h3>
          <p className="text-neutral-600 font-medium mb-8">
            Choose your preferred date and time, and we'll call you to discuss your scrap management needs.
          </p>
        </div>

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
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                className={inputClasses}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                type="date"
                name="preferredDate"
                placeholder="Preferred Date *"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className={inputClasses}
                required
                disabled={isSubmitting}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className={inputClasses}
                required
                disabled={isSubmitting}
              >
                <option value="">Preferred Time *</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 7PM)</option>
              </select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full py-4 text-lg font-bold bg-[#127749] hover:bg-[#0e5e3a] text-white shadow-lg transition-all flex items-center justify-center"
            disabled={isSubmitting}
          >
            <Calendar size={20} className="mr-2" />
            {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
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

        <div className="mt-8 p-6 bg-neutral-50 rounded-lg">
          <div className="flex items-center justify-center text-neutral-600">
            <Phone size={20} className="mr-3 text-[#127749]" />
            <div>
              <p className="font-medium">Need immediate assistance?</p>
              <p className="text-sm">Call us directly: <a href="tel:+916205518929" className="text-[#127749] hover:underline">+91 62055 18929</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCallForm;
