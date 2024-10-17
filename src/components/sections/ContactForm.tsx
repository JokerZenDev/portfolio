import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { init, sendForm } from '@emailjs/browser';

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_TEMPLATE_ID || !process.env.EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS environment variables are not set');
      return;
    }

    const form = new FormData(e.target as HTMLFormElement);

    if (!form.has('user_name') || !form.has('user_email') || !form.has('message')) {
      console.error('Form is missing required fields');
      return;
    }

    const emptyFields: string[] = [];
    if (form.get('user_name') === '') {
      emptyFields.push('user_name');
    }
    if (form.get('user_email') === '') {
      emptyFields.push('user_email');
    }
    if (form.get('message') === '') {
      emptyFields.push('message');
    }

    setMissingFields(emptyFields);
    if (emptyFields.length > 0) {
      return;
    }

    setIsLoading(true);

    sendForm(process.env.EMAILJS_SERVICE_ID as string, process.env.EMAILJS_TEMPLATE_ID as string, e.target as HTMLFormElement)
      .then(() => {
        handleClick();
        setIsLoading(false);
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        setError(error.text);
        setIsLoading(false);
      });
  };

  const handleClick = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
 
    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;
 
    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
 
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }
 
      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  useEffect(() => {
    init({
      publicKey: process.env.EMAILJS_PUBLIC_KEY as string
    });
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-sky-400 relative" id="contact">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contact Me</h2>
        <div className="mx-auto max-w-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <Input placeholder="Your Name" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-sky-400" name="user_name" />
              {missingFields.includes('user_name') && <p className="text-red-500">Name is required</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Input type="email" placeholder="Your Email" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-sky-400" name="user_email" />
              {missingFields.includes('user_email') && <p className="text-red-500">Email is required</p>}
            </div>
            <div className="flex flex-col gap-2">
              <Textarea placeholder="Your Message" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-sky-400" name="message" />
              {missingFields.includes('message') && <p className="text-red-500">Message is required</p>}
            </div>
            <Button
              type="submit"
              className="w-full bg-sky-600 text-white hover:bg-sky-700"
              variant="default"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </Button>
            {error && <p className="text-red-500">Failed to send email: {error}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
