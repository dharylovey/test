import Button from "../components/Button";

export default function ContactForm() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-100">
      <div className="max-w-4xl mx-auto p-6 bg-background rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 flex flex-col">
            <label htmlFor="name">Name</label>
            <input id="name" placeholder="Your name" className="p-2" />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="p-2"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              className="p-2"
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="subject">Subject</label>
            <input id="subject" placeholder="Message subject" className="p-2" />
          </div>
          <div className="space-y-2 md:col-span-2 flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your message"
              className="min-h-[100px] p-2"
            />
          </div>
          <Button type="submit" className="md:col-span-2">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
