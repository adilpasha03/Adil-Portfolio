// EDIT ME: "My Journey So Far" statistic cards. `value` should end with the
// counter's target number so the animation can parse it automatically.
export type JourneyStat = {
  label: string
  sublabel: string
  value: number
  suffix: string
}

export const journeyStats: JourneyStat[] = [
  { label: 'Projects', sublabel: 'Completed', value: 7, suffix: '+' },
  { label: 'Months', sublabel: 'Internship', value: 2, suffix: '+' },
  { label: 'Technologies', sublabel: 'Learned', value: 18, suffix: '+' },
  { label: 'Hours', sublabel: 'Coding', value: 600, suffix: '+' },
]

// EDIT ME: The quote card at the end of the journey section.
export const journeyQuote = {
  lines: ['Code.', 'Learn.', 'Build.', 'Repeat.'],
  caption: 'Constantly learning and building better solutions.',
}
