import React from 'react'
import './about.css'
import Me from '../../assets/era9.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <div>
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>2+ years working</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>250+ Worldwide</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>

            <p>Motivated Software enginnering student from the Institute of Java and Software Enginnering (IJSE) with experience in software development.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About
