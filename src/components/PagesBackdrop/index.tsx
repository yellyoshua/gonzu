import { Asset } from "@/app/interfaces";

interface PagesBackdropProps {
  backdrop: Asset | null;
}

export const PagesBackdrop = ({ backdrop }: PagesBackdropProps) => {
  if (!backdrop) {
    return null;
  }

  return (
    <div className="max-h-60">
      <img
        className="object-contain h-full w-auto max-h-60 m-auto"
        src={backdrop.url}
        alt={backdrop.fileName}
      />
    </div>
  );
};
