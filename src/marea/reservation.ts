import { computed, reactive } from 'vue'
import { hoursFor, openDays } from './data'

export const days = openDays()

export const reservation = reactive({
  day: days[0].id,
  hour: hoursFor(days[0].id)[0],
  people: 2,
  sent: false,
})

export const chosenDay = computed(() => days.find((d) => d.id === reservation.day)!)

export const hours = computed(() => hoursFor(reservation.day))

export const summary = computed(() => {
  const who = reservation.people === 1 ? 'una persona' : `${reservation.people} personas`
  return `Mesa para ${who}, ${chosenDay.value.long} a las ${reservation.hour}`.replace(/\.$/, '')
})

export function change(patch: Partial<typeof reservation>) {
  Object.assign(reservation, patch, { sent: false })
  if (!hours.value.includes(reservation.hour)) reservation.hour = hours.value[0]
}
