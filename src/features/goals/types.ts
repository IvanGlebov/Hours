export type Goal = {
  id: number,
  name: string,
  description?: string,
  duration: number,
  intervals?: Array<Interval>
  startDate?: string,
}

export type Interval = {
  start: number,
  end: number,
}
