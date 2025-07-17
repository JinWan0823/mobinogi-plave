export default function ArrowAnimation() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-0">
      <ArrowSVG delay="0s" size={42} />
      <ArrowSVG delay="0.2s" size={46} />
      <ArrowSVG delay="0.4s" size={52} />
    </div>
  );
}

function ArrowSVG({ delay = "0s", size }: { delay?: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FF69B4"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-fade-down drop-shadow-xl/50 -mt-5"
      style={{ animationDelay: delay }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
