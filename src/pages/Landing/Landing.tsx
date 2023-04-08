import React, {useEffect, useState} from 'react'
import styles from './Landing.module.css'
import {Button} from '@mui/material'
import {LoginModal, RegisterModal} from '../../components'
import {useAppDispatch, useAppSelector} from '../../app/hooks'
import {setUser} from '../../features/user/userSlice'
import {useLocation, useNavigate} from 'react-router'
import {isUserActive} from '../../features/user/userSelectors'
// eslint-disable-next-line max-len
import {TLoginModalInputs} from '../../components/unsorted/LoginModal/LoginModal'
// eslint-disable-next-line max-len
import {TRegisterModalInputs} from '../../components/unsorted/RegisterModal/RegisterModal'

const Landing: React.FC<unknown> = () => {
    
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const [loginModal, setLoginModal] = useState<boolean>(false)
    const [registerModal, setRegisterModal] = useState<boolean>(false)
    
    const toggleLogin = () => setLoginModal(!loginModal)
    const toggleRegister = () => setRegisterModal(!registerModal)

    const onLoginAttempt = (formState: TLoginModalInputs) => {
        dispatch(setUser({
            email: 'test@t.ru', name: 'iota02'
        }))
        toggleLogin()
    }

    const onRegisterAttempt = (formState: TRegisterModalInputs) => {
        dispatch(setUser({
            email: 'test@t.ru', name: 'iota02'
        }))
        toggleRegister()
    }
    
    const userIsActive = useAppSelector(isUserActive)
    
    useEffect(() => {
        if (userIsActive) navigate('/goals')
        else if (location.pathname !== '/') navigate('/')
    }, [userIsActive, location, navigate])

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.logo}>Hours</div>
                <div className={styles.actionButtons}>
                    <Button
                        variant="contained"
                        color="primary"
                        type="button"
                        onClick={toggleLogin}
                    >Log In</Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        type="button"
                        onClick={toggleRegister}
                    >Register</Button>
                </div>
            </div>
            <div className={styles.content}>
                <section className={styles.intro}>
                    <h1 className={styles.introLogo}>HOURS</h1>
                </section>
                <section className={styles.engagement}>
                    <h2>Somebody has calculated an average number of free
                        time of a person with full-time job</h2>
                </section>
            </div>
            <LoginModal
                open={loginModal}
                toggle={toggleLogin}
                onSubmit={onLoginAttempt}
            />
            <RegisterModal
                open={registerModal}
                toggle={toggleRegister}
                onSubmit={onRegisterAttempt}
            />
        </div>
    )
}

export default Landing
