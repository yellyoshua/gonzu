import { ReactNode } from "react";

interface TextWithIconProps {
  icon: ReactNode;
  children: string;
  noMargin?: boolean;
}

export const TextWithIcon = ({
  icon,
  children,
  noMargin,
}: TextWithIconProps) => {
  return (
    <div className={`flex items-center ${noMargin ?? "my-3"} max-w-xs`}>
      {icon}
      <p className="text-black flex-1 break-all">{children}</p>
    </div>
  );
};
