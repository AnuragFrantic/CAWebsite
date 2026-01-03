//import React, { useRef, useState } from 'react'
// import AllBanner from '../../Component/AllBanner'
// import career from '../../assets/images/careernew.png'
import arbitrationright from '../../assets/images/arbitrationright.jpg'
import efficiency from '../../assets/images/efficiency.png'
import Confidentiality from '../../assets/images/Confedentiality.png'
import expertise from '../../assets/images/expertise.png'
import Flexibility from '../../assets/images/flexibility.png'
import claims from '../../assets/images/claims.png'
import finality from '../../assets/images/finality.png'
import Consultation from '../../assets/images/consultation.png'
import Agreements from '../../assets/images/agreement.png'
import Appointment from '../../assets/images/appointment.png'
import Representation from '../../assets/images/representation.png'
import Services from '../../assets/images/services.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { useRef, useState } from 'react'
import commercialarbitration from '../../assets/images/commercialarbitration.png'
import international from '../../assets/images/international.png'
import construction from '../../assets/images/hook.png'
import Seo from '../../Seocomponent/Seo'
// import axios from 'axios'
// import { BaseUrl } from '../../Api/BaseUrl'
// import { useEffect } from 'react'
// // import { useState } from 'react'
// import { useParams } from 'react-router-dom'


const Arbitration = () => {
    // const { url } = useParams()
    const [autoplay, setAutoPlay] = useState(true);
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

    const arr = [
        {
            image: efficiency,
            heading: "Efficiency",
            text: "Arbitration can often be resolved more quickly than traditional court proceedings, reducing the time and costs associated with litigation. In Domestic Arbitration, Section 29A of the Arbitration & Conciliation Act 1996, regulates the timeline of a proceedings, while in international Arbitration, the law recommends (and not mandatory) to dispose off the proceedings within 12 months from the date of completion of pleadings.",
        },
        {
            image: Confidentiality,
            heading: "Confidentiality",
            text: "Unlike court cases, which are public, arbitration proceedings are typically private, protecting sensitive information and business interests.",
        },
        {
            image: expertise,
            heading: "Expertise",
            text: "Parties can choose arbitrators with specific expertise relevant to their dispute, ensuring informed decision-making. In fact, the Arbitrator can also appoint experts, to provide independent expert opinion on the subject issue.",
        },
        {
            image: Flexibility,
            heading: "Flexibility",
            text: "The arbitration process allows parties to customize procedures to fit their needs, from scheduling to the selection of arbitrators.",
        },
        {
            image: claims,
            heading: "Limitless Claims",
            text: " In arbitration proceedings, unlike Civil Suits, a party is not required to pay ad valorem Court fees, and therefore claims have no limit.",
        },
        {
            image: finality,
            heading: "Finality",
            text: "Arbitration awards are generally final and have limited grounds for appeal, providing closure to the parties involved.",
        }
    ];
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle between true and false for each item
        }));
    };
    const [expandedIndex, setExpandedIndex] = useState(null); // To track which item is expanded

    const toggleRead = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index); // Toggle between expanded and collapsed
    };
    const brr = [
        {
            mainhead: "Pre-Arbitration Consultation",
            image: Consultation,
            content: "Assessing the viability of arbitration for your dispute and outlining the potential benefits and risks.",
        },
        {
            mainhead: "Drafting Arbitration Agreements",
            image: Agreements,
            content: "Crafting clear and enforceable arbitration clauses that outline the terms and conditions for resolving future disputes.",
        },
        {
            mainhead: "Appointment of Arbitrator or Arbitral Tribunal",
            image: Appointment,
            content: "In an event, the parties are not able to mutually agree to the constitution of the arbitrators, the concerned party has to be approach the jurisdictional High Court or Supreme Court, as the case may be, for the appointment of the Arbitrator(s).",
        },
        {
            mainhead: "Representation in Arbitration Proceedings",
            image: Representation,
            content: "Providing skilled advocacy throughout the arbitration process, from initial hearings to the final award.",
        },
        {
            mainhead: "Post-Arbitration Services",
            image: Services,
            content: "Assisting with the enforcement of arbitration awards and handling any challenges or appeals as necessary.",
        },
    ]
    // const [data, setdata] = useState([]);
    // const handleget = async () => {
    //     await axios.get(`${BaseUrl}expertise_content/${url} `).then(resp => {
    //         console.log(resp.data.data)
    //         setdata(resp.data.data)
    //     })
    // }
    // useEffect(() => {
    //     handleget();

    // }, [])
    return (
        <>
            {/* <AllBanner title="Arbitration" subtitle="Arbitration" image={career} /> */}
            <Seo title="Arbitration Lawyer in New Delhi, India | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 px-3 arbitration commonbox'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>Arbitration</h2>
                                <p className='pt-3 roboto'>Arbitration is a vital alternative dispute resolution (ADR) method that allows parties to resolve their conflicts outside of the traditional court system. This practice area encompasses a wide range of disputes, including commercial, civil, contractual, labour, tenancy and international issues. Arbitration in India is regulated and governed by the Arbitration and Conciliation Act 1996, which supersedes many procedural Indian laws. The Arbitration and Conciliation Act 1996 is broadly based on the UNCITRAL Model Law of 1985 and was enacted to consolidate, define and amend the law in relation to domestic arbitration, international commercial arbitration and the enforcement of foreign arbitral awards in India. We provide expert guidance and representation throughout the arbitration process, ensuring that our clients’ interests are effectively protected.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center">
                        <div className="col-md-6">
                            <div className="w-100">
                                {/* <p className='pt-5 roboto details-container'>
                                    <div dangerouslySetInnerHTML={{ __html: data?.details }} />
                                </p> */}
                                <h4 className='roboto text-start black pt-3'>What is Arbitration</h4>
                                <p className='pt-3 roboto'>
                                    Arbitration involves the submission of a dispute to one or more arbitrators, who are neutral third parties with expertise in the relevant field. Unlike court litigation, the arbitration process is typically less formal, allowing for more flexibility in procedures and timelines. The arbitrator’s decision, known as an award (commonly known as ‘decree’ in Civil Proceedings), is generally binding and enforceable in a court of law, making it a compelling option for many parties seeking resolution.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="w-100">
                                {/* <img src={`${BaseUrl}${data.image}`} className='h-100 w-100 img-fluid' /> */}
                                <img src={arbitrationright} className='h-100 w-100 img-fluid' />
                            </div>
                        </div>
                        {/* <div className="col-md-12">
                            <div className="w-100">
                                <p className='pt-5 roboto details-container'>
                                    <div dangerouslySetInnerHTML={{ __html: data?.content }} />
                                </p>

                            </div>
                        </div> */}
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h4 className="roboto text-center black">Benefits of Arbitration</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row arbitrationbox commonbox">
                        {arr.map((itm, index) => {
                            // Set a condition to only show "Read More" for long content
                            const isLongText = itm.text.length > 150; // Adjust character limit if needed

                            return (
                                <div className="col-md-4 pt-4" key={index}>
                                    <div className="w-100 text-start shadow h-100">
                                        <img src={itm.image} alt="image" className="img-fluid" />
                                        <h5 className="roboto text-start pt-4">{itm.heading}</h5>

                                        <p
                                            className={`roboto text-start pt-3 ${expanded[index] ? "expanded" : "collapsed"
                                                }`}
                                        >
                                            {itm.text}
                                        </p>

                                        {isLongText && ( // Only show "Read More" if the text is long
                                            <button
                                                className="read-more-btn roboto"
                                                onClick={() => toggleReadMore(index)}
                                            >
                                                {expanded[index] ? "Read Less" : "Read More"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="row pt-5" >
                        <div className="col-md-12">
                            <div className="w-100">
                                <h4 className='roboto text-start black'>Types of Arbitration We Handle: </h4>
                                <div className="row  arbitrationbox">
                                    <div className="col-md-4 pt-4" >
                                        <div className="w-100 text-start shadow h-100">
                                            <img src={commercialarbitration} alt="image" className="img-fluid" />
                                            <h5 className="roboto text-start pt-4">Commercial Arbitration </h5>
                                            <p className="roboto text-start pt-3" >
                                                Resolving disputes arising from business transactions, partnerships, and contracts.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pt-4" >
                                        <div className="w-100 text-start shadow h-100">
                                            <img src={international} alt="image" className="img-fluid" />
                                            <h5 className="roboto text-start pt-4">International Arbitration </h5>
                                            <p className="roboto text-start pt-3" >
                                                Addressing cross-border disputes involving parties from different jurisdictions, often governed by international treaties.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 pt-4" >
                                        <div className="w-100 text-start shadow h-100">
                                            <img src={construction} alt="image" className="img-fluid" />
                                            <h5 className="roboto text-start pt-4">Construction Arbitration</h5>
                                            <p className="roboto text-start pt-3" >
                                                Handling disputes related to construction projects, contracts, and claims.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h4 className='roboto text-start black'>Why One can choose us as their Attorney for an Arbitration Proceedings?</h4>
                                <p className='roboto pt-3'>
                                    With years of experience in arbitration, we understands the nuances of this practice area. We are committed to delivering personalized legal strategies that align with your goals. Our focus is on achieving favourable outcomes efficiently while maintaining the highest standards of professionalism and integrity.
                                </p>
                                <p className='roboto pt-3'>
                                    Whether you’re considering arbitration as a means to resolve a dispute or need representation during an ongoing process, we are here to support you. Contact us today to discuss your arbitration needs and explore how we can assist you in navigating this effective resolution method.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <h4 className='roboto  black'>
                            Our Services
                        </h4>
                        <p className='roboto text-center'>
                            Here, we offer a comprehensive range of arbitration services, including:
                        </p>
                    </div>
                    <div className="row pt-5 services h-100 px-5">
                        <div className="col-12 h-100">
                            <Slider
                                ref={(slider) => {
                                    sliderRef = slider;
                                }}
                                {...settings}
                            >
                                {brr.map((itm, index) => {
                                    const isExpanded = expandedIndex === index;
                                    const shouldShowButton = itm.content.length > 200;

                                    return (
                                        <div key={index}>
                                            <div className="servicebox h-100 text-center">
                                                <div className="d-flex justify-content-center">
                                                    <img src={itm.image} className="serviceimage img-fluid" alt="img" />
                                                </div>
                                                <h3 className="roboto text-center black">{itm.mainhead}</h3>

                                                <p className="roboto text-center">
                                                    {isExpanded ? itm.content : itm.content.substring(0, 150)}
                                                    {shouldShowButton && !isExpanded && "..."}
                                                </p>

                                                {shouldShowButton && (
                                                    <button className="read-more-btn roboto" onClick={() => toggleRead(index)}>
                                                        {isExpanded ? "Read Less" : "Read More"}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
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

export default Arbitration