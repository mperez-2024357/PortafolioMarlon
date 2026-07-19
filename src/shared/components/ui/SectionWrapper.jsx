import React, { useEffect, useRef, useState } from "react";

export default function SectionWrapper({ id, className = "", children, ...props }) {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers fade in when 10% of the section is visible
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative w-full transition-all duration-1000 ease-out ${className}`}
      {...props}
    >
      <div
        className={`w-full h-full transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 scale-100 filter-none" : "opacity-0 scale-95 blur-sm"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
