
export enum ESettingsNames {
	DEFAULT_ELEMENT = 'GOAL',
	DEFAULT_ELEMENT_TIMING = 'DEFAULT ELEMENT TIMING'
}

export type TSettingsName =
	| ESettingsNames.DEFAULT_ELEMENT
	| ESettingsNames.DEFAULT_ELEMENT_TIMING

export enum EElements {
	PROJECT = 'PROJECT',
	GOAL = 'GOAL',
	WORK = 'WORK'
}

export interface IUser {
	name: string,
	email: string,
	settings: Record<ESettingsNames, string>,
	active: boolean
}
