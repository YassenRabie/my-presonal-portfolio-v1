import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contactme = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline()

        tl.from('.contact-me .title-text', {
            scrollTrigger: {
                trigger: '.contact-me .title-text',
                start: 'start bottom',
                end: 'center center',
                scrub: 2
            },
            y: 100,
            duration: 2,
            skewY: 6
        })

    }, [])
    return (
        <div className="contact-me">
            <div className="container">
                <div className="title-text">
                    <h3>Contact Me</h3>
                </div>
                <div className="contact-form">
                    <form>
                        <section>
                            <label>Your Name</label>
                            <input type="text" placeholder="ex: yassen rabie" />
                        </section>
                        <section>
                            <label>Your Email</label>
                            <input type="text" placeholder="ex: example@contact.com" />
                        </section>
                        <section>
                            <label>Your Message</label>
                            <textarea type="text" placeholder="" />
                        </section>
                        <button>Contact Me</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactme
