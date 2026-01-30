import { ContactForm } from "@/modules/booking/presentation/contact-form";
import { Hero } from "@/shared/components/hero";

export default function Home() {
  return (
    <>
      <section className="w-full max-w-5xl px-10 pt-20">
        <h1 className="mb-10 text-4xl font-extrabold">
          Do you have a question?
        </h1>
        <ContactForm />
      </section>
      <Hero />
    </>
  );
}
