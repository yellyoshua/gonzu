import { useEffect, useState } from "react";
import { LinkUrl } from "@/app/interfaces";
import ArrowLeftIcon from "@heroicons/react/outline/ArrowLeftIcon";
import ArrowRightIcon from "@heroicons/react/outline/ArrowRightIcon";
import { getPagesRecomendations } from "@/app/entities/pages/flux/pages.actions";
import { getPostsRecomendations } from "@/app/entities/posts/flux/posts.actions";

interface RecommendationsProps {
  entitie: "posts" | "pages";
  slugToExclude?: string;
}

export const Recommendations = ({
  entitie,
  slugToExclude,
}: RecommendationsProps) => {
  const [recomendations, setRecomendations] = useState<LinkUrl[]>([]);

  useEffect(() => {
    if (entitie === "pages") {
      getPagesRecomendations(slugToExclude)
        .then(setRecomendations)
        .catch(setRecomendations);
    } else if (entitie === "posts") {
      getPostsRecomendations(slugToExclude)
        .then(setRecomendations)
        .catch(setRecomendations);
    }
  }, [slugToExclude]);

  const prevPage = (link: LinkUrl | null) =>
    link ? (
      <a
        className="group flex items-center mr-3 text-gray-900 transition dark:text-white"
        href={link.url}
      >
        <ArrowLeftIcon className="w-4 mr-1" />
        {link.label}
      </a>
    ) : null;

  const nextPage = (link: LinkUrl) => (
    <a
      className="group flex items-center ml-3 text-gray-900 transition dark:text-white"
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
    <div className="mb-10  pt-6 mx-3 text-gray-700 font-semibold flex justify-evenly items-center">
      {prevPage(recomendations.length === 1 ? null : recomendations[0])}
      {nextPage(recomendations[recomendations.length === 1 ? 0 : 1])}
    </div>
  );
};
