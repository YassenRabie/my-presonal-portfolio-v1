import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import emailjs from 'emailjs-com'
import { useAlert } from 'react-alert'

const Contactme = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
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
    const alert = useAlert()

    const { name, email, message } = formData

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const sendMessage = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert.show('Please fill all the fields.')
        }

        var templateParams = {
            name,
            email,
            message
        }

        emailjs.send('service_niwb2vk', 'template_0ojvvbu', templateParams, 'user_s7nWnF5Iv5B6a1f6hBqzE')
            .then(function (response) {
                // console.log('SUCCESS!', response.status, response.text)
                alert.show('Thank you for your message.')
                setFormData({ name: "", email: "", message: "" })
            }, function (error) {
                // console.log('FAILED...', error)
            })
    }

    return (
        <div className="contact-me" id="contact-me">
            <div className="container">
                <div className="title-text">
                    <h3>Contact Me</h3>
                </div>
                <div className="contact-form">
                    <form type>
                        <section>
                            <label>Your Name</label>
                            <input type="text" name="name" value={name} onChange={e => onChange(e)} placeholder="ex: yassen rabie" />
                        </section>
                        <section>
                            <label>Your Email</label>
                            <input type="text" name="email" value={email} onChange={e => onChange(e)} placeholder="ex: example@contact.com" />
                        </section>
                        <section>
                            <label>Your Message</label>
                            <textarea type="text" name="message" value={message} onChange={e => onChange(e)} placeholder="" />
                        </section>
                        <button onClick={(e) => sendMessage(e)}>Contact Me</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactme
