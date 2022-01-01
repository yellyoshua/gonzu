import { Welcome } from "@/app/entities/gonzu/components/Sections/Welcome";
import { AcademicOffers } from "@/app/entities/gonzu/components/Sections/AcademicOffers";
import { AboutUS } from "@/app/entities/gonzu/components/Sections/AboutUS";
import { useGonzuStore } from "@/app/entities/gonzu/flux/gonzu.store";

interface HomeContentProps {}

export const HomeContent = ({}: HomeContentProps) => {
  const welcomeLinks = useGonzuStore((state) => state.body.welcomeLinks);
  const academicOffers = useGonzuStore((state) => state.body.academicOffers);

  return (
    <div>
      <Welcome buttonsLink={welcomeLinks} />
      <AcademicOffers academicOffers={academicOffers} />
      <AboutUS />
    </div>
  );
};
