<script setup lang="ts">
import { plates } from '../data'
import BookingStrip from './BookingStrip.vue'
import PlateDisc from './PlateDisc.vue'
import TideBands from './TideBands.vue'
</script>

<template>
  <header class="sleeve">
    <nav aria-label="Secciones">
      <a href="#carta">Carta</a>
      <a href="#lugar">Horario y lugar</a>
      <a href="#reserva">Reservar</a>
      <p>Cocina del Pacífico en Cali. Abierto de martes a domingo, desde las doce.</p>
    </nav>

    <div class="cover">
      <div class="tide"><TideBands /></div>
      <h1>La <br />Marea</h1>
      <div class="record"><PlateDisc :plate="plates.camarones" spin /></div>
    </div>

    <div class="booking"><BookingStrip name="hero" /></div>
  </header>
</template>

<style scoped>
.sleeve {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: var(--orange);
  overflow: hidden;
}
nav {
  position: relative;
  z-index: 3;
  display: flex;
  gap: clamp(1.1rem, 2.4vw, 2.4rem);
  padding: 1.3rem var(--edge) 0;
  font-weight: 700;
  font-size: 1.15rem;
}
nav p {
  margin-left: auto;
  max-width: 30ch;
  font-size: clamp(1.15rem, 1.6vw, 1.5rem);
  line-height: 1.2;
}
nav a {
  text-decoration: none;
}
nav a:hover {
  text-decoration: underline;
}
.cover {
  position: relative;
  flex: 1;
  min-height: 30rem;
}
.tide {
  position: absolute;
  inset: 46% 0 -8%;
}
h1 {
  position: absolute;
  left: calc(var(--edge) - 0.04em);
  top: 0.1em;
  z-index: 1;
  color: var(--wine);
  font-size: min(22.5vw, 41vh);
  line-height: 0.78;
  letter-spacing: -0.04em;
}
.record {
  position: absolute;
  z-index: 2;
  right: -3vw;
  bottom: -9%;
  width: min(39vw, 68vh);
}
.booking {
  position: relative;
  z-index: 3;
  padding: 1.2rem var(--edge) 1.5rem;
  background: var(--wine);
  color: var(--white);
}
@media (max-width: 799px) {
  nav {
    flex-wrap: wrap;
  }
  nav p {
    order: 1;
    width: 100%;
    max-width: 34ch;
    margin: 0;
  }
  .cover {
    min-height: 25rem;
  }
  .tide {
    inset: 40% 0 0;
  }
  h1 {
    font-size: 29vw;
    top: 0.16em;
  }
  .record {
    width: min(74vw, 46vh);
    right: -13vw;
    bottom: -6%;
  }
}
</style>
