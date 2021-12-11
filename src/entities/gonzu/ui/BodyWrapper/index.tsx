interface GonzuBody extends React.ComponentProps<"main"> {}

export const GonzuBodyWrapper = ({
  className,
  children,
  ...props
}: GonzuBody) => {
  return (
    <main className={`bg-white min-h-screen ${className}`} {...props}>
      {children}
    </main>
  );
};
