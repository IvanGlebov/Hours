
export enum ESettingsNames {
	DEFAULT_ELEMENT = 'GOAL',
	DEFAULT_ELEMENT_TIMING = 'DEFAULT_ELEMENT_TIMING',
	DEFAULT_GAP_DURATION = 'DEFAULT_GAP_DURATION',
	TOTAL_YEAR_DURATION = 'TOTAL_YEAR_DURATION',
	DURATION = 'DURATION',
}

export type TSettingsName =
	| ESettingsNames.DEFAULT_ELEMENT
	| ESettingsNames.DEFAULT_ELEMENT_TIMING
	| ESettingsNames.DEFAULT_GAP_DURATION
	| ESettingsNames.TOTAL_YEAR_DURATION
	| ESettingsNames.DURATION

export enum EElements {
	PROJECT = 'PROJECT',
	GOAL = 'GOAL',
	WORK = 'WORK'
}

export interface IUser {
	name: string,
	email: string,
	settings: Record<ESettingsNames, string | number>,
	active: boolean
}
