//import React from 'react'

import { useEffect } from "react";
import logo from "../assets/images/real_logo.png"


const ThemeNavbar = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      // Avoid adding the script multiple times
      if (!document.querySelector('#google-translate-script')) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      // Remove any previous instance of the Google Translate element
      if (document.querySelector('#google_translate_element select')) {
        document.querySelector('#google_translate_element').innerHTML = '';
      }

      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);
  return (
    <>
      <section className='header'>
        <nav className="navbar navbar-expand-lg  roboto">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
              <img src={logo} className="" alt="" />
            </a> */}
            {/* <div id="google_translate_element" className="selectbox ps-3 pt-3"></div> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 align-items-center">
                {/* Items visible only between 300px and 998px */}
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link active" aria-current="page" href="/">HOME</a>
                </li>
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link active" aria-current="page" href="/about-us">OUR STORY</a>
                </li>
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link active" aria-current="page" href="/blogs">KNOWLEDGE VAULT</a>
                </li>
                <li className="nav-item d-block d-lg-none">
                  <a className="nav-link active" aria-current="page" href="/insight-hub">INSIGHTHUB</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/pro-bono">PRO BONO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/expertise-page">EXPERTISE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/career">CAREER</a>
                </li>
                <li className="nav-item">
                  <div className="case-study-topitem fade-slide right" data-delay="0.4">
                    <a href="/contact" className="btn-fill gap-2 d-flex align-items-center nav-link active">
                      GET IN TOUCH
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

export default ThemeNavbar