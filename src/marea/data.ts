export interface Plate {
  src: string
  alt: string
  /** Placement that centres the round plate inside the disc, as % of the disc size. */
  width: number
  left: number
  top: number
}

export interface Track {
  id: string
  name: string
  price: string
  text: string
  plate?: Plate
  vinyl?: string
}

export const plates: Record<'camarones' | 'pescado' | 'mariscos', Plate> = {
  camarones: { src: '/photos/marea-camarones.webp', alt: 'Camarones dorados en un cuenco oscuro, vistos desde arriba', width: 184, left: -37.4, top: -6.1 },
  pescado: { src: '/photos/marea-pescado.webp', alt: 'Dos pescados fritos con cebolla y tomate en plato de borde azul', width: 112, left: -7.7, top: -38 },
  mariscos: { src: '/photos/marea-mariscos.webp', alt: 'Conchas, cangrejo y mejillones en un cuenco blanco', width: 178, left: -39, top: -8.4 },
}

/* Illustrative menu: the restaurant does not exist. */
export const sideA: Track[] = [
  { id: 'A1', name: 'Camarones al ajillo', price: '$44.000', text: 'Dorados en mantequilla y ajo. El arroz de coco llega aparte.', plate: plates.camarones },
  { id: 'A2', name: 'Ceviche de la casa', price: '$32.000', text: 'Pescado blanco en limón, leche de coco y cebolla morada.', vinyl: '#c9460a' },
  { id: 'A3', name: 'Pescado frito entero', price: '$39.000', text: 'Frito dos veces, con tomate, cebolla y limón.', plate: plates.pescado },
  { id: 'A4', name: 'Bandeja de mariscos', price: '$52.000', text: 'Mejillones, cangrejo y conchas, con limón. Para compartir.', plate: plates.mariscos },
]

export const sideB: Track[] = [
  { id: 'B1', name: 'Lulada', price: '$12.000', text: 'Lulo machacado a mano, limón y mucho hielo.', vinyl: '#557a17' },
  { id: 'B2', name: 'Jugo de borojó', price: '$13.000', text: 'Con leche y canela, espeso.', vinyl: '#8a3a22' },
  { id: 'B3', name: 'Sorbete de chontaduro', price: '$14.000', text: 'Con miel y una pizca de sal.', vinyl: '#c9460a' },
  { id: 'B4', name: 'Cocadas', price: '$9.000', text: 'Coco rallado y panela, tibias.', vinyl: '#0a8f8f' },
]

export interface Day {
  id: string
  label: string
  long: string
}

const SHORT = new Intl.DateTimeFormat('es-CO', { weekday: 'short', day: 'numeric' })
const LONG = new Intl.DateTimeFormat('es-CO', { weekday: 'long', day: 'numeric', month: 'long' })

/** Next open days (closed on Mondays). */
export function openDays(count = 5, from = new Date()): Day[] {
  const days: Day[] = []
  const date = new Date(from)
  while (days.length < count) {
    date.setDate(date.getDate() + 1)
    if (date.getDay() === 1) continue
    days.push({
      id: date.toDateString(),
      label: SHORT.format(date).replace(/[.,]/g, ''),
      long: LONG.format(date).replace(',', ''),
    })
  }
  return days
}

/** Sundays are lunch only. */
export function hoursFor(dayId: string): string[] {
  const lunch = ['12:00 m.', '1:00 p. m.', '2:00 p. m.']
  return new Date(dayId).getDay() === 0 ? lunch : [...lunch, '7:00 p. m.', '8:00 p. m.', '9:00 p. m.']
}
