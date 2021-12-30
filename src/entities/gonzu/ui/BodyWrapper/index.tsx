interface GonzuBody extends React.ComponentProps<"main"> {}

export const GonzuBodyWrapper = ({
  className,
  children,
  ...props
}: GonzuBody) => {
  return (
    <main
      className={`bg-white dark:bg-darkPrimaryBold transition-colors duration-500 min-h-screen ${className}`}
      {...props}
    >
      {children}
    </main>
  );
};
