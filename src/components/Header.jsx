import React from 'react';
import { Heart, Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* Subtle background motif */}
      <div aria-hidden="true" className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="templePattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M60 10 L80 40 L40 40 Z" fill="#fef3c7" />
              <rect x="50" y="40" width="20" height="40" fill="#fde68a" rx="2" />
              <circle cx="60" cy="95" r="3" fill="#fca5a5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#templePattern)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="flex items-center gap-4">
          {/* Logo placeholder: simple mandala-like heart & shield for trust */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-amber-200">
            <Heart className="h-7 w-7 text-rose-500" aria-hidden="true" />
          </div>
          <div>
            <h1 className="font-semibold tracking-tight text-2xl sm:text-3xl text-amber-900">
              Shree Mandir Community Centre
            </h1>
            <p className="mt-1 text-sm text-amber-800/80">
              Welcoming all with devotion, culture, and community.
            </p>
          </div>
          <div className="ml-auto hidden sm:flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
            <Shield className="h-4 w-4" aria-hidden="true" />
            <span className="text-sm font-medium">Secure & Trusted</span>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 ring-1 ring-amber-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-700">Donate</h2>
          <p className="mt-2 max-w-3xl text-amber-900/90">
            Support temple maintenance, community events, and cultural heritage. Your generosity helps sustain
            services, festivals, education, and support for our local community across the UK.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
