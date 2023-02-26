import React from 'react'
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { EApplicationRoutes } from './types'
import { Route } from 'react-router'
import { ProtectedRoute } from '../components/atoms'
import RootWrapper from '../pages/RootWrapper/RootWrapper'
import { Goals, Landing, Settings, User } from '../pages'
import { store } from '../app/store'


const userState = store.getState().user

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path={ EApplicationRoutes.BASE_PAGE_ROUTE }
			element={ <RootWrapper /> }
			errorElement={ <div >Outer error element</div > }
		>
			<Route
				element={
					<ProtectedRoute
						isAllowed={ userState.active }
						redirectPath={ EApplicationRoutes.BASE_PAGE_ROUTE }
					/>
				}
			>
				<Route
					path={ EApplicationRoutes.GOALS_PAGE_ROUTE }
					element={ <Goals /> }
				/>
				<Route
					path={ EApplicationRoutes.USER_PAGE_ROUTE }
					element={ <User /> }
				/>
				<Route
					path={ EApplicationRoutes.SETTINGS_PAGE_ROUTE }
					element={ <Settings /> }
				/>

			</Route >
			{/* If none of above routes is active - this is active not */}
			<Route path='/' element={<Landing />} />
		</Route >
	)
)
