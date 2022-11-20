export type Goal = {
  name: String,
  description: String,
  duration: Number,
  intervals: Array<Interval>
  startDate: String,
}

export type Interval = {
  start: number,
  end: number,
}
