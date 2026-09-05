import React from 'react';
import GoogleTagManager, { GTMNoScript } from './GoogleTagManager';
import GoogleAnalytics from './GoogleAnalytics';
import MicrosoftClarity from './MicrosoftClarity';
import RouteTracker from './RouteTracker';
import CalendlyListener from './CalendlyListener';

interface AnalyticsProps {
  gtmId?: string;
  gaId?: string;
  clarityId?: string;
}

/**
 * Consolidated Analytics Provider
 * Injects Google Tag Manager, Google Analytics 4, and Microsoft Clarity,
 * monitors client-side App Router pageviews via RouteTracker,
 * and tracks confirmed conversions via CalendlyListener.
 */
export const Analytics: React.FC<AnalyticsProps> = ({
  gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WGRG7FJV',
  gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-KRVFMBQNB6',
  clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'y6ucdx00uf',
}) => {
  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {clarityId && <MicrosoftClarity clarityId={clarityId} />}
      {gaId && <RouteTracker gaId={gaId} />}
      <CalendlyListener />
    </>
  );
};

export { GTMNoScript, GoogleTagManager, GoogleAnalytics, MicrosoftClarity, RouteTracker, CalendlyListener };
export default Analytics;
