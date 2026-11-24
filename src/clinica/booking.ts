import { computed, reactive } from 'vue'
import { treatments, upcomingSlots, type Motif } from './data'

export const slots = upcomingSlots()

export const booking = reactive({
  slotId: '',
  treatment: 'valoracion' as Motif,
  name: '',
  sent: false,
})

export const chosenSlot = computed(() => slots.find((s) => s.id === booking.slotId))

export const chosenTreatment = computed(() => treatments.find((t) => t.id === booking.treatment)!)

export const message = computed(() => {
  const name = booking.name.trim()
  const when = chosenSlot.value ? ` el ${chosenSlot.value.longDay} a las ${chosenSlot.value.hour}` : ''
  return `Hola${name ? `, soy ${name}` : ''}. Quiero una cita de ${chosenTreatment.value.name.toLowerCase()}${when}`.replace(/\.$/, '') + '.'
})

export function pickSlot(id: string) {
  booking.slotId = booking.slotId === id ? '' : id
  booking.sent = false
}

export function pickTreatment(id: Motif) {
  booking.treatment = id
  booking.sent = false
}
