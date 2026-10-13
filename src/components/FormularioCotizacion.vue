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
        <button type="button" class="cot-cerrar" aria-label="Cerrar formulario" @click="cerrar">×</button>
      </div>

      <form class="cot-formulario" @submit.prevent="prepararSolicitud">
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

        <p class="cot-aviso">Este formulario está en fase de integración. Por ahora no envía datos ni correos automáticamente.</p>

        <div class="cot-acciones">
          <button type="button" class="cot-cancelar" @click="cerrar">Cancelar</button>
          <button type="submit" class="cot-enviar">Preparar solicitud</button>
        </div>
      </form>

      <p v-if="preparado" class="cot-confirmacion" role="status">
        Solicitud preparada. El envío se habilitará cuando conectemos el correo o servicio correspondiente.
      </p>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";

const props = defineProps({
  abierto: { type: Boolean, default: false },
  servicioInicial: { type: String, default: "" },
});

const emit = defineEmits(["cerrar", "solicitud-preparada"]);

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

const preparado = ref(false);

watch(
  () => [props.abierto, props.servicioInicial],
  ([abierto, servicioInicial]) => {
    if (abierto) {
      preparado.value = false;
      if (servicios.includes(servicioInicial)) {
        datos.servicio = servicioInicial;
      }
    }
  }
);

function cerrar() {
  emit("cerrar");
}

function prepararSolicitud() {
  preparado.value = true;
  emit("solicitud-preparada", { ...datos });
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
