<script setup lang="ts">
import { SERVICES_URL } from '@/shared/demo'
import { change, days, hours, reservation, summary } from '../reservation'

defineProps<{ name: string }>()
</script>

<template>
  <form class="strip" aria-label="Reservar mesa" @submit.prevent="reservation.sent = true">
    <fieldset class="days">
      <legend>Día</legend>
      <label v-for="d in days" :key="d.id" :class="{ on: reservation.day === d.id }">
        <input
          type="radio"
          :name="`${name}-day`"
          :value="d.id"
          :checked="reservation.day === d.id"
          @change="change({ day: d.id })"
        />
        {{ d.label }}
      </label>
    </fieldset>

    <label class="field">
      <span>Hora</span>
      <select :value="reservation.hour" @change="change({ hour: ($event.target as HTMLSelectElement).value })">
        <option v-for="h in hours" :key="h">{{ h }}</option>
      </select>
    </label>

    <div class="field">
      <span :id="`${name}-people`">Personas</span>
      <div class="stepper" role="group" :aria-labelledby="`${name}-people`">
        <button type="button" aria-label="Una persona menos" :disabled="reservation.people <= 1" @click="change({ people: reservation.people - 1 })">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /></svg>
        </button>
        <output>{{ reservation.people }}</output>
        <button type="button" aria-label="Una persona más" :disabled="reservation.people >= 12" @click="change({ people: reservation.people + 1 })">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14" /></svg>
        </button>
      </div>
    </div>

    <button type="submit" class="go">Reservar mesa</button>

    <p v-if="reservation.sent" class="done" role="status">
      <strong>{{ summary }}.</strong> La Marea es una demostración, así que no se reservó nada. En una página real, esto
      llega al WhatsApp del restaurante. <a :href="SERVICES_URL">Quiero una página así</a>
    </p>
  </form>
</template>

<style scoped>
.strip {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  align-items: end;
  gap: 1rem 1.6rem;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.days {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
legend,
.field > span {
  padding: 0;
  margin-bottom: 0.35rem;
  font-weight: 600;
  font-size: 1rem;
}
.field {
  display: flex;
  flex-direction: column;
}
.days label {
  position: relative;
  display: grid;
  place-items: center;
  height: 3.25rem;
  padding: 0 1.05rem;
  border-radius: 99px;
  background: var(--wine-deep);
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s var(--ease);
}
.days label::first-letter {
  text-transform: uppercase;
}
.days label:hover {
  background: #63143f;
}
.days label.on {
  background: var(--turquoise);
  color: #fff;
}
.days label:has(:focus-visible) {
  outline: 3px solid var(--white);
  outline-offset: 2px;
}
.days input {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
}
select,
.stepper {
  height: 3.25rem;
  border: 0;
  border-radius: 99px;
  background-color: var(--wine-deep);
  color: var(--white);
  font: inherit;
  font-weight: 600;
}
select {
  appearance: none;
  padding: 0 2.8rem 0 1.2rem;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f7b52c' stroke-width='3'%3E%3Cpath d='M5 9l7 7 7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1.1rem;
}
.stepper {
  display: flex;
  align-items: center;
}
.stepper button {
  display: grid;
  place-items: center;
  width: 3.25rem;
  height: 3.25rem;
  border: 0;
  border-radius: 50%;
  background: none;
  color: var(--mustard);
  cursor: pointer;
}
.stepper button:hover:not(:disabled) {
  background: #63143f;
}
.stepper button:disabled {
  opacity: 0.35;
  cursor: default;
}
.stepper svg {
  width: 1.3rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
}
output {
  min-width: 1.6rem;
  text-align: center;
  font-variant-numeric: tabular-nums;
}
.go {
  height: 3.25rem;
  padding: 0 1.8rem;
  border: 0;
  border-radius: 99px;
  background: var(--mustard);
  color: var(--wine-deep);
  font: inherit;
  font-weight: 700;
  font-size: 1.2rem;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.3s var(--ease);
}
.go:hover {
  background: #ffcb5c;
}
.go:active {
  transform: translateY(2px);
}
.done {
  grid-column: 1 / -1;
  max-width: 80ch;
}
.done strong::first-letter {
  text-transform: uppercase;
}
@media (max-width: 1099px) {
  .strip {
    grid-template-columns: auto auto 1fr;
  }
  .days {
    grid-column: 1 / -1;
  }
}
@media (max-width: 599px) {
  .strip {
    grid-template-columns: 1fr 1fr;
    gap: 0.9rem;
  }
  .days {
    flex-wrap: nowrap;
    gap: 0.3rem;
  }
  .days label {
    flex: 1;
    padding: 0 0.2rem;
    font-size: 1rem;
  }
  .stepper {
    justify-content: space-between;
  }
  .go {
    grid-column: 1 / -1;
  }
}
</style>
