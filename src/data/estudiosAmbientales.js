
/*
 * EPGC - Estudios ambientales
 *
 * Contenido provisional pendiente de validación por EPGC.
 * Imágenes ilustrativas generadas para el proyecto.
 */

// RUIDO PERIMETRAL
import heroRuidoPerimetral from "../assets/images/estudios-ambientales/ruido-perimetral/hero.png";
import medicionRuidoPerimetral from "../assets/images/estudios-ambientales/ruido-perimetral/medicion-ruido.png";
import normativaRuidoPerimetral from "../assets/images/estudios-ambientales/ruido-perimetral/normativa-ruido.png";

// RUIDO LABORAL
import heroRuidoLaboral from "../assets/images/estudios-ambientales/ruido-laboral/hero.png";
import evaluacionRuidoLaboral from "../assets/images/estudios-ambientales/ruido-laboral/evaluacion-ruido.png";
import normativaRuidoLaboral from "../assets/images/estudios-ambientales/ruido-laboral/normativa-ruido.png";

// ILUMINACIÓN
import heroIluminacion from "../assets/images/estudios-ambientales/iluminacion/hero.png";
import medicionIluminacion from "../assets/images/estudios-ambientales/iluminacion/medicion-iluminacion.png";
import condicionesIluminacion from "../assets/images/estudios-ambientales/iluminacion/condiciones-iluminacion.png";

// ANÁLISIS DE AGUA, LODO Y RESIDUOS
import heroAnalisisAgua from "../assets/images/estudios-ambientales/analisis-agua/hero.png";
import imagenNom001 from "../assets/images/estudios-ambientales/analisis-agua/nom-001.png";
import imagenNom002 from "../assets/images/estudios-ambientales/analisis-agua/nom-002.png";
import imagenNom003 from "../assets/images/estudios-ambientales/analisis-agua/nom-003.png";
import imagenNom004 from "../assets/images/estudios-ambientales/analisis-agua/nom-004.png";
import imagenNom127 from "../assets/images/estudios-ambientales/analisis-agua/nom-127.png";
import imagenNom052 from "../assets/images/estudios-ambientales/analisis-agua/nom-052.png";

// TIERRAS FÍSICAS
import heroTierras from "../assets/images/estudios-ambientales/tierras-fisicas/hero.png";
import medicionTierras from "../assets/images/estudios-ambientales/tierras-fisicas/medicion-tierras.png";
import instalacionTierras from "../assets/images/estudios-ambientales/tierras-fisicas/instalacion-tierras.png";

export const estudiosAmbientales = {
  "ruido-perimetral": {
    slug: "ruido-perimetral",
    titulo: "Estudio de ruido perimetral",
    introduccion:
      "Evaluación de emisiones sonoras hacia el entorno exterior de instalaciones y establecimientos.",
    descripcion:
      "Estudio relacionado con la medición de ruido emitido por fuentes fijas, tomando como referencia la NOM-081-SEMARNAT-1994 y sus modificaciones aplicables.",
    aviso:
      "Alcance, metodología y documentación pendientes de confirmación por EPGC.",
    imagen: heroRuidoPerimetral,
    secciones: [
      {
        titulo: "Medición de ruido perimetral",
        descripcion:
          "Evaluación de niveles sonoros en puntos del perímetro del establecimiento.",
        imagen: medicionRuidoPerimetral,
      },
      {
        titulo: "Referencia normativa",
        descripcion:
          "Consideración de la NOM-081-SEMARNAT-1994 para evaluar emisiones de ruido de fuentes fijas.",
        imagen: normativaRuidoPerimetral,
      },
    ],
  },

  "ruido-laboral": {
    slug: "ruido-laboral",
    titulo: "Estudio de ruido laboral",
    introduccion:
      "Evaluación de la exposición al ruido en los centros de trabajo.",
    descripcion:
      "Estudio relacionado con las condiciones de seguridad e higiene en centros de trabajo donde se genera ruido, tomando como referencia la NOM-011-STPS-2001.",
    aviso:
      "Alcance, documentación y condiciones del estudio pendientes de validación por EPGC.",
    imagen: heroRuidoLaboral,
    secciones: [
      {
        titulo: "Evaluación del ambiente laboral",
        descripcion:
          "Identificación y evaluación de condiciones de exposición al ruido en áreas de trabajo.",
        imagen: evaluacionRuidoLaboral,
      },
      {
        titulo: "Referencia normativa",
        descripcion:
          "Estudio relacionado con las disposiciones aplicables de la NOM-011-STPS-2001.",
        imagen: normativaRuidoLaboral,
      },
    ],
  },

  "iluminacion": {
    slug: "iluminacion",
    titulo: "Estudio de iluminación",
    introduccion:
      "Evaluación de las condiciones de iluminación en diferentes áreas y puestos de trabajo.",
    descripcion:
      "Estudio relacionado con los niveles de iluminación en centros de trabajo, tomando como referencia la NOM-025-STPS-2008.",
    aviso:
      "Alcance, tiempos de entrega y documentación pendientes de confirmación por EPGC.",
    imagen: heroIluminacion,
    secciones: [
      {
        titulo: "Medición de iluminación",
        descripcion:
          "Evaluación de los niveles de iluminación en áreas y puestos de trabajo.",
        imagen: medicionIluminacion,
      },
      {
        titulo: "Condiciones del centro de trabajo",
        descripcion:
          "Revisión de condiciones de iluminación relacionadas con las actividades realizadas.",
        imagen: condicionesIluminacion,
      },
    ],
  },

  "analisis-agua-lodo-residuos": {
    slug: "analisis-agua-lodo-residuos",
    titulo: "Análisis de agua, lodo y residuos",
    introduccion:
      "Servicios de análisis relacionados con agua, lodos y residuos, conforme a los requerimientos aplicables.",
    descripcion:
      "La referencia contempla distintas normas ambientales y sanitarias relacionadas con descargas de aguas residuales, reutilización, lodos, agua para uso y consumo humano, y residuos peligrosos.",
    aviso:
      "Catálogo de referencia. Los análisis disponibles, métodos y acreditaciones deben confirmarse con EPGC.",
    imagen: heroAnalisisAgua,
    secciones: [
      {
        titulo: "NOM-001-SEMARNAT",
        descripcion:
          "Descargas de aguas residuales en cuerpos receptores propiedad de la nación.",
        imagen: imagenNom001,
      },
      {
        titulo: "NOM-002-SEMARNAT",
        descripcion:
          "Descargas de aguas residuales a sistemas de alcantarillado urbano o municipal.",
        imagen: imagenNom002,
      },
      {
        titulo: "NOM-003-SEMARNAT",
        descripcion:
          "Aguas residuales tratadas que se reúsen en servicios al público.",
        imagen: imagenNom003,
      },
      {
        titulo: "NOM-004-SEMARNAT",
        descripcion:
          "Lodos y biosólidos derivados de sistemas de tratamiento.",
        imagen: imagenNom004,
      },
      {
        titulo: "NOM-127-SSA1",
        descripcion:
          "Agua para uso y consumo humano.",
        imagen: imagenNom127,
      },
      {
        titulo: "NOM-052-SEMARNAT",
        descripcion:
          "Identificación y clasificación de residuos peligrosos.",
        imagen: imagenNom052,
      },
    ],
  },

  "tierras-fisicas": {
    slug: "tierras-fisicas",
    titulo: "Medición e instalación de tierras físicas",
    introduccion:
      "Servicios relacionados con la evaluación e instalación de sistemas de puesta a tierra.",
    descripcion:
      "La referencia contempla medición e instalación de sistemas de tierras físicas en instalaciones eléctricas, con relación a la NOM-022-STPS-2015 cuando resulte aplicable.",
    aviso:
      "Servicios, procedimientos de medición y alcance técnico pendientes de confirmación por EPGC.",
    imagen: heroTierras,
    secciones: [
      {
        titulo: "Medición de tierras físicas",
        descripcion:
          "Evaluación de sistemas existentes de puesta a tierra en instalaciones eléctricas.",
        imagen: medicionTierras,
      },
      {
        titulo: "Instalación de tierras físicas",
        descripcion:
          "Trabajos relacionados con sistemas de puesta a tierra, sujetos a las condiciones y necesidades de cada instalación.",
        imagen: instalacionTierras,
      },
    ],
  },
};
