'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useTripleWhale } from '@/hooks/useTripleWhale';

interface ContactInfo {
  email?: string;
  phone?: string;
}

interface ContactContextType {
  contactInfo: ContactInfo;
  setContactInfo: (info: ContactInfo) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({});
  const { trackContact } = useTripleWhale();

  useEffect(() => {
    // Load saved contact info from localStorage
    const storedEmail = localStorage.getItem('vuom_contact_email');
    const storedPhone = localStorage.getItem('vuom_contact_phone');

    if (storedEmail || storedPhone) {
      setContactInfo({
        email: storedEmail || undefined,
        phone: storedPhone || undefined
      });
    }
  }, []);

  const handleSetContactInfo = (info: ContactInfo) => {
    // Save to state
    setContactInfo(info);

    // Save to localStorage
    if (info.email) {
      localStorage.setItem('vuom_contact_email', info.email);
    }
    if (info.phone) {
      localStorage.setItem('vuom_contact_phone', info.phone);
    }

    // Track with Triple Whale
    trackContact(info);
  };

  return (
    <ContactContext.Provider value={{ contactInfo, setContactInfo: handleSetContactInfo }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
} 