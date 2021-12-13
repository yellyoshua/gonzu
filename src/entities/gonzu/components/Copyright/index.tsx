interface CopyrightProps extends React.ComponentProps<"div"> {
  copyright: string;
}

export const Copyright = ({ copyright, ...props }: CopyrightProps) => {
  return (
    <div {...props}>
      <p className="text-xs tracking-wide text-center font-thin">{copyright}</p>
    </div>
  );
};
