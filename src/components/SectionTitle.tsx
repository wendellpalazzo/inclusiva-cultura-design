import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionTitleProps) => {
  return (
    <div
      className={cn(
        "mb-10 text-pretty",
        centered ? "text-center mx-auto" : "text-left",
        className,
      )}
    >
      <h2
        className={cn(
          "font-playfair font-bold text-3xl md:text-4xl lg:text-5xl mb-4",
          light ? "text-white" : "text-earth",
          "opacity-0 animate-fadeIn",
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "max-w-3xl text-lg",
            light ? "text-white/80" : "text-dark/80",
            centered && "mx-auto",
            "opacity-0 animate-fadeIn delay-100",
          )}
        >
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          "h-4 w-24 mt-4  opacity-0 animate-fadeIn delay-200 relative bg-primary",
          centered ? "mx-auto" : "",
        )}
      >
        <div
          style={{
            backgroundImage: "url('/assets/images/gregas.webp')",
            backgroundSize: "280px",
            backgroundRepeat: "repeat-x",
            backgroundPositionY: "-233px",
          }}
          className={cn(
            "h-4 w-24 mt-4 ",
            centered ? "mx-auto" : "",
          )}
        ></div>
      </div>
    </div>
  );
};

export default SectionTitle;
