import { ClassMerge } from "../utils/classMerge"; // helper to combine CSS classes without conflicts

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean; // flag that disables button and shows loading state
  variant?: "base" | "icon" | "iconSmall"; // variantes de estilo
};

const variants = {
  button: {
    base: "h-12", // default height
    icon: "h-12 w-12", // square for icon buttons
    iconSmall: "h-8 w-8", // smaller square
  },
};

export function Button({
  children,
  className,
  type = "button",
  isLoading,
  variant = "base",
  ...rest
}: Props) {
  return (
    <button
      type={type} // HTML button type: button, submit, etc
      disabled={isLoading} // disable when loading
      className={ClassMerge([
        "w-full bg-green-100 flex items-center justify-center rounded-lg font-bold text-white text-sm cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50",
        variants.button[variant],
        className,
        isLoading && "cursor-no-drop",
      ])}
      {...rest} // any additional props (onClick, etc)
    >
      {children} {/* content inside the button */}
    </button>
  );
}
