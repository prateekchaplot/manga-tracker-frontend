import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ga4Service {
  
  private readonly GA_MEASUREMENT_ID = 'G-SR06F0LGJW';

  constructor() { }

  initializeGoogleAnalytics() {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      (window as any)['dataLayer'] = (window as any)['dataLayer'] || [];
      function gtag(...args: any[]) {
        (window as any)['dataLayer'].push(arguments);
      }
      gtag('js', new Date());
      gtag('config', this.GA_MEASUREMENT_ID);
    };
  }
  
}
