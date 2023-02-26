import React, { useEffect } from 'react'
import styles               from './Navbar.module.css'
import { Link }             from '@mui/material'
import { useLocation } from 'react-router'
import classNames           from 'classnames'

const Navbar = () => {
	const location = useLocation()
	useEffect(() => {
		console.log('Pathname: ', location.pathname)
	}, [location.pathname])

	return (
		<div className={ styles.container }>
			<div className={ styles.logoWrapper }>Hours</div>
			<Link
				className={ classNames({
					[styles.linkActive]: location.pathname === '/goals'
				}, styles.link) } href="goals">Goals</Link>
			<Link
				className={ classNames({
					[styles.linkActive]: location.pathname === '/user'
				}, styles.link) }
				href="user">User</Link>
			<Link
				className={ classNames({
					[styles.linkActive]: location.pathname === '/settings'
				}, styles.link) }
				href="settings">Settings</Link>
			{/*<Link*/}
			{/*	className={ classNames({*/}
			{/*		[styles.linkActive]: location.pathname === '/logout'*/}
			{/*	}, styles.link) }*/}
			{/*	href="/logout">Log out</Link>*/}
		</div>
	)
}

export default Navbar
