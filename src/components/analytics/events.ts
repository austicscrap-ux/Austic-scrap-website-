// Global type declarations for window analytics objects
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Capture and store incoming marketing campaign parameters (UTMs)
 * in sessionStorage so they persist across Next.js route transitions.
 */
export const captureUtmParams = () => {
  if (typeof window === 'undefined') return;
  try {
    const params = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];
    const utmData: Record<string, string> = {};
    let hasMarketingParam = false;

    utmKeys.forEach((key) => {
      const val = params.get(key);
      if (val) {
        utmData[key] = val;
        hasMarketingParam = true;
      }
    });

    if (hasMarketingParam) {
      sessionStorage.setItem('austic_marketing_attribution', JSON.stringify(utmData));
    }
  } catch {
    // Gracefully handle browser storage restrictions
  }
};

/**
 * Retrieve persisted campaign UTM parameters.
 */
export const getStoredUtmParams = (): Record<string, string> => {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem('austic_marketing_attribution');
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

/**
 * Dispatch a consolidated analytics event across Google Analytics (GA4),
 * Google Tag Manager (dataLayer), and Microsoft Clarity with full attribution context.
 */
export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (typeof window === 'undefined') return;

  const utmContext = getStoredUtmParams();
  const enrichedParams = {
    ...utmContext,
    ...eventParams,
    page_location: window.location.href,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Tag Manager / dataLayer push
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...enrichedParams,
    });
  }

  // 2. Google Analytics 4 direct event (if gtag is configured independently)
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, enrichedParams);
  }

  // 3. Microsoft Clarity custom event
  if (typeof window.clarity === 'function') {
    try {
      window.clarity('event', eventName);
      if (eventParams.action || eventParams.category) {
        window.clarity('set', eventName, JSON.stringify(enrichedParams));
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
 * Track Calendly Meeting Booking Clicks (Initiate schedule)
 */
export const trackCalendlyClick = (
  calendlyUrl: string = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/austicscrap',
  location: string = 'contact_page'
) => {
  trackEvent('calendly_meeting_click', {
    event_category: 'Schedule',
    event_label: 'Calendly Consultation Booking Click',
    booking_url: calendlyUrl,
    click_location: location,
    value: 5,
  });
};

/**
 * Track Calendly Confirmed Booking (High-value primary conversion)
 */
export const trackCalendlyScheduled = (payload: any = {}) => {
  trackEvent('calendly_event_scheduled', {
    event_category: 'Conversion',
    event_label: 'Consultation Successfully Scheduled',
    conversion_type: 'appointment_booked',
    value: 50,
    ...payload,
  });
};

