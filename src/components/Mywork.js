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
            description: "Do i need a cat, is a site for people who are thinking of getting a cat.",
            usedTools: "HTML, CSS, JS, REACT JS, Adobe XD",
            url: "https://yassenrabie.github.io/doINeedACat/"
        }, {
            image: "./assets/projects/project2.jpg",
            description: "What To Watch, is a site to search for a movie to watch",
            usedTools: "HTML, CSS, JS, REACT JS, Adobe XD, TMDB API",
            url: "https://yassen-wtw.netlify.app/"
        }

    ]

    return (
        <div className="my-work" id="my-work">
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
                    <div className="project" style={{ backgroundImage: `url(${projectsInfo[1].image})` }} onClick={() => ShowAstronomyModal(projectsInfo[1])}><div className="hover-effect"><p>View project</p></div></div>
                    <div className="project"><p>Coming Soon</p></div>
                    <div className="project"><p>Coming Soon</p></div>
                </div>
            </div>
        </div>
    )
}

export default Mywork
