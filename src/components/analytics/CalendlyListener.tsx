"use client";

import { useEffect } from "react";
import { trackCalendlyScheduled } from "./events";

export default function CalendlyListener() {
  useEffect(() => {
    const handleCalendlyMessage = (e: MessageEvent) => {
      // Validate origin or event structure from Calendly
      if (
        e.data &&
        typeof e.data === "object" &&
        e.data.event === "calendly.event_scheduled"
      ) {
        trackCalendlyScheduled(e.data.payload);
      }
    };

    window.addEventListener("message", handleCalendlyMessage);
    return () => {
      window.removeEventListener("message", handleCalendlyMessage);
    };
  }, []);

  return null;
}
