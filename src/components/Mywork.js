import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Modal from './Modal'

const Mywork = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const tl = gsap.timeline()

        tl.from('.my-work .title-text', {
            scrollTrigger: {
                trigger: '.my-work .title-text',
                start: 'start bottom',
                end: 'center center',
                scrub: 2
            },
            y: 100,
            duration: 2,
            skewY: 6
        }).from('.my-work .projects-container .project', 1, {
            scrollTrigger: {
                trigger: '.my-work .project',
                start: 'start bottom',
                end: '30% center',
                scrub: 2
            },
            y: 150,
            duration: 2,
            stagger: .3
        })

    }, [])
    const [astronomyModalOpen, setAstronomyModalOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState({})

    const ShowAstronomyModal = (project) => {
        setCurrentProject(project)
        setAstronomyModalOpen(true)
    }
    const CloseAstronomyModal = () => {
        setAstronomyModalOpen(false)
    }

    const projectsInfo = [
        {
            image: "./assets/projects/project1.jpg",
            description: "Thinking of getting a cat? this is the site for you.",
            usedTools: "HTML, CSS, JS, REACT JS, Adobe XD"
        }
    ]

    return (
        <div className="my-work">
            <div className="triangles-effect">
                <div className="tr"></div>
                <div className="tr"></div>
                <div className="tr"></div>
            </div>
            <div className="container">
                <Modal astronomyModalOpen={astronomyModalOpen} currentProject={currentProject} CloseAstronomyModal={CloseAstronomyModal} />
                <div className="title-text">
                    <h3>My work</h3>
                    <p>Chosen projects</p>
                </div>
                <div className="projects-container">
                    <div className="project" style={{ backgroundImage: `url(${projectsInfo[0].image})` }} onClick={() => ShowAstronomyModal(projectsInfo[0])}><div className="hover-effect"><p>View project</p></div></div>
                    <div className="project"><p>Coming Soon</p></div>
                    <div className="project"><p>Coming Soon</p></div>
                    <div className="project"><p>Coming Soon</p></div>

                </div>
            </div>
        </div>
    )
}

export default Mywork
