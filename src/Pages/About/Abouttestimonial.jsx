//import React from 'react'
import about1 from '../../assets/images/aboutnew1.webp'
import about2 from '../../assets/images/aboutnew2.webp'
import about3 from '../../assets/images/aboutnew3.webp'
import about4 from '../../assets/images/aboutnew4.webp'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Abouttestimonial = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3, // Show 3 images per slide
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // For medium screens
                settings: {
                    slidesToShow: 2, // Show 2 images on medium screens
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // For small screens
                settings: {
                    slidesToShow: 1, // Show 1 image on small screens
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="abouttestimonial">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12">
                            <div className="about mb-3">
                                <h2 className="roboto text-center">Our Achievements</h2>
                            </div>
                            <Slider {...settings}>
                                <div className="image-container position-relative h-100">
                                    <img src={about1} alt="image" className="aboutimage h-100" />
                                    <div className="text-overlay">
                                        <h3 className='roboto'>Felicitated by HMJ Adarsh Kumar Goel, Judge, Supreme Court of India</h3>
                                        <p className='roboto'>Along with PadmaShree Prof. (Dr.) N.R. Madhava Menon</p>
                                    </div>
                                </div>
                                <div className="image-container position-relative h-100">
                                    <img src={about2} alt="image" className="aboutimage h-100" />
                                    <div className="text-overlay">
                                        <h3 className='roboto'>Honble Mr. Justice Arjan Kumar Sikri, Judge, Supreme Court of India</h3>
                                        <p className='roboto'>Along with PadmaShree Prof. (Dr.) N.R. Madhava Menon</p>
                                    </div>
                                </div>
                                <div className="image-container position-relative h-100">
                                    <img src={about3} alt="image" className="aboutimage h-100" />
                                    <div className="text-overlay">
                                        <h3 className='roboto'>Honble Mr. Justice Arjan Kumar Sikri, Judge, Supreme Court of India</h3>
                                        <p className='roboto'>Along with PadmaShree Prof. (Dr.) N.R. Madhava Menon</p>
                                    </div>
                                </div>
                                <div className="image-container position-relative h-100">
                                    <img src={about4} alt="image" className="aboutimage h-100" />
                                    <div className="text-overlay">
                                        <h3 className='roboto'>Honble Mr. Justice Arjan Kumar Sikri, Judge, Supreme Court of India</h3>
                                        <p className='roboto'>Along with PadmaShree Prof. (Dr.) N.R. Madhava Menon</p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Abouttestimonial