import React                   from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootWrapper         from '../pages/RootWrapper/RootWrapper'
import { Goals, Settings } from '../pages'
import User from '../pages/User/User'


export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootWrapper />,
		children: [
			{
				index: true,
				element: <Goals />
			},
			{
				path: 'user',
				element: <User />
			},
			{
				path: 'settings',
				element: <Settings />
			}
		]
	}
])
