type Props = React.ComponentProps<"input"> & {
  legend?: string; // optional label displayed above the input
};

export function Input({ legend, type = "text", ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs mb-2 text-inherit">
          {legend} {/* show legend text if provided */}
        </legend>
      )}

      <input
        type={type}
        {...rest}
        className="w-full h-12 rounded-lg border border-gray-300 px-4 text-sm text-gray-100 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-300"
      />
      {/* input field styled with Tailwind; 'rest' passes placeholder, value, etc */}
    </fieldset>
  );
}
