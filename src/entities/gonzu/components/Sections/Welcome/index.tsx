import { LinkUrl } from "@/app/interfaces";
import { ButtonsGrid } from "./ButtonsGrid";
import { WelcomePhrase } from "./Phrase";
import { Poster } from "./Poster";

interface WelcomeProps {
  buttonsLink: LinkUrl[];
}

export const Welcome = ({ buttonsLink }: WelcomeProps) => {
  return (
    <section className="mx-3 flex flex-col md:flex-row gap-6 items-center">
      <div className="flex-1">
        <Poster url="/assets/vista-frontal-edificio-patio-principal-min.jpg" />
      </div>
      <div className="flex-1 mt-5 md:mt-0">
        <WelcomePhrase />
        <ButtonsGrid links={buttonsLink} />
      </div>
    </section>
  );
};
