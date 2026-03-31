import { FadeUp } from "@/components/motion/FadeUp";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description?: string;
}

export function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <FadeUp className="text-center max-w-[600px] mx-auto mb-16">
      <span className="inline-block text-xs font-bold uppercase tracking-[3px] gradient-text mb-3.5">
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-navy leading-tight tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-500 text-base leading-relaxed">
          {description}
        </p>
      )}
    </FadeUp>
  );
}
