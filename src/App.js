import { useState } from 'react'

import './App.scss';
import data from './data';

function App() {
  const [currentProject, setCurrentProject] = useState(0)
  const [aboutIsOpen, setAboutIsOpen] = useState(false)
  const [mobileIsExpanded, setMobileIsExpanded] = useState(false)

  const nextProject = () => {
    if (mobileIsExpanded) {
      setTimeout( () => {
      const imageHeight = (document.getElementById('image') ? document.getElementById('image').width : 0)
      const mobileHeight = parseInt(getComputedStyle(document.getElementById('mobile')).height.substring(0,3))
      const imgContainer = document.getElementById('img-container')
      const newHeight =  imageHeight + 30 + mobileHeight + 'px'
      imgContainer.style.height = newHeight
    }, 100)
    }
    if (currentProject === data.length - 1) {
      setCurrentProject(0)
    } else {
      setCurrentProject( prev => prev + 1)
    }
  }

  const prevProject = () => {
    if (mobileIsExpanded) {
      setTimeout( () => {
      const imageHeight = (document.getElementById('image') ? document.getElementById('image').width : 0)
      const mobileHeight = parseInt(getComputedStyle(document.getElementById('mobile')).height.substring(0,3))
      const imgContainer = document.getElementById('img-container')
      const newHeight =  imageHeight + 30 + mobileHeight + 'px'
      imgContainer.style.height = newHeight
    }, 100)
    }
    if (currentProject === 0) {
      setCurrentProject(data.length - 1)
    } else {
      setCurrentProject( prev => prev - 1)
    }
  }

  const closeAbout = (e) => {
    if (e.target.classList.contains('container')) {
      setAboutIsOpen(false)
    }
  }

  const expandMobile = () => {
    setMobileIsExpanded(true)
    setTimeout( () => {
      const imageHeight = (document.getElementById('image') ? document.getElementById('image').width : 0)
      const mobileHeight = parseInt(getComputedStyle(document.getElementById('mobile')).height.substring(0,3))
      const imgContainer = document.getElementById('img-container')
      const newHeight =  imageHeight + 30 + mobileHeight + 'px'
      imgContainer.style.height = newHeight
    }, 100)
    
  }

  const compressMobile = () => {
    setMobileIsExpanded(false)
    const imgContainer = document.getElementById('img-container')
    imgContainer.style.height = 'auto'
  }

  return (
    <div onClick={closeAbout} className={`container ${aboutIsOpen ? 'about-open' : ''} ${data[currentProject].bg === 'white' ? 'white' : 'black'}`}>
<div className="content">

      <div className='header'>
        <div className='left'>
          <span className='info'>
            Daniel Shui<br />
            creative direction & design
          </span>
          <span className='about' onClick={() => setAboutIsOpen(true)}>
            About
          </span>
        </div>
        <div className='right'>
          <span className='title'>{data[currentProject].title}</span>
          <ul>
            {data[currentProject].desc.map((line, i) => {
              return (
                <li key={i}>{line}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className='touch'>
        <div className='prev' onClick={prevProject}></div>
        <div className='next' onClick={nextProject}></div>
      </div>
      <div className={`about-drawer ${aboutIsOpen ? 'open' : ''}`}>
            <div className="top">
              <span className='info'>
                Daniel Shui<br />
                creative direction & design
              </span>
              <span className='close' onClick={() => setAboutIsOpen(false)}>
                Close
              </span>
            </div>
            <p>Multidisciplinary graphic designer experienced in editorial, branding, UI/UX, typography, & more,
              with a strong interest in materiality. Has worked on projects for the Chicago Bulls, Crypto.com Arena,
              Kansas City Royals, FC Barcelona, & many more.
            </p>
            <br />
            <p>
              Currently based in the city of Toronto and is always interested in collaborations with others around the
              world. Please get in touch for any questions/project inquiries.
            </p>
            <br />
            <ul>
              <li>2024 / Bachelor of Design, Ontario College of Arts and Design University</li>
            </ul>
            <br />
            <p>Site:</p>
            <br />
            <p>Special thanks to <a href='https://ameerahmad.com' target='_blank' rel='noreferrer'>Ameer Ahmad</a>, for
            programming this website.<br />Designed by Daniel Shui. Last updated on 08/12/24.
            </p>
            <br />
            <p>Contact:</p>
            <br />
            <ul>
              <li>Email</li>
              <li>Are.na</li>
              <li>Instagram</li>
              <li>Resume</li>
            </ul>
      </div>
      <div className='footer'>
        Image {currentProject <= 8 ? `0${currentProject+1}` : currentProject+1}/{data.length}
      </div>
      <div id='img-container' className={`img-container ${mobileIsExpanded ? 'mobile-expanded' : ''}`}>
        {
          data[currentProject].image ? (
            <img id='image' src={data[currentProject].image} alt='' />
          ) : (
            <video width="100%" height="80%" autoPlay>
              <source src={data[currentProject].video} type='video/mp4' />
            </video>
          )
        }
        <div className='mobile' id='mobile'>
        <div className='controls'>
          <svg onClick={prevProject} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="#000">
            <path d="M1 12.5L10.8571 23M1 12.5L10.8571 2M1 12.5L24 12.5" stroke="black" strokeLinecap="square" strokeLinejoin="bevel"/>
          </svg>
          {
            mobileIsExpanded ? (
              <svg onClick={compressMobile} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <g style={{mixBlendMode:"difference"}}>
                  <path d="M1.78564 23.2143L8.37905 16.6209M8.37905 16.6209H2.60982M8.37905 16.6209V22.3902M23.2142 23.2143L16.6208 16.6209M16.6208 16.6209H22.39M16.6208 16.6209V22.3902M1.78564 1.78577L8.37905 8.37917M8.37905 8.37917H2.60982M8.37905 8.37917V2.60994M23.2142 1.78577L16.6208 8.37917M16.6208 8.37917H22.39M16.6208 8.37917V2.60994" stroke="black" strokeLinecap="square" strokeLinejoin="bevel"/>
                </g>
              </svg>
            ) : (
<svg onClick={expandMobile} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="#000">
            <g style={{mixBlendMode:"difference"}}>
              <path d="M14.9725 10.0275L23.2142 1.78571M23.2142 1.78571H16.6208M23.2142 1.78571V8.37911M10.0274 10.0275L1.78564 1.78571M1.78564 1.78571H8.37905M1.78564 1.78571V8.37911M14.9725 14.9725L23.2142 23.2143M23.2142 23.2143H16.6208M23.2142 23.2143V16.6209M10.0274 14.9725L1.78564 23.2143M1.78564 23.2143H8.37905M1.78564 23.2143V16.6209" stroke="black" strokeLinecap="square" strokeLinejoin="bevel"/>
            </g>
          </svg>
            )
          }
          
          <svg onClick={nextProject} xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="#000">
            <path d="M24 12.5L14.1429 23M24 12.5L14.1429 2M24 12.5L0.999999 12.5" stroke="black" strokeLinecap="square" strokeLinejoin="bevel"/>
          </svg>
        </div>
        <div className="desc">
          <span>{data[currentProject].title}</span>
          <ul>
            {data[currentProject].desc.map((line, i) => {
              return (
                <li key={i}>{line}</li>
              )
            })}
          </ul>
        </div>
      </div>
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
