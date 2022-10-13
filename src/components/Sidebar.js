import React from 'react'
import Home from '../pages/home';
const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="menu">
          <ul >
            <li>
              <a href="#home" target="_blank"><button onClick={Home}>
                HOME</button></a>
            </li>
            <li>
              <a href="#about"><button>ABOUT</button></a>
            </li>
            <li>
              <a href="#work"><button>PORTFOLIO</button></a>
            </li>
            <li>
              <a href="#clients"><button>CONTACT</button></a>
            </li>
            <li>
              <a href="#upload"><button>UPLOAD</button></a>
              <div id='upload'></div>
            </li>
            <li>
              <a href="#download"><button>DOWNLOAD</button></a>
              <div id='download'></div>
            </li>
          </ul>
      </div>
    </div>
  )
};

export default Sidebar;