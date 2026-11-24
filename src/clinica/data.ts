export type Motif =
  | 'valoracion'
  | 'limpieza'
  | 'resina'
  | 'blanqueamiento'
  | 'endodoncia'
  | 'corona'
  | 'implante'
  | 'ortodoncia'

export interface Treatment {
  id: Motif
  name: string
  price: string
  time: string
  text: string
  color: 'cobalt' | 'pink' | 'green' | 'white'
}

/* Illustrative content: the clinic does not exist. */
export const treatments: Treatment[] = [
  { id: 'valoracion', name: 'Valoración', price: '$60.000', time: '30 min', text: 'Revisión, radiografía y un plan por escrito.', color: 'white' },
  { id: 'limpieza', name: 'Limpieza', price: '$140.000', time: '45 min', text: 'Sarro y manchas fuera, encías revisadas.', color: 'pink' },
  { id: 'resina', name: 'Resina', price: 'desde $150.000', time: '40 min', text: 'Cierra una caries o repara un borde partido.', color: 'cobalt' },
  { id: 'blanqueamiento', name: 'Blanqueo', price: '$480.000', time: '1 hora', text: 'En el consultorio, en una sola visita.', color: 'green' },
  { id: 'endodoncia', name: 'Endodoncia', price: 'desde $420.000', time: '1 o 2 visitas', text: 'Salva un diente con el nervio dañado.', color: 'green' },
  { id: 'corona', name: 'Corona', price: 'desde $950.000', time: '2 visitas', text: 'Cubre y protege un diente debilitado.', color: 'cobalt' },
  { id: 'implante', name: 'Implante', price: 'desde $3.200.000', time: '4 a 6 meses', text: 'Reemplaza un diente que ya no está.', color: 'pink' },
  { id: 'ortodoncia', name: 'Ortodoncia', price: 'desde $180.000 al mes', time: '18 a 24 meses', text: 'Brackets o alineadores, según tu caso.', color: 'white' },
]

export interface Slot {
  id: string
  day: string
  longDay: string
  hour: string
}

const SHORT = new Intl.DateTimeFormat('es-CO', { weekday: 'short', day: 'numeric' })
const LONG = new Intl.DateTimeFormat('es-CO', { weekday: 'long', day: 'numeric', month: 'long' })

/** Example appointment slots on the next working days, so the demo never shows past dates. */
export function upcomingSlots(from = new Date()): Slot[] {
  const hours = [['8:00 a. m.', '10:30 a. m.', '3:00 p. m.'], ['9:00 a. m.', '11:30 a. m.', '4:30 p. m.'], ['8:30 a. m.', '2:00 p. m.']]
  const saturday = ['8:00 a. m.', '9:30 a. m.', '11:00 a. m.'] // closes at 1:00 p. m.
  const slots: Slot[] = []
  const date = new Date(from)
  for (const dayHours of hours) {
    do date.setDate(date.getDate() + 1)
    while (date.getDay() === 0)
    const open = date.getDay() === 6 ? saturday.slice(0, dayHours.length) : dayHours
    for (const hour of open) {
      slots.push({
        id: `${date.toDateString()} ${hour}`,
        day: SHORT.format(date).replace(/[.,]/g, ''),
        longDay: LONG.format(date).replace(',', ''),
        hour,
      })
    }
  }
  return slots
}

export const steps = [
  { title: 'Te escuchamos', time: '10 min', text: 'Qué te molesta y qué te da miedo. Nadie te revisa todavía.' },
  { title: 'Revisamos', time: '10 min', text: 'Diente por diente, con radiografía si hace falta.' },
  { title: 'Te mostramos', time: '5 min', text: 'En la pantalla, lo mismo que vemos nosotros.' },
  { title: 'Te llevas el plan', time: '5 min', text: 'Qué es urgente, qué puede esperar y cuánto cuesta.' },
]

/* Invented people, covered by the demo notice. */
export const team: { name: string; role: string; motif: Motif; color: 'cobalt' | 'pink' | 'green' }[] = [
  { name: 'Laura', role: 'Valoración y ortodoncia', motif: 'ortodoncia', color: 'pink' },
  { name: 'Andrés', role: 'Implantes y coronas', motif: 'corona', color: 'cobalt' },
  { name: 'Milena', role: 'Limpieza y niños', motif: 'limpieza', color: 'green' },
]

export const questions = [
  { q: '¿Me va a doler?', a: 'Usamos anestesia local cuando el tratamiento la necesita. Si algo te incomoda, levantas la mano y paramos.' },
  { q: '¿Los precios son finales?', a: 'Son de referencia. El valor final queda escrito en tu plan, y solo empezamos si lo apruebas.' },
  { q: '¿Puedo pagar por partes?', a: 'Sí. Los tratamientos de varias visitas se pagan por etapas, a medida que se hacen.' },
  { q: '¿Atienden niños?', a: 'Sí, desde que sale el primer diente. Pide la cita y cuéntanos la edad.' },
  { q: '¿Y si no puedo ir?', a: 'Escríbenos hasta cuatro horas antes y movemos la cita sin costo.' },
]
