import { TextWithIcon } from "@/app/components/commons/TextWithIcon";
import { Page } from "@/app/entities/pages/interfaces";
import CalendarIcon from "@heroicons/react/solid/CalendarIcon";
import ClockIcon from "@heroicons/react/solid/ClockIcon";
import dayjs from "dayjs";

interface PageCardDetailsProps {
  page: Page;
}

export const PageCardDetails = ({ page }: PageCardDetailsProps) => {
  const updatedAt = dayjs(page.updatedAt, { locale: "es" }).format(
    "DD MMMM [del] YYYY"
  );

  const createdAt = dayjs(page.createdAt, { locale: "es" }).format(
    "DD MMMM [del] YYYY"
  );

  const timeAgo = dayjs(page.updatedAt).fromNow();

  const readTime = "--";

  return (
    <div className="mx-3 mb-10 mt-5 p-2">
      <h1 className="text-center text-4xl font-bold font-jost">{page.title}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="flex items-start justify-center flex-col text-sm m-0 md:m-auto">
          <TextWithIcon icon={<CalendarIcon className="mr-2" width={15} />}>
            <strong>Publicado: </strong>
          </TextWithIcon>
          {createdAt}
        </div>
        <div className="flex items-start justify-center flex-col text-sm m-0 md:m-auto">
          <TextWithIcon icon={<ClockIcon className="mr-2" width={15} />}>
            <strong>Actualizado: </strong>
          </TextWithIcon>
          {updatedAt} ({timeAgo})
        </div>
        <div className="flex items-start justify-center flex-col text-sm m-0 md:m-auto">
          <TextWithIcon icon={<CalendarIcon className="mr-2" width={15} />}>
            <strong>Lectura (minutos): </strong>
          </TextWithIcon>
          {readTime}
        </div>
      </div>
    </div>
  );
};
