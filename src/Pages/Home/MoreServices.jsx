import React from 'react'
// import transparentcomm from '../../assets/images/transparentcomm.png'
// import commpassionate from '../../assets/images/Compassionate.png'
// import problem from '../../assets/images/problem.png'
// import clientcentric from '../../assets/images/clientcentric.png'
// import legal from '../../assets/images/legal.png'
// import cultural from '../../assets/images/cultural.png'
// import collabrativeapproach from '../../assets/images/collabrativeapproach.png'
// import innovativelegal from '../../assets/images/innovativelegal.png'
// import relationship from '../../assets/images/relationships.png'
// import accessability from '../../assets/images/acessability.png'
// import technology from '../../assets/images/technology.png'
// import advocacy from '../../assets/images/advocacy.png'
// import postcase from '../../assets/images/postcase.png'
// import resilience from '../../assets/images/tencity.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import axios from 'axios'
import { BaseUrl } from '../../Api/BaseUrl'



const MoreServices = () => {
    const [autoplay, setAutoPlay] = React.useState(true);
    let sliderRef = useRef(null);
    const next = () => {
        setAutoPlay(false);
        sliderRef.slickNext();
    };
    const previous = () => {
        setAutoPlay(false);
        sliderRef.slickPrev();
    };
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: autoplay,
        speed: autoplay ? 4000 : 2000,
        autoplaySpeed: autoplay ? 2000 : 2000,
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
    // const services = [
    //     {
    //         imgSrc: transparentcomm,
    //         title: "Transparent Communication",
    //         description: "Committed to keeping you informed, our advocate ensures clear and consistent communication, making complex legal concepts understandable and fostering trust throughout your case.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: commpassionate,
    //         title: "Compassionate Support",
    //         description: "Recognizing the emotional challenges of legal matters, our advocate provides empathetic guidance, offering support that goes beyond legal advice to address your concerns holistically.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: problem,
    //         title: "Strategic Problem Solver",
    //         description: "We excel at identifying creative solutions to complex legal issues, combining analytical thinking with practical insights to navigate even the toughest challenges.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: clientcentric,
    //         title: "Client-Centric Approach",
    //         description: "We prioritizes your interests, taking the time to understand your unique situation and providing personalized legal strategies that empower you throughout the process.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: legal,
    //         title: "Holistic Legal Strategies",
    //         description: "We adopt a holistic approach, integrating various legal perspectives to develop strategies that not only address immediate concerns but also anticipate future implications.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: cultural,
    //         title: "Culturally Sensitive Practice",
    //         description: "Understanding the diversity of clients, our advocate approaches each case with cultural sensitivity, ensuring that solutions respect and reflect your values and traditions.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: collabrativeapproach,
    //         title: "Collaborative Approach",
    //         description: "Believing in the power of teamwork, our advocate collaborates with other professionals, including financial experts and mediators, to provide well-rounded legal solutions.",
    //     },
    //     {
    //         imgSrc: innovativelegal,
    //         title: "Innovative Legal Solutions",
    //         description: "We leverages innovative thinking to craft unique legal solutions, employing creative tactics that set you apart in negotiations and court proceedings.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: relationship,
    //         title: "Focus on Long-Term Relationships",
    //         description: "Prioritizing long-term relationships over transactional engagements, our advocate is dedicated to being your trusted legal partner, supporting you through various life stages.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: accessability,
    //         title: "Accessibility and Availability",
    //         description: "Committed to your needs, our advocate ensures accessibility and responsiveness, making it easy for you to reach out with questions or concerns at any time.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: technology,
    //         title: "Technology-Driven Solutions",
    //         description: "Embracing technology, we utilizes advanced legal tools and resources to streamline processes, enhance communication, and improve case management efficiency.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: advocacy,
    //         title: "Ethical Advocacy",
    //         description: "With a steadfast commitment to ethics, we ensure that all actions are in compliance with legal standards, providing you with peace of mind throughout your legal journey.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: postcase,
    //         title: "Post-Case Support",
    //         description: "Our dedication doesn’t end with case resolution. We provide ongoing support and advice, ensuring you have the resources you need for future legal matters.",
    //         link: "service-detail.html",
    //     },
    //     {
    //         imgSrc: resilience,
    //         title: "Resilience and Tenacity",
    //         description: "Known for resilience, we tackle challenges head-on, demonstrating unwavering commitment and determination to achieve the best possible outcomes for clients.",
    //         link: "service-detail.html",
    //     }
    // ];
    const [data, setdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BaseUrl}apart`).then(resp => {
            console.log(resp.data.data)
            setdata(resp.data.data)
        })
    }
    useEffect(() => {
        handleget();
    }, [])
    return (
        <>
            <section className="service-area-4 moreservices pt-150 pb-150 position-relative px-3">
                <div className="container">
                    <div className="service-topwrap-3 text-center">
                        <span className="title roboto">Ordinary is forgettable; we stand out</span>
                        <h2 className="subtitle roboto">WHAT SETS US APART</h2>
                    </div>
                    <div className="row pt-5 h-100 px-5 moreservicerow">
                        <div className="col-12 h-100">
                            <Slider
                                ref={slider => {
                                    sliderRef = slider;
                                }}
                                {...settings}>
                                {data.map((itm, index) => (
                                    <div key={index}>
                                        <div className="service-item-4 h-100 text-center">
                                            <div className="d-flex justify-content-center">
                                                <img src={`${BaseUrl}${itm.image}`} className="service-img-4" alt="img" />
                                            </div>
                                            <h3 className="roboto text-center">{itm.title}</h3>
                                            <p className="roboto text-center">{itm.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                            <div style={{ textAlign: "center" }}>
                                <button className="button previous" onClick={previous}>
                                    <LeftOutlined />
                                </button>
                                <button className="button next" onClick={next}>
                                    <RightOutlined />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MoreServices