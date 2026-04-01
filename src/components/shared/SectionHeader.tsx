import { FadeUp } from "@/components/motion/FadeUp";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  accentText?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  tag,
  title,
  accentText,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <FadeUp className={`max-w-[680px] mb-14 ${centered ? "mx-auto text-center" : ""}`}>
      {tag && (
        <span className="inline-block text-xs font-bold uppercase tracking-[3px] gradient-text mb-4">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-tight tracking-tight mb-4 ${
          light ? "text-text-light" : "text-text-dark"
        }`}
      >
        {title}
        {accentText && (
          <>
            {" "}
            <span className="accent-text gradient-underline">{accentText}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`text-base leading-[1.75] ${
            light ? "text-text-sec-light" : "text-text-sec-dark"
          }`}
        >
          {description}
        </p>
      )}
    </FadeUp>
  );
}
