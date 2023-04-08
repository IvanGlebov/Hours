export const enum ETimings {
	HOURS_PER_MONTH = 'hours / month',
	HOURS = 'hours',
	HOURS_PER_DAY = 'hours / day',
	HOURS_PER_WEEK = 'hours / week',
}

export const enum EDurations {
	HOURS_PER_MONTH = 744,
	HOURS = 8760,
	HOURS_PER_DAY = 24,
	HOURS_PER_WEEK = 168,
	// HOURS_PER_QUARTER =
}

export type TTiming =
	| ETimings.HOURS_PER_MONTH
	| ETimings.HOURS
	| ETimings.HOURS_PER_WEEK
	| ETimings.HOURS_PER_DAY
