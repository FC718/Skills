import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
// import LogoTitle from '../../assets/images/conan.jpg';
// import Logo from './Logo';
import Loader from 'react-loaders'
import './index.scss';
 

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')


const nameArray = ['F','r','a','n','k',' ','C','a','s','s','e','u','s']


const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ' ,
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r']

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(idTimeOut);
      }, [])

   return (
<>
    <div className="containter home-page">
        <div className="text-zone">
            <h1>
            <span className={letterClass}>H</span>
            <span className={`$letterClass _12`}>i,</span>
            <br /> 
            <span className={`$letterClass _13`}>I'</span>
            <span className={`$letterClass _1`}>m</span>

            <br></br>

            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15}/>
             {/* Frank Casseus */}
            < br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={22}/>
            {/* Software Developer */}
            </h1>
            <h2>Frontend Developer / Javascripter / Recording Artist / Songwriter</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME </Link>
        </div>
        {/* <Logo /> */}
    </div>
    <Loader type="pacman" />
    </>
   );


}
export default Home 