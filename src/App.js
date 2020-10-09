import React, { useEffect } from 'react'
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
    return (
        <div className="App">
            <Header />
            <Aboutme />
            <WhatIUse />
            <Mywork />
            <Contactme />
        </div>
    )
}

export default App
