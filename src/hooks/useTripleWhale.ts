interface ContactInfo {
  email?: string;
  phone?: string;
}

export function useTripleWhale() {
  const trackContact = (contactInfo: ContactInfo) => {
    const tryTrack = () => {
      if (typeof window !== 'undefined' && window.TriplePixel) {
        window.TriplePixel('Contact', contactInfo);
      } else {
        setTimeout(tryTrack, 400);
      }
    };

    tryTrack();
  };

  return {
    trackContact
  };
}

// Add TypeScript declarations
declare global {
  interface Window {
    TriplePixel: (event: string, data: any) => void;
  }
} 