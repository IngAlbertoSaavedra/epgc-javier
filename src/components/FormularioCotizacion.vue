<template>
  <div v-if="abierto" class="cot-backdrop" @click.self="cerrar">
    <section
      class="cot-dialogo"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cot-titulo"
      @keydown.esc="cerrar"
    >
      <div class="cot-encabezado">
        <div>
          <span class="cot-etiqueta">EPGC · CONTACTO</span>
          <h2 id="cot-titulo">Solicitar cotización</h2>
          <p>Cuéntanos qué necesitas y prepararemos tu solicitud.</p>
        </div>
        <button type="button" class="cot-cerrar" aria-label="Cerrar formulario" @click="cerrar" :disabled="enviando">×</button>
      </div>

      <form class="cot-formulario" @submit.prevent="enviarSolicitud">
        <div class="cot-grid">
          <label>
            Nombre completo <span>*</span>
            <input v-model.trim="datos.nombre" required maxlength="120" autocomplete="name" placeholder="Tu nombre" />
          </label>
          <label>
            Empresa
            <input v-model.trim="datos.empresa" maxlength="150" autocomplete="organization" placeholder="Nombre de la empresa" />
          </label>
          <label>
            Teléfono <span>*</span>
            <input v-model.trim="datos.telefono" type="tel" required minlength="10" maxlength="25" autocomplete="tel" placeholder="Número de contacto" />
          </label>
          <label>
            Correo electrónico <span>*</span>
            <input v-model.trim="datos.correo" type="email" required maxlength="180" autocomplete="email" placeholder="correo@ejemplo.com" />
          </label>
          <label>
            Servicio de interés <span>*</span>
            <select v-model="datos.servicio" required>
              <option disabled value="">Selecciona un servicio</option>
              <option v-for="servicio in servicios" :key="servicio" :value="servicio">{{ servicio }}</option>
            </select>
          </label>
          <label>
            Ciudad
            <input v-model.trim="datos.ciudad" maxlength="120" autocomplete="address-level2" placeholder="Ciudad / municipio" />
          </label>
        </div>

        <label>
          Cuéntanos qué necesitas <span>*</span>
          <textarea v-model.trim="datos.mensaje" required maxlength="2500" rows="4" placeholder="Describe brevemente tu solicitud"></textarea>
        </label>

        <p class="cot-aviso">Estamos realizando pruebas de envío. Tu solicitud se enviará al sistema de EPGC.</p>

        <div class="cot-acciones">
          <button type="button" class="cot-cancelar" @click="cerrar" :disabled="enviando">Cancelar</button>
          <button type="submit" class="cot-enviar" :disabled="enviando || enviado">{{ enviando ? "Enviando..." : enviado ? "Solicitud enviada" : "Enviar solicitud" }}</button>
        </div>
      </form>

      <p v-if="enviado" class="cot-confirmacion" role="status">
        Tu solicitud fue recibida por el sistema de EPGC. Gracias por contactarnos.
      </p>
      <p v-if="errorEnvio" class="cot-error" role="alert">
        {{ errorEnvio }}
      </p>
    </section>
  </div>
</template>

<script setup>
import { onBeforeUnmount, reactive, ref, watch } from "vue";

const props = defineProps({
  abierto: { type: Boolean, default: false },
  servicioInicial: { type: String, default: "" },
});

const emit = defineEmits(["cerrar", "solicitud-preparada"]);

// URL TEMPORAL de n8n. Reemplazar por /webhook/ al pasar a producción.
// const WEBHOOK_URL = "https://n8n-n8n.enoxgt.easypanel.host/webhook-test/epgc-cotizacion";
const WEBHOOK_URL = "https://n8n-n8n.enoxgt.easypanel.host/webhook/epgc-cotizacion";

const servicios = [
  "Cursos certificantes",
  "Montacarguista",
  "Trabajo en alturas",
  "Corte y soldadura",
  "Brigadas de emergencia",
  "Consultoría",
  "Estudios ambientales",
  "Otro servicio",
];

const datos = reactive({
  nombre: "",
  empresa: "",
  telefono: "",
  correo: "",
  servicio: "",
  ciudad: "",
  mensaje: "",
});

const enviando = ref(false);
const enviado = ref(false);
const errorEnvio = ref("");
let temporizadorCierre = null;

function cancelarCierreAutomatico() {
  if (temporizadorCierre !== null) {
    clearTimeout(temporizadorCierre);
    temporizadorCierre = null;
  }
}

function limpiarFormulario() {
  datos.nombre = "";
  datos.empresa = "";
  datos.telefono = "";
  datos.correo = "";
  datos.servicio = "";
  datos.ciudad = "";
  datos.mensaje = "";
  enviado.value = false;
  errorEnvio.value = "";
}

onBeforeUnmount(cancelarCierreAutomatico);

watch(
  () => [props.abierto, props.servicioInicial],
  ([abierto, servicioInicial]) => {
    if (!abierto) {
      cancelarCierreAutomatico();
      return;
    }

    if (abierto) {
      cancelarCierreAutomatico();
      enviado.value = false;
      errorEnvio.value = "";
      if (servicios.includes(servicioInicial)) {
        datos.servicio = servicioInicial;
      }
    }
  }
);

function cerrar() {
  if (!enviando.value) {
    cancelarCierreAutomatico();
    emit("cerrar");
  }
}

async function enviarSolicitud() {
  if (enviando.value || enviado.value) return;

  enviando.value = true;
  errorEnvio.value = "";

  try {
    const respuesta = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...datos }),
    });

    let resultado = null;
    try {
      resultado = await respuesta.json();
    } catch {
      throw new Error("La respuesta del servidor no es válida.");
    }

    if (!respuesta.ok || resultado?.success !== true) {
      throw new Error(
        resultado?.message || "No pudimos procesar tu solicitud. Intenta nuevamente."
      );
    }

    enviado.value = true;
    emit("solicitud-preparada", { ...datos });

    cancelarCierreAutomatico();
    temporizadorCierre = setTimeout(() => {
      temporizadorCierre = null;
      if (props.abierto) {
        emit("cerrar");
      }
      limpiarFormulario();
    }, 2000);
  } catch (error) {
    console.error("Error al enviar cotización EPGC:", error);
    errorEnvio.value =
      error instanceof TypeError
        ? "No fue posible conectar con n8n. Verifica que esté escuchando el evento de prueba y que permita solicitudes desde este sitio."
        : error.message || "No se pudo enviar la solicitud.";
  } finally {
    enviando.value = false;
  }
}
</script>

<style scoped>
.cot-backdrop {
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: rgba(2, 23, 48, 0.78);
  overflow-y: auto;
}

.cot-dialogo {
  width: min(100%, 720px);
  max-height: min(92vh, 920px);
  overflow-y: auto;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 18px 55px rgba(0, 0, 0, 0.25);
}

.cot-encabezado {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 30px 20px;
  background: #082c59;
  color: #fff;
}

.cot-etiqueta {
  color: #8ad284;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
}

.cot-encabezado h2 {
  margin: 8px 0;
  font-size: clamp(24px, 4vw, 32px);
}

.cot-encabezado p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.cot-cerrar {
  align-self: flex-start;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 32px;
  cursor: pointer;
}

.cot-formulario {
  padding: 26px 30px;
}

.cot-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 18px;
}

.cot-formulario label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: #0c2d59;
  font-size: 13px;
  font-weight: 700;
}

.cot-formulario label span {
  color: #bb3434;
}

.cot-formulario input,
.cot-formulario select,
.cot-formulario textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #d1dce7;
  border-radius: 6px;
  padding: 11px 12px;
  color: #163659;
  background: #fff;
  font: inherit;
  font-weight: 400;
}

.cot-formulario :is(input, select, textarea):focus-visible {
  outline: 2px solid #1f66a3;
  outline-offset: 1px;
}

.cot-aviso {
  margin: 15px 0;
  font-size: 12px;
  color: #62758c;
  line-height: 1.5;
}

.cot-acciones {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 12px;
}

.cot-acciones button {
  padding: 11px 18px;
  border-radius: 6px;
  font-weight: 700;
  cursor: pointer;
}

.cot-cancelar {
  border: 1px solid #b8c7d5;
  color: #0c2d59;
  background: #fff;
}

.cot-enviar {
  border: 1px solid #12588d;
  color: #fff;
  background: #12588d;
}

.cot-acciones button:disabled,
.cot-cerrar:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.cot-error {
  padding: 0 30px 22px;
  margin: 0;
  color: #a52525;
  font-size: 13px;
}

.cot-confirmacion {
  padding: 0 30px 22px;
  margin: 0;
  color: #0c6235;
  font-size: 13px;
}

@media (max-width: 600px) {
  .cot-backdrop {
    padding: 10px;
    align-items: flex-start;
  }

  .cot-encabezado {
    padding: 22px 20px;
  }

  .cot-formulario {
    padding: 22px 20px;
  }

  .cot-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
}
</style>
