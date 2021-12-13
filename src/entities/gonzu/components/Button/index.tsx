interface ButtonProps extends React.ComponentProps<"button"> {}

export const Button = ({
  children,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-500 hover:bg-white border-gray-500 text-white hover:text-gray-500 line-through"
          : "bg-red-700 hover:bg-white border-red-700 text-white hover:text-red-700"
      } border-2 font-bold px-1 py-2 text-base ${className}`}
    >
      {children}
    </button>
  );
};
