import { ReactNode } from "react";

interface TextWithIconProps {
  icon: ReactNode;
  children: string;
  noMargin?: boolean;
  right?: boolean;
}

export const TextWithIcon = ({
  icon,
  children,
  noMargin,
  right,
}: TextWithIconProps) => {
  return (
    <div className={`flex items-center ${noMargin ?? "my-3"} max-w-xs`}>
      {!right && icon}
      <p className="text-black flex-1 break-all">{children}</p>
      {right && icon}
    </div>
  );
};
