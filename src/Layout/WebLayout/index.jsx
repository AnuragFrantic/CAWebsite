//import React from 'react'

import { Link, Outlet, useLocation } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import Banner from "../../Pages/Home/Banner";
import React, { useEffect } from "react";
import logo from "../../assets/images/real_logo.png"


const WebLayout = () => {
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const home = location.pathname == "/"

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Update the scroll position when scrolling
    };

    // Add the event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
  return (
    <>
      <Header />
      <div className=" fixedSidebar vh-100 d-flex align-items-center bg-transparent roboto">
        {home ? (
          <div className={`w-100 homesidebar ${scrollPosition > 500 ? 'invertbg' : ''}`}>
            {/* <a href="/">
              <h4 className={home ? "" : "text-dark"}>
                ADVOCATE
                <span className="d-block">KUMAR DEEPRAJ</span>
              </h4>
             
            </a> */}
            <a className="navbar-brand" href="#">
              <img src={logo} className="" alt="" />
            </a>
            <ul className="roboto">
              <li>
                <Link className={`${scrollPosition > 459 ? 'text-dark' : 'text-white'}`} to={'/'}>
                  HOME
                </Link>
              </li>
              <li>
                <Link className={`${scrollPosition > 324 ? 'text-dark' : 'text-white'}`} to={'/about-us'}>
                  OUR STORY
                </Link>
              </li>
              <li>
                <Link className={`${scrollPosition > 236 ? 'text-dark' : 'text-white'}`} to={'/blogs'}>
                  KNOWLEDGE <span className="d-block">VAULT</span>
                </Link>
              </li>
              <li>
                <Link className={`${scrollPosition > 150 ? 'text-dark' : 'text-white'}`} to={'/insight-hub'}>
                  INSIGHT HUB
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="text-dark othersidebar w-100"> {/* Show alternative content for non-home pages */}
            {/* <a href="/">
              <h4 className="text-dark">ADVOCATE
                <span className="d-block pt-2">KUMAR DEEPRAJ</span></h4>
            </a> */}
            <a className="navbar-brand" href="#">
              <img src={logo} className="" alt="" />
            </a>
            <ul>
              <li>
                <Link to={'/'} className="text-dark">HOME</Link>
              </li>
              <li>
                <Link to={'/about-us'} className="text-dark">OUR STORY</Link>
              </li>
              <li>
                <Link to={'/blogs'} className="text-dark">KNOWLEDGE <span className="d-block">VAULT</span> </Link>
              </li>
              <li>
                <Link to={'/insight-hub'} className="text-dark"> INSIGHT HUB</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <main>
        {
          location.pathname == "/" && (
            <>
              <Banner />
            </>
          )
        }
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-2 sidebarcolumn p-0">
              <div className="w-100 h-100 sidebarfixedbg"></div>
            </div>
            <div className="col-lg-10 col-12 p-0 sidebarsecondcol">
              {<Outlet />}
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default WebLayout