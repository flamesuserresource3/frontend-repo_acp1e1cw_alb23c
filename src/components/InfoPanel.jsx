import React from 'react';
import { Phone, Mail, MapPin, Banknote, Quote } from 'lucide-react';

const InfoPanel = () => {
  return (
    <aside className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
        <h3 className="text-lg font-semibold text-amber-900">Ways to Donate</h3>
        <div className="mt-4 space-y-3 text-amber-900/90">
          <div className="flex items-start gap-3">
            <Banknote className="mt-0.5 h-5 w-5 text-rose-600" />
            <div>
              <p className="font-medium">Bank Transfer (Preferred)</p>
              <ul className="mt-1 text-sm">
                <li>Account Name: Shree Mandir Community Centre</li>
                <li>Sort Code: 12-34-56</li>
                <li>Account Number: 12345678</li>
                <li>Reference: Your Name + Purpose</li>
              </ul>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-rose-600" />
            <div>
              <p className="font-medium">In Person</p>
              <p className="text-sm">You can donate at the temple office during opening hours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-rose-50 to-amber-50 p-6 ring-1 ring-amber-100">
        <h3 className="text-lg font-semibold text-amber-900">Contact</h3>
        <div className="mt-3 space-y-2 text-amber-900/90 text-sm">
          <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-600" /> 020 1234 5678</p>
          <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-rose-600" /> support@shreemandir.org</p>
        </div>
      </div>

      <figure className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
        <blockquote className="text-amber-900/90 italic">
          <Quote className="mb-3 h-6 w-6 text-rose-500" aria-hidden="true" />
          "By giving, we grow. Your support keeps our traditions alive for future generations."
        </blockquote>
        <figcaption className="mt-3 text-sm text-amber-700">— Temple Trustee</figcaption>
      </figure>
    </aside>
  );
};

export default InfoPanel;
