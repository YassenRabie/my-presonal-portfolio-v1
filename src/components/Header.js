import React, { useEffect } from 'react'
import gsap from 'gsap'

const Header = () => {
    useEffect(() => {

        gsap.to('body', 0, { css: { visibility: 'visible' } })

        // timeline
        const tl = gsap.timeline()

        tl.from('.header .my-info h1', 2, {
            y: 100,
            ease: 'power4.out',
            skewY: 5,
            opacity: 0,
            delay: .5
        }).from('.header .my-info p', 1, {
            opacity: 0,
            y: 10,
            ease: 'expo.inOut'
        }, "-=1.5").from('.header .down-triangles .down-triangle', 1, {
            y: 50,
            skewY: 8,
            opacity: 0,
            duration: 2,
            stagger: .15
        }, "-=1.5").from('.header .border-overlay', .5, {
            boxShadow: 'inset 0px 0px 0px 25px #ffd803'
        })
    }, [])

    return (
        <div className="header">
            <div className="down-triangles">
                <div className="down-triangle"></div>
                <div className="down-triangle"></div>
                <div className="down-triangle"></div>
            </div>
            <div className="border-overlay">
                <div className="boxes-container">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
                <div className="border-overlay-line"></div>
            </div>
            <div className="my-info">
                <h1 className="name" >Yassen Rabie</h1>
                <p>Full stack web developer</p>
            </div>
        </div>
    )
}

export default Header
