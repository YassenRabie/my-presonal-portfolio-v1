import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactComponent as Html } from '../assets/programing icons/html.svg'
import { ReactComponent as Css } from '../assets/programing icons/css.svg'
import { ReactComponent as Js } from '../assets/programing icons/js.svg'
import { ReactComponent as ReactIcon } from '../assets/programing icons/react.svg'
import { ReactComponent as Mdb } from '../assets/programing icons/mdb.svg'
import { ReactComponent as Node } from '../assets/programing icons/node.svg'

const programmingLangs = [
    {
        id: 1,
        langName: 'HTML',
        langIcon: <Html />
    },
    {
        id: 2,
        langName: 'CSS',
        langIcon: <Css />
    },
    {
        id: 3,
        langName: 'JS',
        langIcon: <Js />
    },
    {
        id: 4,
        langName: 'REACT',
        langIcon: <ReactIcon />
    },
    {
        id: 5,
        langName: 'MDB',
        langIcon: <Mdb />
    },
    {
        id: 6,
        langName: 'NODE',
        langIcon: <Node />
    },
]

const WhatIUse = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline()

        tl.from('.what-i-use .programing-langs-icons', {
            scrollTrigger: {
                trigger: '.programing-langs-icons',
                start: 'start bottom',
                end: 'center 100%',
                scrub: 2
            },
            y: 150,
            duration: 2,

        }).from('.what-i-use .languages-container p', {
            scrollTrigger: {
                trigger: '.what-i-use .languages-container p',
                start: 'start bottom',
                end: 'center 85%',
                scrub: 2
            },
            y: 150,
            duration: 2,

        }).from('.what-i-use .title-text', {
            scrollTrigger: {
                trigger: '.what-i-use .title-text',
                start: 'start bottom',
                end: 'center center',
                scrub: 2
            },
            y: 150,
            duration: 2,
            skewY: 6
        })

    }, [])
    return (
        <div className="what-i-use">
            <div className="container">
                <div className="title-text">
                    <h3>What I Use</h3>
                </div>
                <div className="languages-container">
                    <div className="lines-effect">
                        <div className="horz-lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <div className="vert-lines">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>

                    </div>
                    <p>
                        I'm constantly learning new
                        frameworks , libraries and other
                        skills but this is my main <span>stack</span>
                    </p>
                    <div className="programing-langs-icons">
                        {programmingLangs.map(item => (
                            <div className="lang-icon">
                                {item.langIcon}
                                <span>{item.langName}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatIUse
