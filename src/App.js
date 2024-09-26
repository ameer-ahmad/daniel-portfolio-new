import { useState, useEffect } from 'react'

import './App.scss';
import data from './data';
import loadingGif from './images/running-loader.gif'

function App() {
  const [currentProject, setCurrentProject] = useState(0)
  const [showGif, setShowGif] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [aboutIsOpen, setAboutIsOpen] = useState(false);
  const [indexIsOpen, setIndexIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowGif(true), 500); // Delay for GIF to fade in
    setTimeout(() => setShowText(true), 4000); // Delay for Text to fade in after GIF
    setTimeout(() => setShowContent(true), 7000); // Delay for content to fade in after Text
  }, []);

  useEffect(() => {
    document.getElementById('projects').addEventListener('wheel', debouncedOnWheel);
  return () => {
    document.getElementById('projects').removeEventListener('wheel', debouncedOnWheel);
  };
  }, [currentProject, isScrolling])

  const changeProject = (i) => {
    const project = (typeof data[currentProject].video === 'undefined' ? document.getElementById('image') : document.getElementById('video'))
    const mobileProject = (typeof data[currentProject].video === 'undefined' ? document.getElementById('mobileImage') : document.getElementById('video'))
    project.style.opacity = 0;
    mobileProject.style.opacity = 0;

    setTimeout(() => {
      setCurrentProject(i)
      project.style.opacity = 1;
      mobileProject.style.opacity = 1;
    }, 500)
  }

  const nextProject = () => {
    if (currentProject === data.length - 1) {
      changeProject(0)
    } else {
      changeProject(currentProject + 1)
    }
  }

  const prevProject = () => {
    if (currentProject === 0) {
      changeProject(data.length - 1)
    } else {
      changeProject( currentProject - 1)
    }
  }

  const rateLimit = (func, time) => {
    var callback = func,
                waiting = false,
                context = this;
        var rtn = function(){
            if(waiting) return;
            waiting = true;
            var args = arguments;
            setTimeout(function(){
                waiting = false;
                callback.apply(context, args);
            }, time);
        };
        return rtn;
  }

  const handleScroll = async (e) => {

    // if (!isScrolling) {
    //   setIsScrolling(true);
      
      if (e.deltaY > 40 ) {
        if (currentProject === data.length - 1) {
          changeProject(0)
          console.log("changing")
        } else {
          changeProject(currentProject + 1)
          console.log("changing")
        }
      } else if (e.deltaY < -40) {
        if (currentProject === 0) {
          changeProject(data.length - 1)
          console.log("changing")
        } else {
          changeProject(currentProject - 1)
          console.log("changing")
        }
      }

    //   setTimeout(() => {
    //     setIsScrolling(false);
    //   }, 300)
    // }
  }

  const debouncedOnWheel = rateLimit(handleScroll, 400);

  return (
    <div className='container'>
      <div className={`loading-screen ${showContent ? 'fade-out' : ''}`}>
        <div className={`gif-container ${showGif ? 'fade-in' : ''} ${showText ? 'fade-out' : ''}`}>
          <img src={loadingGif} alt="Loading GIF" />
        </div>
        <div className={`text-container ${showText ? 'fade-in' : ''}`}>
          <h1>Daniel Shui</h1>
        </div>
      </div>
      <div className="content">
        <div className="drawer">
          <div className="about">
            <h2>Daniel Shui</h2>
            <br />
            <p>Multidisciplinary graphic designer experienced in editorial, branding, UI/UX, typography, & more. Has worked on projects for clients both big and small, including the Chicago Bulls, Crypto.com Arena, Houston Texans, Kansas City Royals, FC Barcelona, & many more.</p>
            <br />
            <p>Currently based in the city of Toronto and is always interested in collaborations with others around the world. Please get in touch for any questions/project inquiries.</p>
            <br />
            <ul>
              <li className='school'>2024, Bachelor of Design with distinction, Ontario College of Arts and Design University</li>
            </ul>
            <br />
            <br />
            <h2>
              Additional
            </h2>
            <br />
            <p>Special thanks to <a href='https://ameerahmad.com' target='_blank' rel='noreferrer'>Ameer Ahmad</a>, for programming this website.
                Designed by Daniel Shui. Last updated on 08/12/24.
            </p>
            <br />
            <ul>
              <li><a href='mailto:danielshui.des@gmail.com' target='_blank' rel='noreferrer'>Email</a></li>
              <li><a href='https://www.are.na/daniel-shui-40niceg9sse/channels' target='_blank' rel='noreferrer'>Are.na</a></li>
              <li><a href='https://www.instagram.com/daniel.shui/' target='_blank' rel='noreferrer'>Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="drawer">
          <div className="index">
            <h2>Index</h2>
            <br />
            {
              data.map((project, i) => {
                return (
                  <div key={project.id}>
                    <div className={`project ${currentProject === i ? 'active' : ''}`}  onClick={() => changeProject(project.id)}>
                      <h2>{project.id < 9 ? `0${project.id + 1}` : project.id + 1}</h2>
                      <p>{project.title} — <span>{project.desc}</span></p>
                    </div>
                    {i === data.length - 1 ? "" : (<br />)}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="mobile">
            <div className={`mobile-drawer ${aboutIsOpen ? 'open' : ''} ${data[currentProject].bg === 'black' ? 'black' : ''}`}>
              <span className="toggle">
                {!aboutIsOpen ? (
                  <span className='button' onClick={() => {setAboutIsOpen(true); setIndexIsOpen(false)} }>About</span>
                ) : (
                  <span className='button' onClick={() => setAboutIsOpen(false) }>Close</span>
                )}
              </span>
          <div className="about">
            <h2>Daniel Shui</h2>
            <br />
            <p>Multidisciplinary graphic designer experienced in editorial, branding, UI/UX, typography, & more. Has worked on projects for clients both big and small, including the Chicago Bulls, Crypto.com Arena, Houston Texans, Kansas City Royals, FC Barcelona, & many more.</p>
            <br />
            <p>Currently based in the city of Toronto and is always interested in collaborations with others around the world. Please get in touch for any questions/project inquiries.</p>
            <br />
            <ul>
              <li className='school'>2024, Bachelor of Design with distinction, Ontario College of Arts and Design University</li>
            </ul>
            <br />
            <br />
            <h2>
              Additional
            </h2>
            <br />
            <p>Special thanks to <a href='https://ameerahmad.com' target='_blank' rel='noreferrer'>Ameer Ahmad</a>, for programming this website.
                Designed by Daniel Shui. Last updated on 08/12/24.
            </p>
            <br />
            <ul>
              <li><a href='mailto:danielshui.des@gmail.com' target='_blank' rel='noreferrer'>Email</a></li>
              <li><a href='https://www.are.na/daniel-shui-40niceg9sse/channels' target='_blank' rel='noreferrer'>Are.na</a></li>
              <li><a href='https://www.instagram.com/daniel.shui/' target='_blank' rel='noreferrer'>Instagram</a></li>
            </ul>
          </div>
        </div>
        {/* <div className={`mobile-drawer ${indexIsOpen ? 'open' : ''}`}>
          <span className="toggle">
                {!indexIsOpen ? (
                  <svg onClick={() => {setIndexIsOpen(true); setAboutIsOpen(false)} } xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M12.5001 12.5H1.5M12.5001 12.5V1.5M12.5001 12.5V23.5M12.5001 12.5H23.5" stroke="black" strokeLinecap="square" strokeLinejoin="bevel"/>
                  </svg>
                ) : (
                  <svg onClick={() => setIndexIsOpen(false) } xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path d="M12.5 12.5L4.00003 22M12.5 12.5L4.00003 3M12.5 12.5L21 22M12.5 12.5L21 3" stroke="black" strokeLinecap="square" strokeLinejoin="bevel"/>
                  </svg>
                )}
              </span>
            <div className="index">
            <h2>Index</h2>
            <br />
            {
              data.map((project, i) => {
                return (
                  <div key={project.id}>
                    <div className={`project ${currentProject === i ? 'active' : ''}`}  onClick={() => {changeProject(project.id); setIndexIsOpen(false)}}>
                      <h2>{project.id < 9 ? `0${project.id + 1}` : project.id + 1}</h2>
                      <p>{project.title} — <span>{project.desc}</span></p>
                    </div>
                    {i === data.length - 1 ? "" : (<br />)}
                  </div>
                )
              })
            }
          </div>
        </div> */}
        </div>
        
        <div id='projects' className={`img-container ${data[currentProject].bg === 'black' ? 'black' : 'white'}`}>
            {
              data[currentProject].image ? (
                <>
                  <img id='image' src={data[currentProject].image} alt='' />
                  <img id='mobileImage' src={data[currentProject].mobile} alt='' />
                  
                </>
              ) : (
                <video id='video' width="100%" height="65%" autoPlay loop muted webkit-playsinline playsinline>
                  <source src={data[currentProject].video} type='video/mp4' />
                </video>
              )
            }
            <div className='controls'>
              <div className='left' onClick={prevProject}></div>
              <div className='right' onClick={nextProject}></div>
            </div>
            <span className={`number ${data[currentProject].bg === 'black' ? 'black' : 'white'}`}>
              {data[currentProject].id < 9 ? `0${data[currentProject].id + 1}` : data[currentProject].id + 1}/{data.length}
            </span>
        </div>

        <div className={`footer ${data[currentProject].bg === 'black' ? 'black' : 'white'}`}>
          <span className={`number ${data[currentProject].bg === 'black' ? 'black' : 'white'}`}>
              {data[currentProject].id < 9 ? `0${data[currentProject].id + 1}` : data[currentProject].id + 1}/{data.length}
            </span>
            <p>{data[currentProject].title} — <span>{data[currentProject].desc}</span></p>
        </div>
      </div>
    </div>
    
  );
}

export default App;
