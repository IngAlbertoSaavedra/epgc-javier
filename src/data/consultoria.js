
/*
 * EPGC - Consultoría
 *
 * Contenido provisional basado en la referencia.
 * Pendiente de validación final por Javier.
 */

// PROTECCIÓN CIVIL
import heroProteccionCivil from "../assets/images/consultoria/proteccion-civil/hero.png";

import formacionBrigadas from "../assets/images/consultoria/proteccion-civil/formacion-brigadas.png";

import programaInterno from "../assets/images/consultoria/proteccion-civil/programa-interno.png";

import asesoriaActas from "../assets/images/consultoria/proteccion-civil/asesoria-actas.png";

export const consultoria = {
  "proteccion-civil": {
    slug: "proteccion-civil",

    titulo: "Protección civil",

    introduccion:
      "Prevención, preparación y respuesta ante emergencias para fortalecer la seguridad en tu organización.",

    descripcion:
      "Acompañamos a las organizaciones en la preparación de brigadas, el desarrollo de sus programas internos de protección civil y el seguimiento de requerimientos documentales y medidas preventivas.",

    aviso:
      "Alcance de los servicios, requisitos y documentación sujetos a confirmación por EPGC.",

    imagen: heroProteccionCivil,

    secciones: [
      {
        titulo: "Formación de brigadas",

        descripcion:
          "Capacitación dinámica y práctica para que el personal fortalezca sus habilidades de prevención y respuesta ante emergencias, adaptada a las necesidades del centro de trabajo.",

        imagen: formacionBrigadas,
      },
      {
        titulo: "Programa interno de protección civil",

        descripcion:
          "Apoyo en la integración del programa interno de protección civil, con enfoque en identificación de riesgos, organización preventiva y procedimientos de actuación.",

        imagen: programaInterno,
      },
      {
        titulo: "Asesoría y seguimiento a actas",

        descripcion:
          "Orientación en el seguimiento de observaciones, medidas preventivas y documentación relacionada con protección civil y seguridad en los centros de trabajo.",

        imagen: asesoriaActas,
      },
    ],
  },
};
