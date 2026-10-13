
/*
 * EPGC - Catálogo provisional de cursos
 *
 * Fuente: Catálogo de referencia de Consultoría GC.
 * Estado: PENDIENTE DE VALIDACIÓN POR JAVIER.
 *
 * Se eliminaron registros repetidos y se
 * reorganizaron los identificadores.
 *
 * Este listado NO representa todavía
 * la oferta oficial de EPGC.
 */

export const catalogoCursos = [
  { id: 1, nombre: "PRIMEROS AUXILIOS" },
  { id: 2, nombre: "BÚSQUEDA Y RESCATE" },
  { id: 3, nombre: "COMBATE CONTRA INCENDIOS" },
  { id: 4, nombre: "SEGURIDAD EN TRABAJOS DE SOLDADURA Y CORTE" },
  { id: 5, nombre: "MANEJO SEGURO DE MONTACARGAS" },
  { id: 6, nombre: "OPERACIÓN SEGURA DE EQUIPOS DE ELEVACIÓN" },
  { id: 7, nombre: "SEGURIDAD DE TRABAJOS EN ESPACIOS CONFINADOS" },
  { id: 8, nombre: "SEGURIDAD EN TRABAJOS CON ELECTRICIDAD" },
  { id: 9, nombre: "SEGURIDAD EN TRABAJOS EN ALTURAS" },
  { id: 10, nombre: "MANEJO SEGURO DE QUÍMICOS" },
  { id: 11, nombre: "VIBRACIONES EN LOS CENTROS DE TRABAJO" },
  { id: 12, nombre: "CONTAMINANTES DEL AMBIENTE LABORAL" },
  { id: 13, nombre: "TRABAJOS EN CONDICIONES TÉRMICAS ELEVADAS O ABATIDAS" },
  { id: 14, nombre: "COMISIÓN DE SEGURIDAD E HIGIENE" },
  { id: 15, nombre: "USO Y CONSERVACIÓN DE HERRAMIENTAS" },
  { id: 16, nombre: "ELEMENTOS BÁSICOS PARA CONSTRUCCIONES SEGURAS" },
  { id: 17, nombre: "POLVOS EXPLOSIVOS" },
  { id: 18, nombre: "LOTO, BLOQUEO Y ETIQUETADO" },
  { id: 19, nombre: "MAQUINARIA Y EQUIPO" },
  { id: 20, nombre: "IDENTIFICACIÓN Y COMUNICACIÓN DE PELIGROS Y RIESGOS" },
  { id: 21, nombre: "ATENCIÓN A FUGAS Y DERRAMES" },
  { id: 22, nombre: "CONTROL Y COMBATE DE INCENDIOS NIVEL II" },
  { id: 23, nombre: "CALDERAS" },
  { id: 24, nombre: "CAPACITACIÓN PARA LA OPERACIÓN SEGURA DE CALDERAS" },
  { id: 25, nombre: "SEGURIDAD EN TRABAJOS CONFINADOS" },
  { id: 26, nombre: "NOM-002-STPS-2010 PREVENCIÓN Y COMBATE CONTRA INCENDIOS" },
  { id: 27, nombre: "EVALUACIÓN DE PELIGROS Y RIESGOS POR FENÓMENOS NATURALES" },
  { id: 28, nombre: "OPERACIÓN SEGURA DE MAQUINARIA PESADA" },
  { id: 29, nombre: "MANTENIMIENTO DE INSTALACIONES ELÉCTRICAS" },
  { id: 30, nombre: "PROGRAMA PREVENTIVO EN LA CONSTRUCCIÓN" },
  { id: 31, nombre: "NOM-026-STPS-2008 COLORES Y SEÑALAMIENTOS DE SEGURIDAD E HIGIENE" },
  { id: 32, nombre: "USO, MANEJO Y PROCEDIMIENTOS DE SEGURIDAD DEL MONTACARGAS" },
  { id: 33, nombre: "SEGURIDAD E HIGIENE EN SOLDADURA" },
  { id: 34, nombre: "MANEJO DE PLAGUICIDAS Y AGROQUÍMICOS" },
  { id: 35, nombre: "NOM-005-STPS-1998 MANEJO, TRANSPORTE Y ALMACENAMIENTO DE SUSTANCIAS QUÍMICAS" },
  { id: 36, nombre: "NOM-006-STPS-2014 MANEJO Y ALMACENAMIENTO DE MATERIALES" },
  { id: 37, nombre: "NOM-020-STPS-2011 RECIPIENTES SUJETOS A PRESIÓN" },
  { id: 38, nombre: "NOM-022-STPS-2008 ELECTRICIDAD ESTÁTICA" },
  { id: 39, nombre: "NOM-029-STPS CONDICIONES DE SEGURIDAD EN MANTENIMIENTO DE INSTALACIONES ELÉCTRICAS" },
  { id: 40, nombre: "NOM-027-STPS-2008 SOLDADURA Y CORTE" },
  { id: 41, nombre: "NOM-017-STPS-2008 EQUIPO DE PROTECCIÓN PERSONAL" },
  { id: 42, nombre: "NOM-020-STPS-2008", pendienteRevision: true },
  { id: 43, nombre: "EVACUACIÓN" },
  { id: 44, nombre: "FACTORES DE RIESGO PSICOSOCIAL EN EL TRABAJO DE ACUERDO A LA NOM-035-STPS-2018" },
  { id: 45, nombre: "SALUD, SEGURIDAD Y MEDIO AMBIENTE" },
  { id: 46, nombre: "MICROBIOLOGÍA Y MÉTODOS DE DIAGNÓSTICOS EN AGUA Y ALIMENTOS" },
  { id: 47, nombre: "IDENTIFICACIÓN Y EVALUACIÓN DE IMPACTOS AMBIENTALES (ISO 14001:2015)" },
  { id: 48, nombre: "CONDICIONES DE SEGURIDAD EN EL MANEJO DE RETRO-EXCAVADORAS Y GRÚAS (MANIOBRISTA O RIGGER)" },
  { id: 49, nombre: "CONDICIONES DE SEGURIDAD EN TRABAJOS DE EXCAVACIONES" },
  { id: 50, nombre: "GESTIÓN INTEGRAL DE RESIDUOS SÓLIDOS URBANOS Y RESIDUOS DE MANEJO ESPECIAL" },
  { id: 51, nombre: "MANEJO DE SUSTANCIAS QUÍMICAS" },
  { id: 52, nombre: "HAZMAT" },
  { id: 53, nombre: "GRÚAS VIAJERAS (IZAJE Y CARGAS SUSPENDIDAS)" },
];

export const catalogoCursosEstado = {
  provisional: true,
  validadoPorEPGC: false,
  totalReferencia: 55,
  totalSinDuplicados: 53,
  mensaje:
    "Catálogo de referencia pendiente de validación por EPGC. Los cursos, su disponibilidad y sus acreditaciones están sujetos a confirmación.",
};
