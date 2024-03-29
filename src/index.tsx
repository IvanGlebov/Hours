import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './app/store'
import reportWebVitals from './reportWebVitals'
import './index.css'
import {SnackbarProvider} from 'notistack'
import {ThemeProvider} from '@mui/material'
import theme from './theme'
import {BrowserRouter} from 'react-router-dom'
import App from './App'


const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <SnackbarProvider maxSnack={5} autoHideDuration={5000}>
                        <App />
                    </SnackbarProvider>
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
