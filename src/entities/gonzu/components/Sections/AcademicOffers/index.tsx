import Link from "next/link";
import { AcademicOffer } from "@/app/entities/gonzu/interfaces";
import ArrowSmRightIcon from "@heroicons/react/solid/ArrowSmRightIcon";
import AcademicCapIcon from "@heroicons/react/outline/AcademicCapIcon";
import BeakerIcon from "@heroicons/react/outline/BeakerIcon";
import BookOpenIcon from "@heroicons/react/outline/BookOpenIcon";

//arrow-sm-right

interface AcademicOffersProps {
  academicOffers: AcademicOffer[];
}

export const AcademicOffers = ({ academicOffers }: AcademicOffersProps) => {
  return (
    <div className="mt-6 mx-3">
      <h2 className="text-2xl mb-3 text-center font-bold font-jost text-red-700 dark:text-sky-600">
        Nuestras ofertas académicas
      </h2>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 items-center">
          {academicOffers[0] && (
            <div className="px-2 py-3 bg-blue-800 max-w-xs rounded-none sm:rounded-tl-xl sm:rounded-bl-xl">
              <BookOpenIcon width={40} className="m-auto text-white my-3" />
              <h3 className="px-8 text-white text-center font-jost text-xl my-3">
                {academicOffers[0].title}
              </h3>
              <div className="flex justify-center mt-6">
                <Link href={academicOffers[0].link.url}>
                  <a href={academicOffers[0].link.url}>
                    <button className="px-1 py-2 flex items-center border-4 font-bold border-white text-blue-800 bg-white hover:bg-blue-800 hover:text-white">
                      Conocer más
                      <ArrowSmRightIcon width={20} className="ml-3" />
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}

          {academicOffers[1] && (
            <div className="px-2 py-10 bg-sky-600 max-w-xs">
              <BeakerIcon width={40} className="m-auto text-white my-3" />
              <h3 className="px-8 text-white text-center font-jost text-xl my-3">
                {academicOffers[1].title}
              </h3>
              <div className="flex justify-center mt-6">
                <Link href={academicOffers[1].link.url}>
                  <a href={academicOffers[1].link.url}>
                    <button className="px-1 py-2 flex items-center border-4 font-bold border-white text-sky-600 bg-white hover:bg-sky-600 hover:text-white">
                      Conocer más
                      <ArrowSmRightIcon width={20} className="ml-3" />
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}

          {academicOffers[2] && (
            <div className="px-2 py-3 bg-violet-800 max-w-xs rounded-none sm:rounded-tr-xl sm:rounded-br-xl">
              <AcademicCapIcon width={40} className="m-auto text-white my-3" />
              <h3 className="px-8 text-white text-center font-jost text-xl my-3">
                {academicOffers[2].title}
              </h3>
              <div className="flex justify-center mt-6">
                <Link href={academicOffers[2].link.url}>
                  <a href={academicOffers[2].link.url}>
                    <button className="px-1 py-2 flex items-center border-4 font-bold border-white text-violet-800 bg-white hover:bg-violet-800 hover:text-white">
                      Conocer más
                      <ArrowSmRightIcon width={20} className="ml-3" />
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
