import './index.scss'
// import Layout from "../layout"
// import Sidebar from "../sidebar"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faCss3, faGitAlt, faHtml5, faReact, faJsSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(idTimeOut);
      }, [])
     
    return (
        <>
        
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        text="About" strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15} />
                </h1>
                <p>
                    My name is Frank Casseus, and I'm a 32-year-old front-end web developer. I have a unique background in music production and audio engineering, which has given me a creative perspective when it comes to designing and developing websites.
                </p>
                <p>
                    I recently graduated from a tech bootcamp, where I honed my skills in HTML, CSS, JavaScript, and various web development frameworks. I'm passionate about crafting visually appealing and user-friendly interfaces that provide a seamless browsing experience.
                    <img src=''>

                    </img>
                </p>
                <p>
                    Combining my technical knowledge with my artistic background, I strive to bring a fresh and innovative approach to the workspace. I enjoy finding creative solutions to problems and constantly expanding my skill set to stay up-to-date with the latest trends and technologies in the web development industry.

                    With a strong foundation in both music and technology, I bring a unique perspective to my work. I believe that the marriage of creativity and technical expertise is essential in creating engaging and impactful digital experiences.
                </p>
            </div>
            <div className="stage-cube-cont">
          <div className="cubespinner">
            
            <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />

            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
            <FontAwesomeIcon icon={faPython} color="#ffde57 #4584b6, #646464" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithubSquare} color="#000000" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
      </>
    )
}

export default About 