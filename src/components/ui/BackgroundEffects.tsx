export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-page-gradient">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl animate-blob [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-secondary/20 blur-3xl animate-blob [animation-delay:4s]" />
      <div className="absolute top-24 right-24 h-24 w-24 dot-grid opacity-40 hidden md:block" />
      <div className="absolute bottom-40 left-16 h-20 w-20 dot-grid opacity-30 hidden md:block" />
    </div>
  )
}
