export function MainTv() {
  return (
    <section className="relative h-auto w-full before:pointer-events-none before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-full before:bg-fuchsia-700 before:opacity-30 before:content-['']">
      <div className="custom-backdrop absolute h-full w-full"></div>
      <video
        className="max-h-[calc(100vh-4rem)] w-full"
        muted
        src="/videos/needle.mp4"
        // autoPlay
        controls
        playsInline
      />
    </section>
  );
}
