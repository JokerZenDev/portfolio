import { ConfettiButton } from "../ui/confetti";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-sky-400" id="contact">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">Contact Me</h2>
            <div className="mx-auto max-w-lg">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input placeholder="Your Name" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-sky-400" />
                <Input type="email" placeholder="Your Email" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-sky-400" />
                <Textarea placeholder="Your Message" className="bg-gray-800 text-gray-100 border-gray-700 focus:border-sky-400" />
                <ConfettiButton type="submit" className="w-full bg-sky-600 text-white hover:bg-sky-700" variant="default">Send Message</ConfettiButton>
              </form>
            </div>
          </div>
        </section>
  )
}
