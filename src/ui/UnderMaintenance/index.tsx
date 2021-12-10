interface UnderMaintenanceProps {}

export const UnderMaintenance = ({}: UnderMaintenanceProps) => {
  return (
    <section className="mx-8 my-10 py-10">
      <h3 className="font-jost text-black font-bold text-3xl text-center">
        En mantenimiento, en breve estaremos en l&iacute;nea.
      </h3>
      <div className="mt-10 w-full">
        <img
          className="m-auto sm:max-w-sm"
          src="/assets/svg/under_maintenance.svg"
          alt="under_maintenance"
        />
      </div>
    </section>
  );
};
