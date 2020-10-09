import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Aboutme = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline()

        tl.from('.about-me .about-me-text', {
            scrollTrigger: {
                trigger: '.what-i-use .about-me-text',
                start: 'start top',
                end: 'center bottom',
                scrub: 1
            },
            y: 250,
            duration: 2,

        }).from('.about-me .title-text', {
            scrollTrigger: {
                trigger: '.about-me .title-text',
                start: 'start bottom',
                end: 'center center',
                scrub: 2
            },
            y: 150,
            duration: 2,
            skewY: 10
        })

        // tl.from('.about-me .circle', {
        //     scrollTrigger: {
        //         trigger: '.about-me',
        //         start: 'top end',
        //         end: 'bottom 100px',
        //         scrub: 1,
        //         pin: '.about-me',
        //     },
        //     scale: 0,
        //     duration: 1.5,
        // })

    }, [])
    return (
        <div className="about-me">
            <div className="container">
                {/* <div className="circle-overlay">
                    <div className="circle"></div>
                </div> */}
                <div className="title-text">
                    <h3>About Me</h3>
                </div>
                <div className="about-me-text">
                    <p>
                        I'm a Full Stack Web Developer in
                        Amman, JO. I have serious passion for
                        Programming, designing and creating intuitive, dynamic user experiences.
                        After a lot of searching and learning in different programming field and my knolge about design and ui ,i decided to become a Full Stack Web Developer.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Aboutme
