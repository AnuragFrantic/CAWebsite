//import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpOutlined, LinkedinFilled } from '@ant-design/icons'
import whatsapp from '../assets/images/whatsapp.png'
import { useEffect, useState } from 'react';
import logo from "../assets/images/real_logo.png"


const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Enables smooth scrolling
        });
    };
    const handleScroll = () => {
        if (window.scrollY > 100) { // Show button when scrolled 100px or more
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>

            <footer className="footer-area pt-140">
                <div className="container">
                    <div className="footer-content">
                        <div className="row justify-content-between">
                            {/* Column 1: Logo and Disclaimer (Larger Column) */}
                            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 mb-4">
                                <div className="footer-left pleft">
                                    {/* <a href="/" className="footer-logo mb-30 d-block roboto text-start">
                                        KUMAR DEEPRAJ
                                    </a> */}
                                    <div className="d-flex justify-content-start mb-3">
                                        <a className="navbar-brand" href="#">
                                            <img src={logo} className="" alt="" />
                                        </a>
                                    </div>
                                    <div className="footer-text mb-30 text-justify">
                                        <p className="footer-content roboto">
                                            Disclaimer: Under the rules of the Bar Council of India, an advocate is prohibited from soliciting work or advertising through communication in public domain. This website is meant solely for the purposes of providing information and not for the purpose of advertising. </p>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Our Office */}
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 mb-4 pleft2">
                                <h3 className="footer-title roboto">Quick Links</h3>
                                <ul className='text-start '>
                                    <li className='pb-2'> <Link to={'/pro-bono'} className='footertext roboto'>Pro Bono</Link></li>
                                    <li className='pb-2'> <Link to={'/expertise-page'} className='footertext roboto '>Expertise</Link></li>
                                    <li className='pb-2'> <Link to={'/career'} className='footertext roboto'>Career</Link></li>
                                </ul>
                            </div>

                            {/* Column 3: Contact Us */}
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 mb-4 text-start">
                                <h3 className="footer-title roboto">Contact Us</h3>
                                <div className="d-flex ">
                                    {/* <div className="icon">
                                        <img src={mail} alt='image' className='img-fluid footerimg' />
                                    </div> */}
                                    <div className="text">
                                        <p className='roboto'>
                                            <a href="https://maps.app.goo.gl/gg25uQkTumGgBpH97"
                                                target="_blank"
                                                rel="noopener noreferrer" className='footerlocation'>

                                                A/26, L.G.F., Jangpura Extension, New Delhi – <br /> 110 014
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                {/* <Link to={'mailto:mail@advkumardeepraj.com'} className='footertext roboto'>mail@advkumardeepraj.com</Link> */}
                            </div>

                            {/* Column 4: Social Media */}
                            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 mb-4">
                                <h3 className="footer-title roboto">Social Media</h3>
                                <div className="w-full h-full flex gap-2 socialMedia footertext">
                                    <a href='https://www.linkedin.com/company/chambers-of-kumar-deepraj/' target='_blank' className='w-6 h-6 leading-6 text-center roboto'>
                                        <LinkedinFilled />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <a href='https://www.franticpro.com/' target='_blank'>
                            <div className="flex justify-center pt-4 footer-two-border footertext roboto text-center">
                                &copy; Design & Developed by Frantic Infotech Pvt. Ltd.
                            </div>
                        </a>
                        <a
                            href="https://wa.me/+918447248119"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="position-fixed bottom-0  mb-4 me-4 text-white  rounded-circle bg-white shadow footerwhatsapp"
                            aria-label="Contact us on WhatsApp"
                        >
                            <img loading="lazy" src={whatsapp} className='img-fluid' alt="" style={{ zIndex: "9999999999999", width: "60px" }} />
                        </a>
                        {/* Scroll to Top Button */}
                        {showScrollButton && (
                            <div
                                onClick={scrollToTop}
                                className="position-fixed bottom-0 end-0 mb-4 me-4 text-white footerupbutton shadow">
                                <ArrowUpOutlined />
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer