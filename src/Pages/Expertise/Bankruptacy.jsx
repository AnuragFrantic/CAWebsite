//import React from 'react'

import { useState } from "react";
// import AllBanner from "../../Component/AllBanner"
// import career from '../../assets/images/careernew.png'
import corporate from '../../assets/images/corporate.png'
import professional from '../../assets/images/professional.png'
import recovery from '../../assets/images/recovery.png'
import liquid from '../../assets/images/liquid.png'
import personal from '../../assets/images/personal.png'
import negotiation from '../../assets/images/negotiation.png'
import consumer from '../../assets/images/consumer.png'
import bankright from '../../assets/images/bankright.jpg'
import ibc from '../../assets/images/ibc.png'
import tailored from '../../assets/images/tailored.png'
import focus from '../../assets/images/focus.png'
import Seo from "../../Seocomponent/Seo";

const Bankruptacy = () => {
    const arr = [
        {
            image: corporate,
            heading: "Corporate Insolvency Resolution Process (CIRP)",
            text: "We assist companies in initiating the CIRP, guiding them through the necessary steps to restructure their debts and explore viable solutions for revival. Our approach ensures compliance with legal requirements and promotes the interests of all stakeholders.",
        },
        {
            image: professional,
            heading: "Role of Resolution Professionals",
            text: "We provide support in the appointment and functioning of resolution professionals, ensuring that the process adheres to the IBC’s guidelines. Our team helps facilitate communication between all parties involved.",
        },
        {
            image: recovery,
            heading: "Creditors’ Rights and Recovery",
            text: "Representing creditors in insolvency proceedings, we help them assert their rights and recover dues. Our services include filing claims, participating in the resolution process, and exploring legal remedies to maximize recovery.",
        },
        {
            image: liquid,
            heading: "Liquidation",
            text: "When revival is not feasible, we guide clients through the liquidation process, including asset evaluation, sale, and distribution of proceeds. We ensure that the process is conducted transparently and in accordance with the law.",
        },
        {
            image: personal,
            heading: "Personal Insolvency Proceedings",
            text: " We assist individuals in filing for bankruptcy under the IBC, providing legal counsel on available options to discharge debts and protect assets from creditors.",
        },
        {
            image: negotiation,
            heading: "Debt Restructuring and Negotiation",
            text: "Helping individuals negotiate with creditors for debt restructuring, we aim to create manageable repayment plans, preventing the need for formal bankruptcy proceedings.",
        },
        {
            image: consumer,
            heading: "Consumer Rights",
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
            {/* <AllBanner title="Insolvency and Bankruptcy law" subtitle="Insolvency and Bankruptcy law" image={career} /> */}
            <Seo title=" Insolvency & Bankruptcy Lawyer for NCLT and NCLAT in New Delhi, India | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 px-3 bank commonbox'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>
                                    Insolvency and Bankruptcy law</h2>
                                <p className='pt-3 roboto'>We specialize in Insolvency and Bankruptcy Law, providing comprehensive legal services to individuals and businesses facing financial distress in India. With the enactment of the Insolvency and Bankruptcy Code, 2016 (IBC), a structured framework has been established to address insolvency issues, facilitating timely resolution and promoting a culture of credit discipline. Our experienced team is dedicated to guiding clients through the intricacies of the insolvency process, ensuring their rights are protected and optimal outcomes achieved.</p>
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

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={bankright} className='h-100 w-100 img-fluid' />
                        </div>
                    </div>
                    <div className="row bankbox pt-5">
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
                                <h4 className='roboto text-start black'>Why us, with you, travelling in this Boat of Insolvency & Bankruptcy?</h4>
                                <p className='roboto pt-3'>
                                    We bring extensive knowledge and experience in Insolvency and Bankruptcy Law. We understand the stress and challenges associated with financial distress, and we are committed to providing compassionate, expert guidance throughout the process. We have represented in a plethora of cases before the National Company Law Tribunal (the Adjudicating Authority), as well as before the National Company Law Appellate Tribunal (the Appellate Tribunal),  representing either side i.e. Applicant and/or the Corporate Debtor.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row  bankbox" >
                        <div className="col-md-4 pt-4">
                            <div className="w-100 text-start shadow h-100">
                                <img src={ibc} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4">Expertise in IBC</h5>
                                <p className="roboto text-start pt-3" >
                                    We are well-versed in the provisions of the Insolvency and Bankruptcy Code and stay updated on the latest legal developments, ensuring you receive informed and effective advice.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4">
                            <div className="w-100 text-start shadow h-100">
                                <img src={tailored} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4">Tailored Solutions</h5>
                                <p className="roboto text-start pt-3" >
                                    We recognize that each client’s situation is unique. Our approach involves understanding your specific circumstances and developing customized strategies to achieve the best possible outcomes.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4">
                            <div className="w-100 text-start shadow h-100">
                                <img src={focus} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4">Client-Centric Focus</h5>
                                <p className="roboto text-start pt-3" >
                                    Your interests are our priority. We work closely with you to ensure you are informed and empowered at every stage of the process, from initial consultation to resolution.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row pt-3">
                        <div className="col-md-12">
                            <div className="w-100">
                                <p className='roboto pt-2'>
                                    If you are facing insolvency issues or need assistance navigating the complexities of bankruptcy, we are here to help. If a Corporate is insolvent, and not able to liquidate your liability, we are here. Contact us today to schedule a consultation and discover how we can support you in addressing your financial challenges. Let us be your trusted legal partner in the field of Insolvency and Bankruptcy Law in India.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Bankruptacy
