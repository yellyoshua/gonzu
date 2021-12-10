interface CopyrightProps {
  copyright: string;
}

export const Copyright = ({ copyright }: CopyrightProps) => {
  return (
    <p className="text-xs tracking-wide text-center font-thin">{copyright}</p>
  );
};
