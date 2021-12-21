import {
  ApplicationCopyright,
  ApplicationDescription,
  ApplicationName,
} from "@/app/constants";
import createStore from "zustand";
import { devtools } from "zustand/middleware";
import { Gonzu } from "../interfaces";

const initialState: Gonzu = {
  socialLinks: [],
  applicationName: ApplicationName,
  applicationDescription: ApplicationDescription,
  copyright: ApplicationCopyright,
  bannerLogo: [
    "https://s3-us-east-2.amazonaws.com/gonzu-api-bucket/2020/08/gonzu-header-banner-1.jpg",
  ],
  header: {
    links: [
      { label: "Inicio", url: "/" },
      { label: "Servicios", url: "/servicios" },
      { label: "Contáctanos", url: "/contactanos" },
      { label: "Noticias", url: "/tag/noticias" },
      {
        label: "Oferta Académica",
        url: "/offer-accademic",
        external: true,
      },
    ],
  },
  body: {
    welcomeLinks: [
      { label: "Dar un Tour", url: "/app/tour", disabled: true },
      { label: "Nosotros", url: "/nosotros" },
      { label: "Pastoral", url: "/pastoral" },
      { label: "Inscripciones", url: "/app/inscripciones" },
    ],
    academicOffers: [],
  },
  footer: {
    information: {
      phone: "(02) 601-590",
      email: "comunicaciones@gonzu.edu.ec",
      direction:
        "Carlos Polit E18-300 Jardin del Valle Pasaje N. Parroquia Juan Pablo II",
    },
    links: [
      { label: "Noticias", url: "/news" },
      { label: "Eventos", url: "/events" },
      { label: "Comunicados", url: "/comunicados" },
      { label: "Pastoral", url: "/pastoral" },
      {
        label: "Idukay",
        url: "https://idukay.net",
        external: true,
      },
    ],
  },
};

export const useGonzuStore = createStore<Gonzu>(devtools(() => initialState));
