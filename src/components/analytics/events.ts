// Global type declarations for window analytics objects
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Dispatch a generic analytics event across Google Analytics (GA4),
 * Google Tag Manager (dataLayer), and Microsoft Clarity.
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (typeof window === 'undefined') return;

  // 1. Google Tag Manager / dataLayer push
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString(),
    });
  }

  // 2. Google Analytics 4 gtag event
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // 3. Microsoft Clarity custom event
  if (typeof window.clarity === 'function') {
    try {
      window.clarity('event', eventName);
      // Also set custom tags if key params exist
      if (eventParams.action || eventParams.category) {
        window.clarity('set', eventName, JSON.stringify(eventParams));
      }
    } catch {
      // Gracefully ignore clarity errors
    }
  }
};

/**
 * Track Phone Call Click conversions
 */
export const trackPhoneClick = (phoneNumber: string = '+916205518929', location: string = 'floating_button') => {
  trackEvent('phone_call_click', {
    event_category: 'Engagement',
    event_label: phoneNumber,
    contact_method: 'Phone',
    click_location: location,
    value: 1,
  });
};

/**
 * Track WhatsApp Chat Click conversions
 */
export const trackWhatsAppClick = (phoneNumber: string = '+916205518929', location: string = 'floating_button') => {
  trackEvent('whatsapp_click', {
    event_category: 'Engagement',
    event_label: phoneNumber,
    contact_method: 'WhatsApp',
    click_location: location,
    value: 1,
  });
};

/**
 * Track Contact Form submissions
 */
export const trackContactFormSubmission = (formName: string = 'contact_form', details: Record<string, any> = {}) => {
  trackEvent('generate_lead', {
    event_category: 'Lead',
    event_label: formName,
    form_name: formName,
    ...details,
  });
};

/**
 * Track Calendly Meeting Booking Clicks
 */
export const trackCalendlyClick = (
  calendlyUrl: string = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/austicscrap',
  location: string = 'contact_page'
) => {
  trackEvent('calendly_meeting_click', {
    event_category: 'Schedule',
    event_label: 'Calendly Consultation Booking',
    booking_url: calendlyUrl,
    click_location: location,
    value: 5,
  });
};

