import {
  ApplicationCopyright,
  ApplicationDescription,
  ApplicationName,
} from "@/app/constants";
import createStore from "zustand";
import { devtools } from "zustand/middleware";
import { Gonzu } from "@/app/entities/gonzu/interfaces";

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
      { label: "Noticias", url: "/app/noticias" },
      {
        label: "Oferta Académica",
        url: "/ofertas-academicas",
        external: true,
      },
    ],
  },
  body: {
    welcomeLinks: [
      { label: "Dar un Tour", url: "/app/tour", disabled: true },
      { label: "Nosotros", url: "/nosotros" },
      { label: "Pastoral", url: "/pastoral" },
      { label: "Inscripciones", url: "/inscripciones" },
    ],
    academicOffers: [
      {
        title: "Preparatoria y Educación Básica Elemental.",
        link: {
          url: "/preparatoria-basica-elemental",
          label: "Preparatoria y Educación Básica Elemental.",
        },
      },
      {
        title: "Educación Básica media y Educación Básica Superior.",
        link: {
          url: "/basica-media-y-superior",
          label: "Educación Básica media y Educación Básica Superior.",
        },
      },
      {
        title: "Bachillerato General Unificado.",
        link: {
          url: "/bachillerato-general-unificado",
          label: "Bachillerato General Unificado.",
        },
      },
    ],
  },
  footer: {
    information: {
      phone: "(02) 601-590",
      email: "comunicaciones@gonzu.edu.ec",
      direction:
        "Carlos Polit E18-300 Jardin del Valle Pasaje N. Parroquia Juan Pablo II",
    },
    links: [
      { label: "Noticias", url: "/app/noticias" },
      { label: "Eventos", url: "/app/eventos" },
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
