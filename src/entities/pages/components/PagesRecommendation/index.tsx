import { useEffect } from "react";
import { LinkUrl } from "@/app/interfaces";
import ArrowLeftIcon from "@heroicons/react/outline/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/outline/ArrowRightIcon";
import { usePageStore } from "@/app/entities/pages/flux/pages.store";
import { getPagesRecomendationsInStore } from "@/app/entities/pages/flux/pages.actions";

interface PagesRecommendationProps {}

export const PagesRecommendation = ({}: PagesRecommendationProps) => {
  const recomendations = usePageStore((state) => state.recomendations);
  const slugOfPageToExclude = usePageStore((state) => state.page?.slug);

  useEffect(() => {
    getPagesRecomendationsInStore(slugOfPageToExclude);
  }, [slugOfPageToExclude]);

  const prevPage = (link: LinkUrl | null) =>
    link ? (
      <a
        className="group flex items-center mr-3 text-gray-500 transition hover:text-gray-900 dark:hover:text-darkTextParagraph"
        href={link.url}
      >
        <ArrowLeftIcon className="w-4 mr-1" />
        {link.label}
      </a>
    ) : null;

  const nextPage = (link: LinkUrl) => (
    <a
      className="group flex items-center ml-3 text-gray-500 transition hover:text-gray-900 dark:hover:text-darkTextParagraph"
      href={link.url}
    >
      {link.label}
      <ArrowRightIcon className="w-4 ml-1" />
    </a>
  );

  if (!recomendations.length) {
    return null;
  }

  return (
    <div className="mb-10  pt-6 mx-3 text-gray-700 font-semibold flex items-center">
      {prevPage(recomendations.length === 1 ? null : recomendations[0])}
      <div className="flex-1" />
      {nextPage(recomendations[recomendations.length === 1 ? 0 : 1])}
    </div>
  );
};
