import React from 'react'
import styles from './Navbar.module.css'
import {useLocation} from 'react-router'
import classNames from 'classnames'
import {Link} from 'react-router-dom'
import {useAppDispatch} from '../../../app/hooks'
import {logOutUser} from '../../../features/user/userSlice'

const Navbar = () => {

    const dispatch = useAppDispatch()
    const location = useLocation()
    
    const logOut = () => {
        dispatch(logOutUser())
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.logoWrapper}>Hours</div>
            <Link
                className={classNames({
                    [styles.linkActive]: location.pathname === '/goals'
                }, styles.link)} to="/goals">Goals</Link>
            <Link
                className={classNames({
                    [styles.linkActive]: location.pathname === '/user'
                }, styles.link)}
                to="/user">User</Link>
            <Link
                className={classNames({
                    [styles.linkActive]: location.pathname === '/settings'
                }, styles.link)}
                to="/settings">Settings</Link>
            <Link
                className={classNames({
                    [styles.linkActive]: location.pathname === '/logout'
                }, styles.link)}
                onClick={logOut}
                to="/">Log out</Link>
        </div>
    )
}

export default Navbar
