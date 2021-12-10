interface UnderMaintenanceProps {}

export const UnderMaintenance = ({}: UnderMaintenanceProps) => {
  return (
    <section className="mx-8 my-10 py-10">
      <h3 className="font-arvo text-black text-3xl text-center">
        En mantenimiento, disculpa las molestias
      </h3>
      <img
        className="mt-10"
        src="/assets/svg/under_maintenance.svg"
        alt="under_maintenance"
      />
    </section>
  );
};