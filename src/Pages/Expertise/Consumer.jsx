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
import consumer from '../../assets/images/consumerright.jpg'
import Seo from "../../Seocomponent/Seo";


const Consumer = () => {
    const arr = [
        {
            image: contractlaw,
            heading: "Consumer Rights Advocacy",
            text: "Educating clients about their rights under the Consumer Protection Act, including the right to safety, information, choice, and redress. We empower consumers to assert their rights effectively.",
        },
        {
            image: toratlaw,
            heading: "Filing Complaints",
            text: "Assisting clients in filing complaints with consumer forums and commissions, ensuring that their grievances are heard and addressed promptly. We guide clients through the process, from initial filing to representation at hearings.",
        },
        {
            image: propertylaw,
            heading: "Unfair Trade Practices",
            text: "Representing clients in cases involving misleading advertisements, defective goods, and substandard services. We work to hold businesses accountable for unethical practices and seek appropriate compensation for our clients.",
        },
        {
            image: bussinesslaw,
            heading: "E-commerce and Online Consumer Rights",
            text: "Navigating the unique challenges posed by online transactions, including issues related to product quality, delivery, and refunds. We help consumers understand their rights in the digital marketplace.",
        },
        {
            image: intellectuallaw,
            heading: "Product Liability",
            text: " Assisting clients in cases where they have suffered harm due to defective or dangerous products. We work to secure compensation for injuries and damages caused by such products.",
        },
        {
            image: consumerlaw,
            heading: "Property Transactions",
            text: "Assisting clients with all aspects of buying and selling residential and commercial properties. We provide thorough due diligence, ensuring that title deeds are clear and free of encumbrances.",
        },
        {
            image: disputelaw,
            heading: "Lease and Tenancy Agreements",
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
            <Seo title="Consumer and Real Estate Lawyer in New Delhi, India | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 px-3 civil'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>
                                    Consumer Protection and Real Estate</h2>
                                <p className='pt-3 roboto'>We are dedicated to safeguarding the rights of consumers and navigating the complexities of real estate transactions. Our practice areas in Consumer Protection and Real Estate Law aim to empower individuals and businesses alike, ensuring that their rights are upheld and their interests protected.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center">
                        <div className="col-md-6">
                            <div className="w-100">
                                <h4 className='roboto text-start pt-3'>What is Consumer Protection</h4>
                                <p className='pt-3 roboto'>
                                    Consumer Protection Law in India is designed to promote and protect the rights of consumers against unfair trade practices, substandard goods, and deficient services. The Consumer Protection Act, 2019 (erstwhile Consumer Protection Act 1986) provides a robust framework for addressing consumer grievances, ensuring transparency, and promoting fair market practices.
                                </p>
                                <h4 className='roboto text-start pt-3'>What is Real Estate</h4>
                                <p className='pt-3 roboto'>
                                    Real Estate Law encompasses the legal aspects of property transactions, including the sale, purchase, lease, and development of land and property. In India, this area of law is governed by various statutes, including the Transfer of Property Act, 1882, and the Real Estate (Regulation and Development) Act, 2016 (RERA).
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={consumer} className='h-100 w-100 img-fluid' />
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

export default Consumer