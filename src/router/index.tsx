import React                   from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootWrapper             from '../pages/RootWrapper/RootWrapper'
import { Goals, Settings }     from '../pages'
import User                    from '../pages/User/User'
import { EApplicationRoutes }  from './types'

export const router = createBrowserRouter([
	{
		path: EApplicationRoutes.BASE_PAGE_ROUTE,
		element: <RootWrapper />,
		children: [
			{
				index: true,
				element: <Goals />
			},
			{
				path: EApplicationRoutes.USER_PAGE_ROUTE,
				element: <User />
			},
			{
				path: EApplicationRoutes.SETTINGS_PAGE_ROUTE,
				element: <Settings />
			}
		]
	}
])
