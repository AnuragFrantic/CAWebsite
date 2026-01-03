//import React from 'react'
// import testimonial from '../../assets/images/testimonialimg.png'
import clip from '../../assets/images/clip.png'
//import clip from '../../assets/images/binder-clip.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BaseUrl } from '../../Api/BaseUrl';

const Testimonial = () => {
    const [data, setdata] = useState([]);
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,  // Show 3 slides in a row
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,  // Adjust for medium devices
                settings: {
                    slidesToShow: 2,  // Show 2 slides in a row on medium screens
                }
            },
            {
                breakpoint: 768,  // Adjust for small devices
                settings: {
                    slidesToShow: 1,  // Show 1 slide in a row on small screens
                }
            }
        ]
    };
    const handleget = async () => {
        await axios.get(`${BaseUrl}testimonial`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])
    return (
        <>
            <section className="testimonial  py-5">
                <div className="container">
                    <div className="service-topwrap-3 text-center">

                        <h2 className="subtitle roboto">Testimonial</h2>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Slider {...settings}>
                                {data.map((item, index) => (
                                    <div key={index} className="px-4">
                                        <div className="col-md-4 w-100 h-100 d-flex"> {/* Parent container with h-100 */}
                                            <div className="w-100 h-100 position-relative d-flex flex-column"> {/* Inner container with h-100 */}
                                                <div className="clipimage">
                                                    <img src={clip} alt="testimonial clip" />
                                                </div>
                                                <div className="w-100 h-100 testimonialbox px-4 py-4 shadow"> {/* Testimonial box with h-100 */}
                                                    <div className="circleimg pb-3">
                                                        <img src={`${BaseUrl}${item.image}`} alt="testimonial person" />
                                                    </div>

                                                    <p className="roboto testimonialpara">
                                                        {item.description}
                                                    </p>
                                                    <h5 className="roboto mt-4">{item.title}</h5>
                                                    <p className="roboto">{item.post}</p>
                                                </div>
                                                {/* <div className="circleimg">
                                                    <img src={`${BaseUrl}${item.image}`} alt="testimonial person" />
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial