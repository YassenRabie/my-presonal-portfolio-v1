import React from 'react'
import Modal from 'react-modal'
import { ReactComponent as Close } from '../assets/close.svg'
const ProjectModal = ({ astronomyModalOpen, CloseAstronomyModal, currentProject }) => {

    return (
        <div>
            <Modal
                isOpen={astronomyModalOpen}
                onRequestClose={CloseAstronomyModal}
                closeTimeoutMS={250}
                className="modal"
            >
                <div className="close-icon-container" onClick={CloseAstronomyModal}><Close className="icon" /></div>
                <div className="modal-content">
                    <div className="project-image" style={{ backgroundImage: `url(${currentProject.image})` }}></div>
                    <div className="project-info">
                        <div className="project-description">
                            <h4>About</h4>
                            <p>{currentProject.description}</p>
                        </div>
                        <div className="project-usedTools">
                            <h4>Technology</h4>
                            <p>{currentProject.usedTools}</p>
                        </div>
                        <a href={currentProject.url} target="_target">Visit the website</a>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ProjectModal
