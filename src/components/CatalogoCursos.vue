<template>
  <section class="catalogo" aria-labelledby="catalogo-titulo">
    <div class="catalogo-contenedor">
      <div class="catalogo-encabezado">
        <div>
          <p class="catalogo-etiqueta">CAPACITACIÓN EPGC</p>
          <h2 id="catalogo-titulo">Catálogo de cursos</h2>
          <p class="catalogo-aviso">{{ catalogoCursosEstado.mensaje }}</p>
        </div>
        <span class="catalogo-total">{{ cursosFiltrados.length }} de {{ catalogoCursos.length }} cursos</span>
      </div>

      <label class="catalogo-label" for="catalogo-busqueda">Buscar un curso</label>
      <input
        id="catalogo-busqueda"
        v-model.trim="busqueda"
        class="catalogo-busqueda"
        type="search"
        placeholder="Ej. primeros auxilios, montacargas, NOM..."
        autocomplete="off"
      />

      <div v-if="cursosFiltrados.length" class="catalogo-grid">
        <article v-for="curso in cursosFiltrados" :key="curso.id" class="catalogo-item">
          <span class="catalogo-numero">{{ String(curso.id).padStart(2, '0') }}</span>
          <div class="catalogo-detalle">
            <h3>{{ curso.nombre }}</h3>
            <p v-if="curso.pendienteRevision" class="catalogo-pendiente">Nombre pendiente de revisión</p>
          </div>
        </article>
      </div>
      <p v-else class="catalogo-sin-resultados" role="status">
        No se encontraron cursos con ese término.
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { catalogoCursos, catalogoCursosEstado } from '../data/catalogoCursos.js'

const busqueda = ref('')

const normalizar = (texto) => String(texto ?? '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()

const cursosFiltrados = computed(() => {
  const termino = normalizar(busqueda.value)
  return catalogoCursos.filter((curso) => normalizar(curso.nombre).includes(termino))
})
</script>

<style scoped>
.catalogo {
  background: #fff;
  padding: 12px 0 72px;
}

.catalogo-contenedor {
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
}

.catalogo-encabezado {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
  margin-bottom: 24px;
}

.catalogo-etiqueta {
  color: #4aa64c;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1.6px;
  margin: 0 0 10px;
}

.catalogo-encabezado h2 {
  color: #0c2d59;
  font-size: clamp(28px, 3vw, 38px);
  line-height: 1.1;
  margin: 0 0 12px;
}

.catalogo-aviso {
  max-width: 770px;
  margin: 0;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
}

.catalogo-total {
  white-space: nowrap;
  color: #173a62;
  font-size: 13px;
  font-weight: 700;
}

.catalogo-label {
  display: block;
  margin-bottom: 8px;
  color: #0c2d59;
  font-size: 14px;
  font-weight: 700;
}

.catalogo-busqueda {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #fff;
  color: #0c2d59;
  font: inherit;
  font-size: 15px;
  margin-bottom: 24px;
}

.catalogo-busqueda:focus-visible {
  outline: 2px solid #2465a3;
  outline-offset: 2px;
}

.catalogo-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.catalogo-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  border-radius: 8px;
  background: #f5f7f9;
  padding: 18px;
}

.catalogo-numero {
  flex: 0 0 auto;
  color: #4aa64c;
  font-size: 13px;
  font-weight: 800;
}

.catalogo-detalle {
  min-width: 0;
}

.catalogo-item h3 {
  margin: 0;
  color: #0c2d59;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 700;
  overflow-wrap: anywhere;
}

.catalogo-pendiente {
  margin: 6px 0 0;
  font-size: 12px;
  color: #8b5e13;
}

.catalogo-sin-resultados {
  padding: 22px;
  color: #64748b;
  background: #f5f7f9;
  border-radius: 8px;
}

@media (max-width: 768px) {
  .catalogo-encabezado {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
  }

  .catalogo-grid {
    grid-template-columns: 1fr;
  }

  .catalogo {
    padding-bottom: 50px;
  }
}
</style>
