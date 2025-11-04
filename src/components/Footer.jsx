import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-amber-100 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2 text-amber-900/90 text-sm">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-rose-600" /> 108 Temple Way, London, UK</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-600" /> 020 1234 5678</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-rose-600" /> info@shreemandir.org</p>
          </div>
          <div className="flex items-center sm:justify-end gap-4">
            <a href="#" aria-label="Facebook" className="rounded-full p-2 text-amber-900/80 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Instagram" className="rounded-full p-2 text-amber-900/80 hover:text-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-400"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-amber-800/70">© {new Date().getFullYear()} Shree Mandir Community Centre. Registered Charity in England & Wales.</p>
      </div>
    </footer>
  );
};

export default Footer;
