import React, { useEffect } from 'react'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import Aboutme from './components/Aboutme'
import Contactme from './components/Contactme'
import Header from './components/Header'
import Mywork from './components/Mywork'
import WhatIUse from './components/WhatIUse'
import "./styles/App.scss"

function App() {
    useEffect(() => {
        let vh = window.innerHeight * .01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
    })

    // optional configuration
    const options = {
        // you can also just use 'bottom center'
        position: positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: '30px',
        // you can also just use 'scale'
        transition: transitions.FADE
    }

    return (
        <div className="App">
            <AlertProvider template={AlertTemplate} {...options}>
                <Header />
                <Aboutme />
                <WhatIUse />
                <Mywork />
                <Contactme />
            </AlertProvider>
        </div>
    )
}

export default App
