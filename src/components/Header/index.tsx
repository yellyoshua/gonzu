import { LogoBanner } from "./LogoBanner";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="w-full my-4">
      <LogoBanner />
      <NavBar
        links={[
          { label: "Inicio", url: "/" },
          { label: "Servicios", url: "/servicios" },
          { label: "Contáctanos", url: "/contactanos" },
          { label: "Noticias", url: "/tag/noticias" },
          {
            label: "Oferta Académica",
            url: "/offer-accademic",
            external: true,
          },
        ]}
      />
    </header>
  );
}
