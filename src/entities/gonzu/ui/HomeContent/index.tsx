import { Welcome } from "@/app/entities/gonzu/components/Sections/Welcome";
import { AcademicOffers } from "@/app/entities/gonzu/components/Sections/AcademicOffers";
import { AboutUS } from "@/app/entities/gonzu/components/Sections/AboutUS";

interface HomeContentProps {}

export const HomeContent = ({}: HomeContentProps) => {
  return (
    <div>
      <Welcome
        buttonsLink={[
          { label: "Dar un Tour", url: "/app/tour", disabled: true },
          { label: "Nosotros", url: "/sobre-nosotros" },
          { label: "Pastoral", url: "/pastoral" },
          { label: "Inscripciones", url: "/app/inscripciones" },
        ]}
      />
      <AcademicOffers
        academicOffers={[
          {
            title: "Preparatoria y Educación Básica Elemental.",
            link: {
              url: "/preparatoria-basica-elemental",
              label: "Preparatoria y Educación Básica Elemental.",
            },
          },
          {
            title: "Educación Básica media y Educación Básica Superior.",
            link: {
              url: "/basica-media-y-superior",
              label: "Educación Básica media y Educación Básica Superior.",
            },
          },
          {
            title: "Bachillerato General Unificado.",
            link: {
              url: "/bachillerato-general-unificado",
              label: "Bachillerato General Unificado.",
            },
          },
        ]}
      />
      <AboutUS />
    </div>
  );
};
