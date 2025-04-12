
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  background?: "light" | "dark" | "orange";
}

const Section = ({ id, title, children, className = "", background = "light" }: SectionProps) => {
  const bgClasses = {
    light: "bg-white",
    dark: "bg-black text-white",
    orange: "bg-gymbro-orange text-white"
  };

  return (
    <section 
      id={id} 
      className={`py-12 sm:py-16 md:py-20 ${bgClasses[background]} ${className} overflow-fix`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center mb-8 sm:mb-12">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
