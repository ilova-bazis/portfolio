"use client"
import { useState } from "react";
import { useFormStatus } from 'react-dom';
import { sendEmail } from '@/app/contact/actions';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-6 py-3 bg-black text-white font-bold hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-200 flex items-center justify-center gap-2"
      aria-disabled={pending}
    >
      {pending ? 'Sending...' : <>Send Message <span className="text-orange-400">↗</span></>}
    </button>
  );
}

export default function Contact() {
  const [state, setState] = useState<{
    message: string | null;
    isError: boolean;
  }>({ message: null, isError: false });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);
    setState({ message: result.message, isError: !result.success });

    if (result.success) {
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) form.reset();
      setTimeout(() => setState({ message: null, isError: false }), 5000);
    }
  };

  return (
    <div className="py-16 md:py-20">
      {/* Top accent bar */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-transparent mb-14" />

      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-orange-500 mb-3">
            Say Hello
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-gray-900 mb-5">
            CONTACT
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-orange-500" />
            <span className="text-gray-500 text-sm">◼</span>
          </div>
          <p className="text-gray-700">
            Have a question or want to work together? Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-neutral-200 shadow-md border-t-4 border-orange-500 overflow-hidden">
          <div className="p-8 sm:p-10">
            {state.message && (
              <div
                className={`mb-6 p-4 border text-sm font-medium ${
                  state.isError
                    ? 'bg-red-50 border-red-300 text-red-700'
                    : 'bg-gray-900 border-gray-700 text-gray-100'
                } transition-all duration-300`}
              >
                {state.message}
              </div>
            )}

            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-xs font-bold tracking-widest uppercase text-gray-600">
                  Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="block w-full px-4 py-3 border border-gray-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-bold tracking-widest uppercase text-gray-600">
                  Email <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-bold tracking-widest uppercase text-gray-600">
                  Message <span className="text-orange-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={2000}
                  className="block w-full px-4 py-3 border border-gray-300 bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400"
                  placeholder="How can I help you?"
                />
              </div>

              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="pt-2">
                <SubmitButton />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
