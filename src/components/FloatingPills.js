// Animated row of floating pills (styles: .pill-container / .pill in App.css).
// Eight pill variants repeated five times.
const PILL_COUNT = 40;

export const FloatingPills = ({ className = "" }) => (
  <div className={`pill-container ${className}`} aria-hidden="true">
    {Array.from({ length: PILL_COUNT }, (_, i) => (
      <div key={i} className={`pill pill${i % 8}`} />
    ))}
  </div>
);
