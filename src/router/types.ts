export {}

export const enum EApplicationRoutes {
	BASE_PAGE_ROUTE = '/',
	GOALS_PAGE_ROUTE = 'goals',
	SETTINGS_PAGE_ROUTE = 'settings',
	USER_PAGE_ROUTE = 'user',
}

export type TApplicationRoute =
	| EApplicationRoutes.BASE_PAGE_ROUTE
	| EApplicationRoutes.GOALS_PAGE_ROUTE
	| EApplicationRoutes.SETTINGS_PAGE_ROUTE
	| EApplicationRoutes.USER_PAGE_ROUTE
