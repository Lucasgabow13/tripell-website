"use client";

import { useActionState } from "react";
import { submitContact, type FormState } from "./actions";

const INITIAL_STATE: FormState = { status: "idle" };

const inputClass =
  "w-full bg-transparent border-b border-neutral-200 py-3 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors duration-200";

const labelClass = "block text-xs uppercase tracking-[0.15em] text-neutral-400 mb-2";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, INITIAL_STATE);

  if (state.status === "success") {
    return (
      <div className="py-16 flex flex-col gap-4">
        <p className="text-2xl md:text-3xl font-medium leading-snug">
          Thanks — we&apos;ll be in touch.
        </p>
        <p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
          We read every message and typically respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-10">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>
            Your Name <span className="text-black">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="First and last name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-black">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(optional)"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business Name
          </label>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="(if applicable)"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div>
        <label htmlFor="revenue" className={labelClass}>
          Annual Revenue
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
          <option value="not-applicable">Not applicable</option>
        </select>
      </div>

      {/* Row 4 */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your business <span className="text-black">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What does the business do, why are you exploring a sale, and what matters most to you in a buyer?"
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
          {pending ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
