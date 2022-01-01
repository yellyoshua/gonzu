interface PosterProps {
  url: string;
}

export const Poster = ({ url }: PosterProps) => {
  return (
    <img
      className="rounded-2xl"
      src={url}
      alt="vista-frontal-edificio-patio-principal-min"
    />
  );
};
