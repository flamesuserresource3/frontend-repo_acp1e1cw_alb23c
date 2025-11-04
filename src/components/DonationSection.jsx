import React, { useMemo, useState } from 'react';

const GiftAidDeclaration = ({ enabled, onChange, values, errors }) => {
  return (
    <section aria-labelledby="gift-aid-heading" className="mt-8 rounded-2xl bg-amber-50/60 p-5 ring-1 ring-amber-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 id="gift-aid-heading" className="text-lg font-semibold text-amber-900">Gift Aid (UK only)</h3>
          <p className="mt-1 text-sm text-amber-900/80">
            Boost your donation by 25p for every £1 you donate, at no extra cost to you.
          </p>
        </div>
        <label className="inline-flex items-center gap-2">
          <input
            type="checkbox"
            className="h-5 w-5 rounded border-amber-300 text-rose-600 focus:ring-rose-400"
            checked={enabled}
            onChange={(e) => onChange({ enabled: e.target.checked })}
            aria-describedby="gift-aid-desc"
          />
          <span className="text-sm font-medium text-amber-900">Claim Gift Aid</span>
        </label>
      </div>
      <p id="gift-aid-desc" className="mt-4 text-sm text-amber-900/90">
        I want to Gift Aid my donation and any donations I make in the future or have made in the past 4 years to
        Shree Mandir Community Centre. I am a UK taxpayer and understand that if I pay less Income Tax and/or Capital
        Gains Tax than the amount of Gift Aid claimed on all my donations in that tax year it is my responsibility to
        pay any difference. Please notify the charity if you want to cancel this declaration, change your name or home
        address, or no longer pay sufficient tax.
      </p>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="ga_fullname" className="block text-sm font-medium text-amber-900">Full name</label>
          <input
            id="ga_fullname"
            type="text"
            className={`mt-1 w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 ${errors.full_name ? 'border-rose-400' : 'border-amber-300'}`}
            value={values.full_name}
            onChange={(e) => onChange({ full_name: e.target.value })}
            required={enabled}
            aria-invalid={!!errors.full_name}
          />
          {errors.full_name && <p className="mt-1 text-xs text-rose-600">{errors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="ga_postcode" className="block text-sm font-medium text-amber-900">Postcode</label>
          <input
            id="ga_postcode"
            type="text"
            className={`mt-1 w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 ${errors.postcode ? 'border-rose-400' : 'border-amber-300'}`}
            value={values.postcode}
            onChange={(e) => onChange({ postcode: e.target.value })}
            required={enabled}
            aria-invalid={!!errors.postcode}
          />
          {errors.postcode && <p className="mt-1 text-xs text-rose-600">{errors.postcode}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="ga_address" className="block text-sm font-medium text-amber-900">Home address</label>
          <input
            id="ga_address"
            type="text"
            className={`mt-1 w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 ${errors.address ? 'border-rose-400' : 'border-amber-300'}`}
            value={values.address}
            onChange={(e) => onChange({ address: e.target.value })}
            required={enabled}
            aria-invalid={!!errors.address}
            placeholder="House number and street, town/city"
          />
          {errors.address && <p className="mt-1 text-xs text-rose-600">{errors.address}</p>}
        </div>
        <div>
          <label htmlFor="ga_date" className="block text-sm font-medium text-amber-900">Date</label>
          <input
            id="ga_date"
            type="date"
            className={`mt-1 w-full rounded-xl border px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400 ${errors.date ? 'border-rose-400' : 'border-amber-300'}`}
            value={values.date}
            onChange={(e) => onChange({ date: e.target.value })}
            required={enabled}
            aria-invalid={!!errors.date}
          />
          {errors.date && <p className="mt-1 text-xs text-rose-600">{errors.date}</p>}
        </div>
      </div>
    </section>
  );
};

const DonationSection = () => {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [title, setTitle] = useState('Mr');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [messageType, setMessageType] = useState('None');
  const [customMessage, setCustomMessage] = useState('');

  const [giftAid, setGiftAid] = useState({ enabled: false, full_name: '', address: '', postcode: '', date: '' });
  const [giftAidErrors, setGiftAidErrors] = useState({});

  const suggested = [10, 25, 50, 100, 'Custom'];

  const effectiveAmount = useMemo(() => {
    return amount === 'Custom' ? Number(customAmount || 0) : Number(amount);
  }, [amount, customAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic front-end validation for Gift Aid when enabled
    if (giftAid.enabled) {
      const errs = {};
      if (!giftAid.full_name.trim()) errs.full_name = 'Please enter your full name.';
      if (!giftAid.address.trim()) errs.address = 'Please enter your home address.';
      if (!giftAid.postcode.trim()) errs.postcode = 'Please enter your postcode.';
      if (!giftAid.date) errs.date = 'Please select the date.';
      setGiftAidErrors(errs);
      if (Object.keys(errs).length > 0) return;
    }

    // For demo purposes we simply announce success.
    alert(`Thank you, ${name || 'Friend'}!\nDonation: £${effectiveAmount.toFixed(2)}${giftAid.enabled ? ' (with Gift Aid)' : ''}`);
  };

  return (
    <section aria-labelledby="donation-form-heading" className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
      <h2 id="donation-form-heading" className="sr-only">Donation form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-amber-900">Donation amount</label>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-5">
            {suggested.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setAmount(v)}
                className={`rounded-xl px-3 py-2 text-center text-sm font-medium ring-1 transition focus:outline-none focus:ring-2 focus:ring-rose-400 ${
                  amount === v ? 'bg-rose-600 text-white ring-rose-600' : 'bg-amber-50 text-amber-900 ring-amber-200 hover:bg-amber-100'
                }`}
                aria-pressed={amount === v}
              >
                {v === 'Custom' ? 'Custom' : `£${v}`}
              </button>
            ))}
          </div>
          {amount === 'Custom' && (
            <div className="mt-3">
              <label htmlFor="custom_amount" className="sr-only">Custom amount</label>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-amber-700">£</span>
                <input
                  id="custom_amount"
                  type="number"
                  min="1"
                  step="0.01"
                  inputMode="decimal"
                  className="w-full rounded-xl border border-amber-300 pl-7 pr-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  required
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-amber-900">Title</label>
            <select
              id="title"
              className="mt-1 w-full rounded-xl border border-amber-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Mx</option>
              <option>Dr</option>
              <option>Prof</option>
            </select>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-amber-900">Full name</label>
            <input
              id="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-amber-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-amber-900">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full rounded-xl border border-amber-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-amber-900">Address</label>
            <input
              id="address"
              type="text"
              className="mt-1 w-full rounded-xl border border-amber-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="House number and street, town/city, postcode"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="messageType" className="block text-sm font-medium text-amber-900">Message (optional)</label>
          <select
            id="messageType"
            className="mt-1 w-full rounded-xl border border-amber-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
            value={messageType}
            onChange={(e) => setMessageType(e.target.value)}
          >
            <option>None</option>
            <option>Prayer Request</option>
            <option>In Memory</option>
            <option>General Support</option>
            <option>Other (custom)</option>
          </select>
          {messageType === 'Other (custom)' && (
            <div className="mt-3">
              <label htmlFor="customMessage" className="sr-only">Custom message</label>
              <textarea
                id="customMessage"
                className="w-full rounded-xl border border-amber-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
                rows={3}
                placeholder="Write your message here"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
              />
            </div>
          )}
        </div>

        <GiftAidDeclaration
          enabled={giftAid.enabled}
          values={giftAid}
          errors={giftAidErrors}
          onChange={(patch) => setGiftAid((prev) => ({ ...prev, ...patch }))}
        />

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-amber-900/80">
            Total today: <span className="font-semibold text-rose-700">£{isNaN(effectiveAmount) ? '0.00' : effectiveAmount.toFixed(2)}</span>
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-2xl bg-rose-600 px-6 py-3 text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400"
            aria-label="Donate now"
          >
            Donate securely
          </button>
        </div>
      </form>
    </section>
  );
};

export default DonationSection;
