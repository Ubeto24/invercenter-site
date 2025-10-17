import { useEffect, useRef, useState } from "react";

export default function ImageCard({
  src,
  alt,
  title,
  subtitle,
  bullets = [],
  width = 1200,
  height = 680,
  className = "",
}) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const ioRef = useRef(null);

  useEffect(() => {
    if (!ioRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsInView(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "200px 0px" }
    );
    obs.observe(ioRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ioRef}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden group focus-within:ring-2 focus-within:ring-blue-500 ${className}`}
      aria-label={title}
    >
      <div className="relative w-full overflow-hidden">
        {!isLoaded && (
          <div aria-hidden className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100" />
        )}
        {isInView && (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            onLoad={() => setIsLoaded(true)}
            className="w-full h-[260px] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-x-0 top-0 h-px bg-black/5" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#243E90]">{title}</h3>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        {bullets?.length > 0 && (
          <ul className="mt-4 text-gray-700 space-y-2">
            {bullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

