//import React from 'react'

import { useState } from "react";
// import AllBanner from "../../Component/AllBanner"
// import career from '../../assets/images/careernew.png'

import contractlaw from '../../assets/images/contractlaw.png'
import toratlaw from '../../assets/images/toratlaw.png'
import propertylaw from '../../assets/images/propertylaw.png'
import bussinesslaw from '../../assets/images/bussinesslaw.png'
import intellectuallaw from '../../assets/images/intellectuallaw.png'
import consumerlaw from '../../assets/images/consumerlaw.png'
import disputelaw from '../../assets/images/disputelaw.png'
import civilright from '../../assets/images/civilright.webp'
import Seo from "../../Seocomponent/Seo";


const Civil = () => {
    const arr = [
        {
            image: contractlaw,
            heading: "Contract Law",
            text: "Drafting, reviewing, and enforcing contracts, including sales agreements, leases, and service contracts. We help clients understand their rights and obligations and navigate disputes arising from contract breaches.",
        },
        {
            image: toratlaw,
            heading: "Tort Law",
            text: "Representing clients in cases involving negligence, personal injury, defamation, and other civil wrongs. Our goal is to obtain compensation for damages caused by wrongful acts.",
        },
        {
            image: propertylaw,
            heading: "Property Law",
            text: "Assisting clients with real estate transactions, property disputes, and landlord-tenant issues. We provide guidance on property rights, zoning regulations, and title disputes.",
        },
        {
            image: bussinesslaw,
            heading: "Business Formation and Governance",
            text: "Advising entrepreneurs and businesses on entity selection, formation, and compliance with regulations. We assist in establishing corporations, partnerships, and limited liability companies, ensuring proper governance and operational frameworks.",
        },
        {
            image: intellectuallaw,
            heading: "Intellectual Property",
            text: " Protecting clients' innovations, trademarks, copyrights, and patents. We help businesses navigate the complexities of intellectual property law to safeguard their creations and brand identity.",
        },
        {
            image: consumerlaw,
            heading: "Consumer Protection",
            text: "Advocating for consumers in disputes related to unfair trade practices, deceptive advertising, and product liability. We work to ensure clients are treated fairly in the marketplace.",
        },
        {
            image: disputelaw,
            heading: "Dispute Resolution",
            text: "Representing clients in civil litigation and alternative dispute resolution (ADR) methods, including mediation and arbitration. We strive for efficient and effective resolutions to disputes, whether in or out of court.",
        }
    ];
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle between true and false for each item
        }));
    };

    return (
        <>
            {/* <AllBanner title="Civil and Commercial law" subtitle="Civil and Commercial law" image={career} /> */}
            <Seo title="Civil & Commercial Lawyer in New Delhi, India | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 px-3 civil'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>
                                    Civil and Commercial law</h2>
                                <p className='pt-3 roboto'>Civil and Commercial Law encompasses a broad range of legal principles and regulations governing the rights and obligations of individuals and businesses in their interactions. We specialize in providing comprehensive legal services in this area, ensuring our clients receive expert guidance and representation for their legal matters.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center">
                        <div className="col-md-6">
                            <div className="w-100">
                                <h4 className='roboto text-start pt-3'>What is Civil Law</h4>
                                <p className='pt-3 roboto'>
                                    Civil Law refers to the body of laws that govern disputes between individuals, organizations, and government entities. This area of law covers various issues, including contracts, torts, property, family law, and inheritance. The primary goal of civil law is to provide remedies for individuals whose rights have been violated, ensuring justice and accountability.
                                </p>
                                <h4 className='roboto text-start pt-3'>What is Commercial Law</h4>
                                <p className='pt-3 roboto'>
                                    Commercial Law, also known as Business Law, deals specifically with the rights, relations, and conduct of individuals and businesses engaged in commerce, trade, and sales. It encompasses a wide array of topics, including corporate governance, partnership law, intellectual property, consumer protection, and international trade regulations. The aim of commercial law is to facilitate fair business practices and resolve disputes that arise in commercial transactions. The Commercial law, in India, is going with a drastic transition, post the implementation of the Commercial Courts Act 2015. The strict timelines, and implementation of the provisions thereof, is ensuring adjudication of commercial disputes in a quick timeframe.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={civilright} className='h-100 w-100 img-fluid' />
                        </div>
                    </div>
                    <div className="row civilbox pt-5 commonbox">
                        <h2 className='roboto text-center pb-3'>
                            Key Areas of Focus</h2>
                        {arr.map((itm, index) => {
                            // Set a condition to only show "Read More" for long content
                            const isLongText = itm.text.length > 150; // Adjust character limit if needed

                            return (
                                <div className="col-md-4 pb-4 " key={index}>
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
                    <div className="row pt-5">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h4 className='roboto text-start black'>Why us, for protecting your Civil & Commercial Rights?</h4>
                                <p className='roboto pt-3'>
                                    We are dedicated to providing personalized legal solutions tailored to your specific needs. We understand that civil and commercial matters can be complex and often emotionally charged, which is why we take a compassionate and proactive approach to every case.
                                </p>
                                <p className='roboto pt-3'>
                                    Our commitment to excellence, integrity, and client satisfaction sets us apart. We pride ourselves on our thorough understanding of the law, attention to detail, and strategic thinking. By partnering with us, you can be confident that your legal matters are in capable hands. Whether you are facing a civil dispute, need assistance with a commercial transaction, or seek to protect your rights, we are here to help. Contact us today to schedule a consultation and learn how we can assist you in navigating the complexities of civil and commercial law.
                                </p>
                                <p className='roboto pt-3'>
                                    Let us be your trusted legal partner in achieving the best possible outcomes for your legal needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Civil