declare global {
  interface Window {
    gtag: (command: string, GA_MEASUREMENT_ID: string, config: object) => void;
  }
}

export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
