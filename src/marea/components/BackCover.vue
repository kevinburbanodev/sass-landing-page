<script setup lang="ts">
import { SERVICES_URL } from '@/shared/demo'
import { plates } from '../data'
import { summary } from '../reservation'
import BookingStrip from './BookingStrip.vue'
import PlateDisc from './PlateDisc.vue'
import TideBands from './TideBands.vue'
</script>

<template>
  <section id="lugar" class="back">
    <div class="spine" aria-hidden="true">La Marea · Cocina del Pacífico · Cali</div>

    <div class="face">
      <h2>Coco, limón y hierbas de azotea.</h2>

      <dl class="tracks">
        <div>
          <dt>Almuerzo</dt>
          <dd>Martes a domingo<b>12:00 m. a 4:00 p. m.</b></dd>
        </div>
        <div>
          <dt>Cena</dt>
          <dd>Martes a sábado<b>7:00 p. m. a 10:30 p. m.</b></dd>
        </div>
        <div>
          <dt>Lugar</dt>
          <dd>Barrio Alameda, Cali<b>Carrera de ejemplo 24 # 8-15</b></dd>
        </div>
        <div>
          <dt>Llegada</dt>
          <dd>A dos cuadras de la galería<b>Parqueadero al frente</b></dd>
        </div>
      </dl>

      <div class="notes">
        <p>
          En el Pacífico las hierbas crecen en una azotea: una canoa vieja llena de tierra, levantada sobre palos para
          que no se la lleve el agua. De ahí salen el cilantro cimarrón, el poleo y la albahaca negra que huelen desde
          la puerta.
        </p>
        <p>
          El resto es leche de coco, pescado fresco y no tener afán. La carta es corta a propósito: un lado para comer y
          otro para beber y endulzarse.
        </p>
        <p>Si eres alérgico a los mariscos, avísanos al reservar.</p>
      </div>
    </div>

    <div class="record"><PlateDisc :plate="plates.mariscos" /></div>
  </section>

  <section id="reserva" class="last">
    <div class="tide"><TideBands :colors="['var(--orange)', 'var(--mustard)', 'var(--white)', '#19a39b']" /></div>
    <div class="inner">
      <h2>{{ summary }}.</h2>
      <BookingStrip name="final" />
    </div>
    <footer>
      <p>La Marea es un restaurante inventado para mostrar cómo puede verse la página de uno real. Platos, precios y horarios son ejemplos.</p>
      <a :href="SERVICES_URL">Hecha por Kevin Burbano</a>
    </footer>
  </section>
</template>

<style scoped>
.back {
  position: relative;
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) clamp(10rem, 23vw, 24rem);
  background: var(--mustard);
  overflow: hidden;
}
.spine {
  display: grid;
  place-items: center;
  padding: 0 0.7rem;
  background: var(--wine);
  color: var(--mustard);
  font-weight: 700;
  writing-mode: vertical-rl;
  rotate: 180deg;
  margin-left: -1px;
}
.face {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: clamp(2rem, 4vw, 4rem) clamp(1.8rem, 4vw, 4.5rem);
  padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 3vw, 3rem) clamp(3rem, 6vw, 6rem) var(--edge);
}
h2 {
  font-size: clamp(2.6rem, 6vw, 5.6rem);
}
.face h2 {
  grid-column: 1 / -1;
  max-width: 13ch;
}
.tracks {
  margin: 0;
}
.tracks div {
  padding: 0.75rem 0;
  border-top: 2px solid var(--wine);
}
.tracks div:last-child {
  border-bottom: 2px solid var(--wine);
}
dt {
  font-family: 'Bagel Fat One', sans-serif;
  font-size: 1.6rem;
  line-height: 1.1;
}
dd {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0 1rem;
  margin: 0;
}
.notes {
  columns: 2;
  column-gap: 1.8rem;
  font-size: 1.05rem;
  line-height: 1.4;
}
.notes p + p {
  text-indent: 1.4em;
}
/* The record slides out of the open edge of the sleeve. */
.record {
  position: relative;
  background: var(--orange);
}
.record .disc {
  position: absolute;
  top: 50%;
  left: -4%;
  width: 165%;
  translate: 0 -50%;
}
.last {
  position: relative;
  overflow: hidden;
  background: var(--wine);
  color: var(--white);
}
.tide {
  position: absolute;
  inset: 0 0 auto;
  height: clamp(14rem, 34vw, 32rem);
  transform: scaleY(-1);
}
.inner {
  position: relative;
  padding: clamp(16rem, 33vw, 32rem) var(--edge) clamp(3rem, 6vw, 5rem);
}
.inner h2 {
  max-width: 17ch;
  margin-bottom: 2.2rem;
}
footer {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.8rem 2rem;
  padding: 1.4rem var(--edge) 1.8rem;
  background: var(--wine-deep);
}
footer p {
  max-width: 70ch;
}
footer a {
  font-weight: 700;
}
@media (max-width: 1099px) {
  .face {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 799px) {
  .back {
    grid-template-columns: auto minmax(0, 1fr);
  }
  .spine {
    padding: 0 0.35rem;
    font-size: 0.95rem;
  }
  .face {
    padding-inline: 1.3rem;
  }
  .notes {
    columns: 1;
    font-size: 1.125rem;
  }
  .record {
    grid-column: 1 / -1;
    height: 62vw;
  }
  .record .disc {
    top: 8%;
    left: 10%;
    width: 80%;
    translate: none;
  }
}
</style>
