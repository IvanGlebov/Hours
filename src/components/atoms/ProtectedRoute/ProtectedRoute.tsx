import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { EApplicationRoutes, TApplicationRoute } from '../../../router/types'

interface IProtectedRoute {
	isAllowed: boolean,
	redirectPath?: TApplicationRoute,
	children?: JSX.Element,
}

const ProtectedRoute = (
	{
		isAllowed,
		redirectPath = EApplicationRoutes.BASE_PAGE_ROUTE,
		children
	}: IProtectedRoute) => {

	if (!isAllowed)
		return <Navigate to={ redirectPath } replace/>

	return children ? children : <Outlet />
}

export default ProtectedRoute
