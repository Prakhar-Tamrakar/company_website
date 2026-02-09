import clsx from "clsx";

const sizeClasses = {
  sm: "py-section-sm",
  md: "py-section-md",
  lg: "py-section-lg",
  xl: "py-section-md",
  hero: "py-section-2xl"
};

export default function Section({
  id,
  className,
  children,
  size = "md",
  background,
}) {
  return (
    <section
      id={id}
      className={clsx(
        sizeClasses[size], 
        background, 
        className
      )}
    >
        {children}
     
    </section>
  );
}
