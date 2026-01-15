import MiniTv from "./mini-tv";

export default function Hero() {
  return (
    <div className="flex max-w-5xl flex-col flex-wrap items-center justify-center gap-10 px-20 pb-20 sm:flex-row sm:gap-20">
      <div>
        <h1 className="text-4xl font-extrabold">Comming next</h1>
        <h2>Tunnel claudflare</h2>
      </div>
      <div className="translate-x-10 translate-y-40">
        <MiniTv delay={0} />
        {/* <MiniTv delay={1} />
        <MiniTv delay={2} /> */}
      </div>
      <p className="basis-full leading-relaxed font-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
        perspiciatis soluta maiores corrupti deleniti officia distinctio aliquid
        in error sequi, nostrum nobis odit labore iusto vero consectetur! In,
        quaerat sunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatibus labore aut totam, ratione sunt quisquam nulla hic ad?
        Libero, nemo quas debitis impedit quae accusamus blanditiis facilis
        veniam expedita voluptates.
      </p>
    </div>
  );
}
