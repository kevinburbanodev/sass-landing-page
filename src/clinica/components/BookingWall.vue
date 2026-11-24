<script setup lang="ts">
import { ref } from 'vue'
import { SERVICES_URL } from '@/shared/demo'
import { booking, message, pickSlot, slots } from '../booking'
import { treatments } from '../data'

const missing = ref(false)

function send() {
  missing.value = !booking.slotId
  if (missing.value) return
  booking.sent = true
}
</script>

<template>
  <section id="cita" class="wallbox">
    <div class="wall">
      <form class="mural painted c-cobalt form span" novalidate @submit.prevent="send">
        <div class="paint">
          <h2>Aparta tu cita.</h2>

          <div class="fields">
            <label>
              Tu nombre
              <input v-model="booking.name" type="text" autocomplete="name" maxlength="60" @input="booking.sent = false" />
            </label>
            <label>
              Qué necesitas
              <select v-model="booking.treatment" @change="booking.sent = false">
                <option v-for="t in treatments" :key="t.id" :value="t.id">{{ t.name }}</option>
              </select>
            </label>
            <label>
              Día y hora
              <select :value="booking.slotId" :aria-invalid="missing" @change="pickSlot(($event.target as HTMLSelectElement).value); missing = false">
                <option value="" disabled>Elige una cita libre</option>
                <option v-for="s in slots" :key="s.id" :value="s.id">{{ s.longDay }}, {{ s.hour }}</option>
              </select>
            </label>
          </div>

          <p v-if="missing" class="error" role="alert">Elige primero el día y la hora.</p>

          <div class="send">
            <p class="preview" aria-live="polite">
              <span class="sr-only">Mensaje que se enviará: </span>{{ message }}
            </p>
            <button type="submit" class="tile c-pink">Enviar por WhatsApp</button>
          </div>

          <div v-if="booking.sent" class="sent" role="status">
            <p>
              Esta clínica es una demostración, así que no se envió nada. En una página real, este mensaje se abre en el
              WhatsApp del negocio.
            </p>
            <a :href="SERVICES_URL">Quiero una página así</a>
          </div>
        </div>
      </form>

      <div id="donde" class="tile c-white info span">
        <h3>El Guabal, Cali</h3>
        <p>Calle de ejemplo 10 # 40-20, primer piso.<br />Parqueadero para motos y bicicletas en la puerta.</p>
      </div>
      <div class="tile c-pink info span">
        <h3>Horario</h3>
        <p>Lunes a viernes, 8:00 a. m. a 6:00 p. m.<br />Sábados, 8:00 a. m. a 1:00 p. m.</p>
      </div>
    </div>
  </section>

  <footer class="wallbox">
    <div class="wall">
      <div class="mural painted c-white foot span">
        <div class="paint">
          <p>
            Guabal Dental es un negocio inventado para mostrar cómo puede verse la página de una clínica. Precios,
            horarios y citas son ejemplos.
          </p>
          <a :href="SERVICES_URL">Hecha por Kevin Burbano</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.form {
  --w: 8;
  --h: 4;
  display: flex;
}
.form .paint {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  padding: 2.4cqw;
}
h2 {
  font-size: min(5.2cqw, 5.4rem);
}
.fields {
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  gap: 1rem;
}
label {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-weight: 600;
}
input,
select {
  width: 100%;
  min-width: 0;
  height: 3.25rem;
  padding: 0 0.9rem;
  border: 0;
  border-radius: 4px;
  background: var(--glaze);
  color: var(--ink);
  font: inherit;
  font-weight: 500;
  box-shadow: inset 0 -3px 5px rgb(8 18 60 / 0.12);
}
select {
  appearance: none;
  padding-right: 2.4rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231c3fc4' stroke-width='3'%3E%3Cpath d='M5 9l7 7 7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.8rem center;
  background-size: 1.1rem;
  text-overflow: ellipsis;
}
input:focus-visible,
select:focus-visible {
  outline: 4px solid var(--pink);
  outline-offset: 0;
}
[aria-invalid='true'] {
  box-shadow: 0 0 0 4px var(--pink);
}
.error {
  font-weight: 700;
  color: #ffd3e3;
}
.send {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: stretch;
  margin-top: auto;
}
.preview {
  padding: 1rem 1.2rem;
  border-radius: 4px;
  background: var(--cobalt-deep);
  font-size: clamp(1rem, 1.35cqw, 1.2rem);
}
.send button {
  padding: 1rem 1.6rem !important;
  font-weight: 800;
  font-size: 1.1rem;
}
.sent {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.4rem 1.2rem;
}
.sent a {
  font-weight: 700;
}
.info {
  --w: 4;
  --h: 2;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
}
.info h3 {
  font-size: clamp(1.5rem, 2.6cqw, 2.5rem);
}
.foot {
  --w: 12;
  --h: 1;
  display: flex;
  align-items: center;
}
.foot .paint {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 1rem 2.4cqw;
}
.foot p {
  max-width: 70ch;
}
.foot a {
  font-weight: 700;
  white-space: nowrap;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
}
@media (max-width: 959px) {
  .form {
    --w: 6;
    --h: 3;
  }
  .info {
    --w: 3;
  }
  .foot {
    --w: 6;
    --h: 2;
  }
  h2 {
    font-size: 9cqw;
  }
}
@media (max-width: 599px) {
  .form {
    --w: 4;
    --h: 5;
  }
  .form .paint {
    padding: 5cqw;
  }
  h2 {
    font-size: 12cqw;
  }
  .fields,
  .send {
    grid-template-columns: 1fr;
  }
  .info {
    --w: 4;
  }
  .foot {
    --w: 4;
    --h: 2;
  }
  .foot .paint {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    font-size: 0.95rem;
  }
}
</style>
