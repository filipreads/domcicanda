import React, { useRef, useState, useEffect, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ScrollSectionProps {
  children: ReactNode;
  title: string;
  icon?: LucideIcon;
  color?: string;
  className?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  children, 
  title, 
  icon: Icon, 
  color = "border-red-500",
  className = ""
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`min-h-[80vh] flex flex-col justify-center items-center p-6 transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'
      } ${className}`}
    >
      <div className={`max-w-4xl w-full bg-slate-900/80 backdrop-blur-md p-6 md:p-10 rounded-3xl border-l-8 ${color} shadow-2xl`}>
        <div className="flex items-center gap-4 mb-8 border-b border-slate-800 pb-4">
          {Icon && <Icon className={`w-10 h-10 md:w-12 md:h-12 ${color.includes('red') ? 'text-red-500' : 'text-emerald-500'}`} />}
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">{title}</h2>
        </div>
        <div className="text-slate-300 text-lg leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;