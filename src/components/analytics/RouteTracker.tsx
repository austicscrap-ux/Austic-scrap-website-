"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureUtmParams } from "./events";

interface RouteTrackerContentProps {
  gaId?: string;
}

function RouteTrackerContent({ gaId }: RouteTrackerContentProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Capture and persist any incoming campaign UTM tags in sessionStorage
    captureUtmParams();

    // 2. Compute current full URL
    const queryString = searchParams?.toString();
    const currentUrl = queryString ? `${pathname}?${queryString}` : pathname;

    // 3. Send virtual pageview to Google Analytics 4
    if (typeof window !== "undefined" && typeof window.gtag === "function" && gaId) {
      window.gtag("event", "page_view", {
        page_path: currentUrl,
        page_location: window.location.href,
        page_title: document.title,
        send_to: gaId,
      });
    }

    // 4. Send virtual page navigation to Microsoft Clarity
    if (typeof window !== "undefined" && typeof window.clarity === "function") {
      try {
        window.clarity("set", "page_path", currentUrl);
      } catch {
        // Graceful fallback
      }
    }
  }, [pathname, searchParams, gaId]);

  return null;
}

export default function RouteTracker({ gaId }: { gaId?: string }) {
  return (
    <Suspense fallback={null}>
      <RouteTrackerContent gaId={gaId} />
    </Suspense>
  );
}
