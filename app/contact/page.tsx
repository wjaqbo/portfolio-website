import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <section className="w-full max-w-5xl px-10 pt-20">
        <h1 className="text-4xl font-extrabold">Do you have a question?</h1>
        <form className="flex flex-col gap-10 py-20">
          <input
            type="text"
            placeholder="Your name"
            className="rounded-xl border px-3 py-2"
            required
          />
          <input
            type="text"
            placeholder="Contact phone / email"
            className="rounded-xl border px-3 py-2"
            required
          />
          <textarea
            placeholder="Message"
            className="rounded-xl border px-3 py-2"
            required
          />
          <button type="submit">Send</button>
        </form>
      </section>

      <Hero />
    </>
  );
}
