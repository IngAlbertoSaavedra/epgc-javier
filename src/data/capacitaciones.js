
import heroMontacarguista from "../assets/images/capacitaciones/montacarguista/hero.png";
import imagenOperacion from "../assets/images/capacitaciones/montacarguista/operacion-segura.png";
import imagenPractica from "../assets/images/capacitaciones/montacarguista/capacitacion-practica.png";
import imagenConstancias from "../assets/images/capacitaciones/montacarguista/constancias.png";

// BRIGADAS DE EMERGENCIA
import heroBrigadas from "../assets/images/capacitaciones/brigadista/hero.png";
import imagenIncendios from "../assets/images/capacitaciones/brigadista/combate-incendios.png";
import imagenPrimerosAuxilios from "../assets/images/capacitaciones/brigadista/primeros-auxilios.png";
import imagenBusquedaRescate from "../assets/images/capacitaciones/brigadista/busqueda-rescate.png";
import imagenEvacuacion from "../assets/images/capacitaciones/brigadista/evacuacion.png";

// CORTE Y SOLDADURA
import heroSoldadura from "../assets/images/capacitaciones/soldadura/hero.png";
import imagenTecnicasSoldadura from "../assets/images/capacitaciones/soldadura/tecnicas-soldadura.png";
import imagenSeguridadSoldadura from "../assets/images/capacitaciones/soldadura/seguridad-soldadura.png";
import imagenCapacitacionSoldadura from "../assets/images/capacitaciones/soldadura/capacitacion-practica.png";

// TRABAJO EN ALTURAS
import heroAlturas from "../assets/images/capacitaciones/trabajo-alturas/hero.png";
import imagenSeguridadAlturas from "../assets/images/capacitaciones/trabajo-alturas/seguridad-alturas.png";
import imagenEquiposAnticaidas from "../assets/images/capacitaciones/trabajo-alturas/equipos-anticaidas.png";
import imagenPracticaAlturas from "../assets/images/capacitaciones/trabajo-alturas/capacitacion-practica.png";

export const capacitaciones = {

  "cursos-certificantes": {
    slug: "cursos-certificantes",
    titulo: "Cursos certificantes",
    introduccion: "Catálogo de referencia pendiente de validación por EPGC.",
    temas: [],
    aviso: "Catálogo provisional. Cursos y acreditaciones pendientes de confirmación por EPGC.",
    imagen: null,
    tipo: "catalogo",
  },

  montacarguista: {
    slug: "montacarguista",
    titulo: "Montacarguista",
    introduccion: "Información de la capacitación pendiente de validación por EPGC.",
    temas: [],
    aviso: "Contenido pendiente de confirmación por EPGC.",
    imagen: heroMontacarguista,
    tipo: "curso",

    secciones: [
      {
        titulo: "Operación segura de montacargas",
        descripcion:
          "Capacitación orientada a la operación segura de montacargas de hombre sentado, hombre parado, combustión interna y eléctricos.",
        imagen: imagenOperacion,
      },
      {
        titulo: "Capacitación teórica y práctica",
        descripcion:
          "Actividades de aprendizaje enfocadas en la operación, identificación de riesgos y prácticas de seguridad con montacargas.",
        imagen: imagenPractica,
      },
      {
        titulo: "Constancias y documentación",
        descripcion:
          "La documentación y las constancias correspondientes a esta capacitación están pendientes de confirmación por EPGC.",
        imagen: imagenConstancias,
      },
    ],
  },


  "trabajo-en-alturas": {
    slug: "trabajo-en-alturas",
    titulo: "Trabajo en alturas",
    introduccion:
      "Formación orientada a la prevención de riesgos y al desarrollo de prácticas seguras durante trabajos realizados en estructuras y superficies elevadas.",
    temas: [],
    aviso: "Contenido, modalidades y acreditaciones pendientes de confirmación por EPGC.",
    imagen: heroAlturas,
    tipo: "curso",

    secciones: [
      {
        titulo: "Seguridad en trabajos en altura",
        descripcion:
          "Identificación de riesgos de caída, medidas preventivas y condiciones de seguridad antes de realizar actividades en plataformas, estructuras y zonas elevadas.",
        imagen: imagenSeguridadAlturas,
      },
      {
        titulo: "Equipos de protección y sistemas anticaídas",
        descripcion:
          "Conocimiento del equipo de protección personal, arneses, líneas de vida, conectores y puntos de anclaje utilizados para reducir riesgos durante el trabajo en alturas.",
        imagen: imagenEquiposAnticaidas,
      },
      {
        titulo: "Capacitación teórica y práctica",
        descripcion:
          "Formación orientada a reconocer condiciones inseguras, revisar el equipo antes de utilizarlo y comprender procedimientos de trabajo seguro y respuesta ante emergencias en altura.",
        imagen: imagenPracticaAlturas,
      },
    ],
  },


  "corte-y-soldadura": {
    slug: "corte-y-soldadura",
    titulo: "Corte y soldadura",
    introduccion:
      "Formación orientada al conocimiento de los procesos de corte y soldadura, sus aplicaciones y las medidas de seguridad en el entorno industrial.",
    temas: [],
    aviso: "Contenido, modalidades y acreditaciones pendientes de confirmación por EPGC.",
    imagen: heroSoldadura,
    tipo: "curso",

    secciones: [
      {
        titulo: "Técnicas de corte y soldadura",
        descripcion:
          "Introducción a los procesos de corte, preparación de materiales y operaciones de soldadura utilizadas en trabajos industriales.",
        imagen: imagenTecnicasSoldadura,
      },
      {
        titulo: "Seguridad en trabajos de soldadura",
        descripcion:
          "Identificación de riesgos relacionados con chispas, altas temperaturas, equipos de trabajo y uso de protección personal.",
        imagen: imagenSeguridadSoldadura,
      },
      {
        titulo: "Formación teórica y práctica",
        descripcion:
          "Presentación de conceptos básicos y ejercicios prácticos orientados a desarrollar habilidades para realizar trabajos de corte y soldadura.",
        imagen: imagenCapacitacionSoldadura,
      },
    ],
  },

  "brigadas-de-emergencia": {
    slug: "brigadas-de-emergencia",
    titulo: "Brigadas de emergencia",
    introduccion:
      "Capacitación enfocada en la preparación y respuesta ante situaciones de emergencia.",
    temas: [],
    aviso: "Contenido y alcance de la capacitación pendientes de confirmación por EPGC.",
    imagen: heroBrigadas,
    tipo: "curso",

    secciones: [
      {
        titulo: "Combate contra incendios",
        descripcion:
          "Prácticas orientadas al reconocimiento de riesgos de incendio, el uso de extintores y la respuesta inicial ante situaciones de emergencia.",
        imagen: imagenIncendios,
      },
      {
        titulo: "Primeros auxilios",
        descripcion:
          "Formación introductoria sobre la atención inicial de personas ante accidentes y situaciones que requieren asistencia inmediata.",
        imagen: imagenPrimerosAuxilios,
      },
      {
        titulo: "Búsqueda y rescate",
        descripcion:
          "Actividades enfocadas en la localización, asistencia y movilización de personas durante simulacros de emergencia.",
        imagen: imagenBusquedaRescate,
      },
      {
        titulo: "Evacuación",
        descripcion:
          "Prácticas relacionadas con rutas de evacuación, puntos de reunión y procedimientos para desalojar instalaciones de manera organizada.",
        imagen: imagenEvacuacion,
      },
    ],
  },
};
