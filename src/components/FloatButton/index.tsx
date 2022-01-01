interface FloatButtonProps extends React.ComponentProps<"button"> {
  position?: "bottom-left" | "bottom-right";
  onClick: () => void;
  children: React.ReactNode;
}

export const FloatButton = ({
  position,
  onClick,
  children,
  ...props
}: FloatButtonProps) => {
  const isBottomLeft = position === "bottom-left";

  return (
    <div
      className={`fixed bottom-0 mb-3 rounded-full ${
        isBottomLeft ? "left-0 ml-3" : "right-0 mr-3"
      }`}
    >
      <button
        {...props}
        className={`${props.className}`}
        onClick={onClick}
        children={children}
      />
    </div>
  );
};
