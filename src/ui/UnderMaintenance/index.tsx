interface UnderMaintenanceProps {}

export const UnderMaintenance = ({}: UnderMaintenanceProps) => {
  return (
    <section className="mx-8 my-10 py-10">
      <h3 className="font-jost text-black text-3xl text-center">
        En mantenimiento, disculpa las molestias
      </h3>
      <div className="mt-10 w-full">
        <img
          className="m-auto max-w-sm"
          src="/assets/svg/under_maintenance.svg"
          alt="under_maintenance"
        />
      </div>
    </section>
  );
};
