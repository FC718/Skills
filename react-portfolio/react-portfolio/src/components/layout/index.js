import './index.scss';
import Sidebar from '../sidebar/index';
// import Home from '../Home/index'
// import AnimatedLetters from '../AnimatedLetters';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            {/* <Home /> */}
            
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;
                </span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
            {/* <AnimaedLetters /> */}
        </div>
    )
}

export default Layout