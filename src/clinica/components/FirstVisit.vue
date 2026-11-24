<script setup lang="ts">
import { questions, steps, team } from '../data'
import MotifArt from './MotifArt.vue'
import PatternTile from './PatternTile.vue'

const turns = [2, 3, 2, 3, 1, 0, 1, 0] as const
const colors = ['c-white', 'c-pink', 'c-white', 'c-cobalt']
</script>

<template>
  <section id="visita" class="wallbox">
    <div class="wall">
      <div class="mural c-white photo span">
        <img
          src="/photos/clinica-consulta.webp"
          alt="Odontólogo conversa con una paciente sentada en la silla"
          width="1200"
          height="900"
          loading="lazy"
        />
      </div>
      <div class="mural painted c-cobalt title span">
        <div class="paint">
          <h2>Tu primera visita dura media hora.</h2>
        </div>
      </div>
      <ol class="steps">
        <li v-for="(s, i) in steps" :key="s.title" class="tile step" :class="colors[i]">
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
          <span class="time">{{ s.time }}</span>
        </li>
      </ol>
      <div class="mural painted c-white who span">
        <div class="paint"><h2>Quién te atiende</h2></div>
      </div>
      <div v-for="p in team" :key="p.name" class="tile person span" :class="`c-${p.color}`">
        <MotifArt :motif="p.motif" />
        <div>
          <h3>{{ p.name }}</h3>
          <p>{{ p.role }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="preguntas" class="wallbox">
    <div class="wall">
      <div class="mural painted c-pink ask span">
        <div class="paint"><h2>Lo que todos preguntan antes de venir.</h2></div>
      </div>
      <PatternTile
        v-for="(turn, i) in turns"
        :key="i"
        class="wide"
        kind="arc"
        :turn="turn"
        :color="i % 4 < 2 ? 'green' : 'white'"
      />
      <div class="answers">
        <details v-for="(x, i) in questions" :key="x.q" class="tile c-white" :open="i === 0" name="preguntas">
          <summary>
            {{ x.q }}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M12 4v16" /></svg>
          </summary>
          <p>{{ x.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photo {
  --w: 6;
  --h: 6;
}
.title {
  --w: 6;
  --h: 2;
  display: flex;
  align-items: center;
}
.title .paint,
.ask .paint {
  padding: 2cqw 2.4cqw;
}
h2 {
  font-size: min(4.2cqw, 4.4rem);
}
.steps {
  grid-column: 7 / span 6;
  grid-row: 3 / span 4;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--g);
  margin: 0;
  padding: 0;
  list-style: none;
}
.step {
  display: flex;
  flex-direction: column;
  padding: 1.1rem 1.2rem;
}
.step h3 {
  font-size: clamp(1.2rem, 1.9cqw, 1.8rem);
  margin-bottom: 0.45rem;
}
.step p {
  font-size: clamp(0.92rem, 1.1cqw, 1.05rem);
  line-height: 1.35;
}
.step .time {
  margin-top: auto;
  font-family: 'Anybody Variable', sans-serif;
  font-weight: 800;
  font-size: clamp(1.4rem, 2.2cqw, 2.1rem);
  line-height: 1;
}
.who {
  --w: 3;
  --h: 2;
}
.who .paint {
  padding: 1.6cqw 1.4cqw;
}
.who h2 {
  font-size: min(3cqw, 3rem);
}
.person {
  --w: 3;
  --h: 2;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
}
.person h3 {
  font-size: clamp(1.3rem, 2.1cqw, 2rem);
  margin-bottom: 0.4rem;
}
.person p {
  font-size: clamp(0.95rem, 1.15cqw, 1.1rem);
  line-height: 1.3;
}
.ask {
  --w: 4;
  --h: 4;
}
.ask h2 {
  font-size: min(3.6cqw, 3.8rem);
}
.answers {
  grid-column: 5 / span 8;
  grid-row: 1 / span 6;
  display: flex;
  flex-direction: column;
  gap: var(--g);
}
.answers details {
  min-height: var(--t);
}
.answers details[open] {
  min-height: calc(var(--t) * 2 + var(--g));
}
/* Whatever is left of the wall when every answer is closed. */
.answers::after {
  content: '';
  flex: 1;
  border-radius: 4px;
  background: var(--glaze);
}
summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  min-height: var(--t);
  padding: 0.6rem 1.6rem;
  cursor: pointer;
  list-style: none;
  font-weight: 700;
  font-size: clamp(1.1rem, 1.6cqw, 1.5rem);
  line-height: 1.2;
}
summary::-webkit-details-marker {
  display: none;
}
summary svg {
  width: 1.4rem;
  flex: none;
  fill: none;
  stroke: var(--cobalt);
  stroke-width: 3;
  transition: transform 0.5s var(--ease);
}
details[open] summary svg {
  transform: rotate(45deg);
}
details p {
  padding: 0 1.6rem 1.6rem;
  max-width: 62ch;
  font-size: clamp(1.02rem, 1.4cqw, 1.3rem);
}
@media (min-width: 960px) {
  .ask {
    grid-column: 1 / span 4;
    grid-row: 1 / span 4;
  }
}
@media (max-width: 959px) {
  .photo {
    --w: 6;
    --h: 4;
  }
  .steps,
  .answers {
    grid-column: 1 / -1;
    grid-row: auto;
    grid-row-end: span 4;
  }
  .ask {
    --w: 6;
    --h: 2;
  }
  .answers {
    grid-row: auto;
  }
  .wide {
    display: none;
  }
  h2,
  .ask h2 {
    font-size: 7.6cqw;
  }
}
@media (max-width: 959px) {
  .who h2 {
    font-size: 5.6cqw;
  }
  .who .paint {
    padding: 3cqw;
  }
}
@media (max-width: 599px) {
  .who,
  .person {
    --w: 4;
    --h: 1;
  }
  .who h2 {
    font-size: 9.4cqw;
  }
  .who .paint {
    padding: 5cqw;
  }
  .person {
    grid-template-columns: 4.2rem 1fr;
    padding: 0.8rem 1.1rem;
  }
  .step {
    padding: 0.8rem;
  }
  .step h3 {
    font-size: 1.12rem;
  }
  .step p {
    font-size: 0.88rem;
    line-height: 1.28;
  }
  .step .time {
    font-size: 1.15rem;
  }
  .photo {
    --w: 4;
    --h: 3;
  }
  .title,
  .ask {
    --w: 4;
    --h: 2;
  }
  .title .paint,
  .ask .paint {
    padding: 5cqw;
  }
  h2,
  .ask h2 {
    font-size: 9.4cqw;
  }
  .steps {
    grid-row: span 4;
  }
  .answers {
    grid-row: auto;
  }
  summary {
    padding: 0.95rem 1.1rem;
  }
  details p {
    padding: 0 1.1rem 1.1rem;
  }
}
</style>
