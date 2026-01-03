//import React from 'react'

import { useState } from "react";
// import AllBanner from "../../Component/AllBanner";
// import career from '../../assets/images/career.png';
// import career from '../../assets/images/careernew.png'
import cheque from '../../assets/images/cheque.png';
import notice from '../../assets/images/notice.png';
import representation from '../../assets/images/representation.png';
import recovery from '../../assets/images/recovery.png';
import grounding from '../../assets/images/grounding.png';
import petition from '../../assets/images/petition.png';
import legal from '../../assets/images/legall.png';
import strategy from '../../assets/images/strategyy.png';
import quasiright from '../../assets/images/quasiright.jpg'
import Seo from "../../Seocomponent/Seo";

const Criminal = () => {
    const arr = [
        {
            image: cheque,
            heading: "Cheque Bounce Cases",
            text: "We represent clients in cases of dishonor of cheques under Section 138 of the Negotiable Instruments Act 1881. Our team helps clients understand their rights and remedies available in case of non-payment. We certainly defend our clients also, in case, one is roped in the same.",
        },
        {
            image: notice,
            heading: "Legal/Statutory Notices",
            text: "Assisting clients in drafting and sending legal notices to the drawer of the cheque to demand payment before proceeding with legal action. We ensure that all legal requirements are met for effective communication.",
        },
        {
            image: representation,
            heading: "Representation in Court",
            text: "Providing comprehensive representation in civil and criminal courts for cases related to dishonored cheques. We are skilled in presenting evidence and arguments to secure favorable outcomes.",
        },
        {
            image: recovery,
            heading: "Recovery of Dues",
            text: "Assisting clients in recovering amounts due from cheque bounce cases, helping them navigate the legal processes efficiently."

        },
        {
            image: grounding,
            heading: "Grounds for Quashing",
            text: " We provide legal assistance to clients seeking to quash FIRs on various grounds, including lack of jurisdiction, false allegations, or absence of sufficient evidence. We meticulously evaluate the facts of each case to identify valid grounds for quashing.",
        },
        {
            image: petition,
            heading: "Petitions to High Court",
            text: "Preparing and filing petitions in the appropriate High Court for the quashing of FIRs. We ensure that the petitions are well-drafted and substantiated with relevant legal precedents and evidence.",
        },
        {
            image: legal,
            heading: "Legal Representation",
            text: "Representing clients in hearings before the High Court, advocating for the dismissal of FIRs and protecting our clients from unwarranted legal consequences.",
        },
        {
            image: strategy,
            heading: "Strategic Legal Advice",
            text: "Offering clients strategic advice on whether to pursue quashing of FIRs or explore alternative legal remedies, ensuring informed decision-making.",
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
            {/* <AllBanner title="Quasi Criminal Matters" subtitle="Quasi Criminal Matters" image={career} /> */}
            <Seo title=" Corporate Criminal Lawyer in New Delhi, India | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 px-3 criminal commonbox'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>
                                    Quasi Criminal Matters</h2>
                                <p className='pt-3 roboto'>Quasi Criminal Matters refer to legal issues that, while not strictly criminal in nature, involve criminal implications and can significantly affect individuals and businesses. In India, this practice area typically includes matters related to</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center">
                        <div className="col-md-6">
                            <div className="w-100">
                                <h4 className='roboto text-start pt-3'>What is Insolvency and Bankruptcy Law</h4>
                                <p className='pt-3 roboto'>
                                    Insolvency refers to the financial state where an individual or entity cannot meet their debt obligations, while bankruptcy is the legal process that allows for the resolution of those debts. The IBC provides a comprehensive legal framework for both corporate and personal insolvency, focusing on efficient resolution mechanisms, the rights of creditors, and the protection of debtors.
                                </p>
                                <p className='roboto'>
                                    <span className='black fw-bold'>Negotiable Instruments:  </span> Governed by the Negotiable Instruments Act, 1881, these cases primarily involve dishonor of cheques and other financial instruments.


                                </p>
                                <p className='roboto pt-2'>
                                    <span className='black fw-bold'>
                                        Quashing of FIRs:  </span>Legal proceedings to challenge the validity of an FIR registered with the police, often aimed at preventing unwarranted criminal prosecution.


                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={quasiright} className='h-100 w-100 img-fluid' />
                        </div>
                    </div>
                    <div className="row criminalbox pt-5">
                        <h2 className='roboto text-center pb-3'>
                            Key Areas of Focus</h2>
                        {arr.map((itm, index) => {
                            // Set a condition to only show "Read More" for long content
                            const isLongText = itm.text.length > 150; // Adjust character limit if needed

                            return (
                                <div className="col-md-4 pb-4" key={index}>
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
                                <h4 className='roboto text-start black'>Why with us, in this roller coaster ride?</h4>
                                <p className='roboto pt-3'>
                                    We are committed to providing exceptional legal services in Quasi Criminal Matters. Our expertise, coupled with a client-focused approach, allows us to deliver effective solutions tailored to your needs. We possess extensive knowledge of the Negotiable Instruments Act and criminal procedure, ensuring that you receive informed and strategic legal counsel.
                                </p>
                                <p className='roboto pt-3'>
                                    We take the time to understand your unique situation and concerns, developing tailored strategies that align with your objectives. We recognize that legal issues can be stressful and overwhelming. Our team is dedicated to providing compassionate support, guiding you through the legal process with care and professionalism.
                                </p>
                                <p className='roboto pt-3'>
                                    If you are facing issues related to negotiable instruments or seeking to quash an FIR, we here to assist you. Contact us today to schedule a consultation and discover how we can support you in navigating the complexities of Quasi Criminal Matters in India.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Criminal