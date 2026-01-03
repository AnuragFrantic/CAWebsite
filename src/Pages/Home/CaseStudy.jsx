//import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrowblack from '../../assets/images/arrow-top-black.svg'
// import slider1 from '../../assets/images/s-slide-1.png'
// import slider2 from '../../assets/images/s-slide-2.png'
// import slider3 from '../../assets/images/s-slide-3.png'
// import slider4 from '../../assets/images/s-slide-4.png'
// import case1 from '../../assets/images/case-study-1.webp'
// import case2 from '../../assets/images/case-study-2.webp'
// import case3 from '../../assets/images/case-study-3.webp'
// import case4 from '../../assets/images/case-study-4.webp'
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../Api/BaseUrl";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const CaseStudy = () => {
    const sliderRef = useRef(null);

    const [data, setdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BaseUrl}blogs`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])
    // const slideData = [
    //     { id: 1, image: case1, icon: slider1, title: "Criminal Defense", link: "case-detail.html" },
    //     { id: 2, image: case2, icon: slider2, title: "Contract Review", link: "case-detail.html" },
    //     { id: 3, image: case3, icon: slider3, title: "Immigration Issues", link: "case-detail.html" },
    //     { id: 4, image: case4, icon: slider4, title: "Business Law", link: "case-detail.html" },
    //     { id: 5, image: case1, icon: slider1, title: "Criminal Defense", link: "case-detail.html" },
    //     { id: 6, image: case2, icon: slider2, title: "Contract Review", link: "case-detail.html" }
    // ];
    // const slidesToShow = data.length > 2 ? 4 : 2;
    var settings = {
        arrows: false,
        dots: false,
        infinite: true, // This makes the slider scroll infinitely
        autoplay: true,
        speed: 500, // Adjust this speed as per your requirement
        autoplaySpeed: 2000, // Time between slides
        cssEase: "linear", // Smooth transition between slides
        slidesToShow: data.length > 3 ? 3 : data.length,  // Show 3 slides in a row
        slidesToScroll: 1, // Move 1 slide at a time
        focusOnSelect: true, // Optional: allows selecting a slide by clicking on it
        responsive: [
            {
                breakpoint: 1024, // For tablets and medium screens
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // For mobile screens in landscape
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 550, // For small mobile screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };


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
            <section className="case-study-area-2 pb-150 pt-150 casestudy px-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" >
                            <h2 className="subtitle roboto">LEGAL INSIGHTS UNLOCKED: YOUR GUIDE  <span className="bluecolor d-block pt-1"> TO NAVIGATING LAW</span></h2>
                            <p className="roboto">Explore Our Blogs & Articles for In-Depth Analysis, and Timely Updates on the latest & contemporary Legal Developments.</p>
                        </div>

                    </div>
                </div>
                {/* Slider */}

                <div className="case-study-slider pt-5" onMouseEnter={handlePause}
                    onMouseLeave={handlePlay}>

                    <Slider {...settings} ref={sliderRef}>
                        {data.slice(0, 5).map((itm, index) => (
                            <>
                                <div>
                                    <div
                                        className="case-study-item-2"

                                    >
                                        <div className="case-study-img-2">
                                            <img src={`${BaseUrl}${itm.image}`} alt="Case Study" className="img-fluid"
                                                style={{
                                                    height:
                                                        index % 3 === 0 ? "500px" : // Height for indexes divisible by 3
                                                            index % 3 === 1 ? "450px" :  // Height for indexes with remainder 1
                                                                "350px",  // Height for indexes with remainder 2

                                                }} />
                                            <div className="case-study-content-2">
                                                {/* <img src={slider1} alt="Slide Icon" /> */}
                                                <h6>
                                                    <a className="case-study-title-2 roboto" href='#' style={{
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2, // Corrected property name
                                                        WebkitBoxOrient: 'vertical', // Corrected property name
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        margin: 0
                                                    }}
                                                    >
                                                        {itm.title}
                                                    </a>
                                                </h6>
                                            </div>
                                            <Link to={`/blog-details/${itm.url}`} className="case-study-icon-2">
                                                <img src={arrowblack} alt="Arrow Icon" />
                                            </Link>
                                        </div>
                                    </div>
                                </div >
                            </>
                        ))}

                        {/* <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case2} />
                                    <div className="case-study-content-2">
                                        <img src={slider2} />
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Contract Review</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>

                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case3} />
                                    <div className="case-study-content-2">
                                        <img src={slider3} />
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Immigration Issues</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case4} />
                                    <div className="case-study-content-2">
                                        <img src={slider4} />
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Business law</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="case-study-item-2">
                                <div className="case-study-img-2">
                                    <img src={case3} />
                                    <div className="case-study-content-2">
                                        <img src={slider1} />
                                        <h3><a className="case-study-title-2 roboto" href="case-detail.html">Immigration Issues</a></h3>
                                    </div>
                                    <a href="case-detail.html" className="case-study-icon-2">
                                        <img src={arrowblack} />
                                    </a>
                                </div>
                            </div>
                        </div> */}

                    </Slider>
                </div>

                <div className="">
                    <Link to='/blogs' className="d-flex gap-2 mt-2 align-items-center">
                        {/* <span>View all</span> */}
                        <div className='servicestextcircle '>
                            <ArrowRightOutlined />
                        </div>
                    </Link>
                </div>



            </section >
        </>
    )
}

export default CaseStudy