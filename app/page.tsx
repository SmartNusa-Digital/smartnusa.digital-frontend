import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 py-16 text-center selection:bg-blue-600/20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-150 w-150 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="relative z-10 flex max-w-2xl flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <Image
            src="/PT. SND-Ok.png"
            alt="PT Smart Nusa Digital"
            width={160}
            height={64}
            className="h-16 w-auto"
          />
          <span className="text-sm font-semibold tracking-widest uppercase text-foreground/60">
            PT Smart Nusa Digital
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          We will come back
          <br />
          <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            with innovation.
          </span>
        </h1>

        <p className="max-w-md text-base leading-relaxed text-foreground/50">
          We&apos;re crafting something new a better, smarter digital experience.
          Stay tuned.
        </p>

        <div className="h-px w-16 bg-foreground/10" />

        <div className="flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-2 text-xs font-medium text-foreground/40">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        Building in progress
        </div>
      </div>

      <footer className="absolute bottom-8 text-xs text-foreground/30">
        &copy; {new Date().getFullYear()} <a href="mailto:legal@smartnusa.digital" className="text-foreground/60 hover:text-foreground" target="_blank" rel="noopener noreferrer">
          PT Smart Nusa Digital
        </a>. All rights reserved.
      </footer>
    </main>
  );
}