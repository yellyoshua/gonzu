export const AboutUS = () => {
  return (
    <div className="mt-6 mx-3">
      <h2 className="text-2xl text-center font-bold font-jost text-red-700 dark:text-sky-600">
        Sobre nosotros
      </h2>
      <div className="flex flex-col lg:flex-row content-center justify-center gap-6 my-6">
        <section className="flex-1 m-auto order-2 lg:order-1">
          <h2 className="font-jost font-bold text-xl text-darkPrimaryBold dark:text-darkTextBold">
            La institución
          </h2>
          <p className="font-jost text-lg my-3 leading-relaxed text-darkPrimaryBold dark:text-darkTextParagraph">
            La{" "}
            <strong className="text-red-700 dark:text-sky-600">
              Unidad Educativa Cardenal Gonzáles Zumarraga
            </strong>{" "}
            o <strong className="text-red-700 dark:text-sky-600">GONZU</strong>,
            es una institución que forma seres humanos integrales, líderes y con
            principios católicos que promueven una misión social.
          </p>
          <p className="font-jost text-lg my-3 leading-relaxed text-darkPrimaryBold dark:text-darkTextParagraph">
            Nuestra institución cuenta con instalaciones desde Preparatoria
            hasta Tercero de Bachillerato, la innovación curricular expresada
            como la integración de áreas de aprendizaje, es un concepto práctico
            que se centra en cambios a nível de áreas específicas, al interior
            de la institución.
          </p>
        </section>
        <section className="flex-1 m-auto order-1 lg:order-1">
          <img
            className="rounded-2xl"
            src="/assets/entrada-principal-insitucion-min.jpg"
            alt="entrada-principal-insitucion-min"
          />
        </section>
      </div>
      <div className="flex flex-col lg:flex-row content-center justify-center gap-6 my-6">
        <section className="flex-1 m-auto order-1 lg:order-1">
          <img
            className="rounded-2xl"
            src="/assets/aula-preparatoria-e-inicial.jpeg"
            alt="aula-preparatoria-e-inicial"
          />
        </section>
        <section className="flex-1 m-auto order-2 lg:order-2">
          <h2 className="font-jost font-bold text-xl text-darkPrimaryBold dark:text-darkTextBold">
            ¿Por qué Gonzu?
          </h2>
          <p className="font-jost text-lg my-3 leading-relaxed text-darkPrimaryBold dark:text-darkTextParagraph">
            <strong className="text-red-700 dark:text-sky-600">GONZU</strong> es
            la abreviación de{" "}
            <strong className="text-red-700 dark:text-sky-600">
              Unidad Educativa “Cardenal González Zumárraga”
            </strong>
            , nombre adoptado por la Institución en honor a nuestro patrono el
            querido{" "}
            <strong className="text-red-700 dark:text-sky-600">
              Cardenal José Antonio González Zumárraga
            </strong>{" "}
            quien realizó una labor incansable en su vida sacerdotal.
          </p>
          <p className="font-jost text-lg my-3 leading-relaxed text-darkPrimaryBold dark:text-darkTextParagraph">
            Amor cariño a la institución y el deseo de distinción motivan
            siempre a emplear este apelativo para dirigirse al templo donde los
            jóvenes comparten la mitad de su tiempo durante la vida estudiantil.
          </p>
        </section>
      </div>
    </div>
  );
};
