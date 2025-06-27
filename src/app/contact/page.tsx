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
      className={`${pending ? 'bg-orange-500' : 'bg-orange-500 hover:bg-orange-600'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors`}
      aria-disabled={pending}
    >
      {pending ? 'Sending...' : 'Send Message'}
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
    setState({
      message: result.message,
      isError: !result.success
    });
    
    if (result.success) {
      const form = document.getElementById('contact-form') as HTMLFormElement;
      if (form) form.reset();
      
      setTimeout(() => {
        setState({ message: null, isError: false });
      }, 5000);
    }
  };

  // useEffect(() => {
  //   setState({ message: "We have an error occured", isError: false });
  // }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-lg mx-auto">
            Have a question or want to work together? Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-neutral-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
          <div className="p-8 sm:p-10">
            {state.message && (
              <div 
                className={`mb-6 p-4 rounded-lg border ${
                  state.isError 
                    ? 'bg-red-50 border-red-200 text-red-700' 
                    : 'bg-neutral-600 border-neutral-50 text-neutral-50'
                } transition-all duration-300`}
              >
                {state.message}
              </div>
            )}

            <form 
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="space-y-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={100}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  maxLength={2000}
                  className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none placeholder-gray-400"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="h-4">
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
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