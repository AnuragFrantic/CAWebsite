//import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../../Api/BaseUrl'
import agreement from '../../assets/images/agreement.png'

const Services = () => {
    const sliderRef = useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        slidesToShow: 2,  // Show 2 slides in a row
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024, // For tablets and medium screens
                settings: {
                    slidesToShow: 1, // Show 2 slides at a time on tablet
                }
            },
            {
                breakpoint: 768, // For mobile screens in landscape mode
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on mobile landscape
                }
            },
            {
                breakpoint: 480, // For small mobile screens
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on small devices
                }
            }
        ]
    };
    const [data, setdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BaseUrl}legal-update`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])


    const handlePause = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPause();
            // Kill transition immediately
            const track = sliderRef.current.innerSlider.list.querySelector(".slick-track");
            if (track) {
                track.style.transition = "none";
            }
        }
    };

    const handlePlay = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPlay();
            // Restore transition
            const track = sliderRef.current.innerSlider.list.querySelector(".slick-track");
            if (track) {
                track.style.transition = "";
            }
        }
    };
    return (
        <>
            <section className="service-area-3 pt-150 pb-150 position-relative aboutus px-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="service-left-4 text-start">
                                <h2 className="subtitle roboto py-3  text-white" >Insightful Legal Updates  </h2>
                                <h6 className="bluecolor roboto text-white">Key Judgments from India’s Highest Courts</h6>
                                <div >
                                    <p className="roboto py-3 text-white">Discover the pulse of justice with our engaging summaries of the latest judgments from the High Courts across the Country and Supreme Court of India. We distil complex rulings into clear insights, highlighting their significance and impact across various legal domains. Stay informed and empowered as you navigate the ever-evolving landscape of Indian law.</p>
                                    <Link to='/insight-hub'>
                                        <div className='servicestextcircle mt-2'>
                                            <ArrowRightOutlined />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-12 fade-slide bottom" data-delay="0.4">
                            <div className="service-right-4" onMouseEnter={handlePause}
                                onMouseLeave={handlePlay}>
                                <Slider {...settings} ref={sliderRef}>
                                    {
                                        data.slice(0, 5).map((itm) => (
                                            <>
                                                <div>
                                                    <Link to={`/legal-update/${itm.url}`}>
                                                        <div className="service-item-3">
                                                            <img className="service-img-3" src={`${BaseUrl}${itm.image}`} alt="Crimanal" />
                                                            <div className="service-text">
                                                                <div className="service-iconwrap-3">
                                                                    <img src={agreement} alt="Criminal" style={{ height: "50px" }} />
                                                                </div>
                                                                <h3 className='text-start roboto'><a className="service-title-3" href="#">{itm.title}</a></h3>

                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services