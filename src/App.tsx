import React, {useEffect} from 'react'
import './App.css'
import {Navbar} from './components'
import {Route, Routes} from 'react-router'
import {Goals, Landing, Settings, User} from './pages'
import {addOneGoal} from './features/goals/goalsSlice'
import {useAppDispatch, useAppSelector} from './app/hooks'
import {isUserActive} from './features/user/userSelectors'


function App() {

    const dispatch = useAppDispatch()
    const allowed = useAppSelector(isUserActive)

    // Adding initial store goals as a filler;
    useEffect(() => {
        dispatch(addOneGoal({
            id: 1, name: 't1', description: 'descr', duration: 4
        }))
        dispatch(addOneGoal({
            id: 2, name: 't2', description: 'descr', duration: 4
        }))
        dispatch(addOneGoal({
            id: 3, name: 't3', description: 'descr', duration: 4
        }))
        dispatch(addOneGoal({
            id: 4, name: 't4', description: 'descr', duration: 4
        }))
    }, [])


    return (
        <div className="App">
            {allowed && <Navbar/>}
            <Routes>
                <Route path='/' element={<Landing/>}/>
                {allowed && (
                    <>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/goals' element={<Goals/>}/>
                        <Route path='/user' element={<User/>}/>
                    </>
                )}
                <Route path='*' element={<Landing/>}/>

            </Routes>
        </div>
    )
}

export default App
