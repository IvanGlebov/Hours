export const enum ETimings {
	HOURS_PER_MONTH = 'hours / month',
	HOURS = 'hours',
	HOURS_PER_DAY = 'hours / day',
	HOURS_PER_WEEK = 'hours / week',
	HOURS_PER_QUARTER = 'hours / quarter',
}

export type TTiming =
	| ETimings.HOURS_PER_MONTH
	| ETimings.HOURS
	| ETimings.HOURS_PER_WEEK
	| ETimings.HOURS_PER_DAY
