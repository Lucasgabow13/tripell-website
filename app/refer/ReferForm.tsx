"use client";

import { useActionState } from "react";
import { submitReferral, type ReferFormState } from "./actions";

const INITIAL_STATE: ReferFormState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors duration-200";

const labelClass =
  "block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2";

export default function ReferForm() {
  const [state, action, pending] = useActionState(submitReferral, INITIAL_STATE);

  if (state.status === "success") {
    return (
      <div className="py-16 flex flex-col gap-4">
        <p className="text-2xl md:text-3xl font-medium leading-snug">
          Thanks for the introduction.
        </p>
        <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
          We&apos;ll review the details and follow up with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-10">
      {/* Your details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="yourName" className={labelClass}>
            Your Name <span className="text-black">*</span>
          </label>
          <input
            id="yourName"
            name="yourName"
            type="text"
            required
            autoComplete="name"
            placeholder="First and last name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="yourEmail" className={labelClass}>
            Your Email <span className="text-black">*</span>
          </label>
          <input
            id="yourEmail"
            name="yourEmail"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Relationship */}
      <div>
        <label htmlFor="relationship" className={labelClass}>
          Your Relationship to the Owner
        </label>
        <input
          id="relationship"
          name="relationship"
          type="text"
          placeholder="e.g. friend, colleague, broker, advisor"
          className={inputClass}
        />
      </div>

      {/* Business details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="businessName" className={labelClass}>
            Business Name <span className="text-black">*</span>
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            placeholder="Company name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="industry" className={labelClass}>
            Industry
          </label>
          <input
            id="industry"
            name="industry"
            type="text"
            placeholder="e.g. home services, distribution"
            className={inputClass}
          />
        </div>
      </div>

      {/* Revenue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="revenue" className={labelClass}>
            Approximate Annual Revenue
          </label>
          <select
            id="revenue"
            name="revenue"
            defaultValue=""
            className={`${inputClass} cursor-pointer`}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-1m">Under $1M</option>
            <option value="1m-3m">$1M – $3M</option>
            <option value="3m-10m">$3M – $10M</option>
            <option value="10m-25m">$10M – $25M</option>
            <option value="25m-plus">$25M+</option>
            <option value="unknown">Not sure</option>
          </select>
        </div>
        <div>
          <label htmlFor="ownerName" className={labelClass}>
            Owner&apos;s Name
          </label>
          <input
            id="ownerName"
            name="ownerName"
            type="text"
            placeholder="If you have it"
            className={inputClass}
          />
        </div>
      </div>

      {/* Owner contact */}
      <div>
        <label htmlFor="ownerContact" className={labelClass}>
          Owner&apos;s Contact Info
        </label>
        <input
          id="ownerContact"
          name="ownerContact"
          type="text"
          placeholder="Email or phone (if you have permission to share)"
          className={inputClass}
        />
      </div>

      {/* Anything else */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Anything Else We Should Know <span className="text-black">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us what the business does, why you think it's a fit, and any context on the owner's situation."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}

      <div>
        <button
          type="submit"
          disabled={pending}
          className="text-xs uppercase tracking-[0.15em] px-8 py-4 bg-black text-white hover:bg-neutral-800 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {pending ? "Submitting..." : "Submit Referral"}
        </button>
      </div>
    </form>
  );
}
