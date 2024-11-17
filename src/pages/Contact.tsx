import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contact, contactSchema } from "../zodValidation/contact";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";

export default function ContactForm() {
  const form = useForm<Contact>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const {
    // reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: Contact) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      console.log(data);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message.");
    }
    // reset();
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-100 py-3 ">
      <div className="w-full md:max-w-4xl mx-auto p-2 md:p-6 bg-background rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-2 flex flex-col col-span-2">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Your name"
              className="p-2"
              {...register("name")}
              disabled={isSubmitting}
            />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div className="space-y-2 flex flex-col col-span-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="p-2"
              {...register("email")}
              disabled={isSubmitting}
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          <div className="space-y-2 flex flex-col col-span-2">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              placeholder="Message subject"
              className="p-2"
              {...register("subject")}
              disabled={isSubmitting}
            />
            <p className="text-red-500 text-sm">{errors.subject?.message}</p>
          </div>
          <div className="space-y-2  flex flex-col col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your message"
              className="min-h-[100px] p-2"
              {...register("message")}
              disabled={isSubmitting}
            />
            <p className="text-red-500 text-sm">{errors.message?.message}</p>
          </div>
          <Button
            type="submit"
            className="col-span-2 flex items-center justify-center shadow-xl hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            {isSubmitting ? (
              <span className="gap-3 flex items-center">
                <ClipLoader size={25} color="white" />
                <span>Sending ...</span>
              </span>
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
