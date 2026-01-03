//import React from 'react'
import { useState } from 'react';
// import career from '../../assets/images/careernew.png'
// import AllBanner from '../../Component/AllBanner';
import companyright from '../../assets/images/companyright.jpg'
import entity from '../../assets/images/entity.png'
import incorporation from '../../assets/images/incorporation.png'
import board from '../../assets/images/board.png'
import stakeholder from '../../assets/images/stakeholder.png'
import due from '../../assets/images/due.png'
import drafting from '../../assets/images/drafting.png'
import regulatory from '../../assets/images/regulatory.png'
import recognization from '../../assets/images/recognization.png'
import ipregistration from '../../assets/images/ipregistration.png'
import enforcement from '../../assets/images/enforcement.png'
import regulatoryy from '../../assets/images/regulatoryy.png'
import advisory from '../../assets/images/advisory.png'
import litigation from '../../assets/images/litigation.png'
import insolvency from '../../assets/images/insolvency.png'
import resolution from '../../assets/images/resolution.png'
import ibc from '../../assets/images/ibc.png'
import services from '../../assets/images/services.png'
import personal from '../../assets/images/personal.png'
import Seo from '../../Seocomponent/Seo';




const Corporate = () => {
    const arr = [
        {
            image: entity,
            heading: "Entity Selection",
            text: "Advising clients on the appropriate business structure (such as private limited companies, limited liability partnerships, or sole proprietorships) based on their needs, goals, and regulatory requirements.",
        },
        {
            image: incorporation,
            heading: "Incorporation",
            text: "Assisting with the entire incorporation process, including drafting and filing necessary documents with the Registrar of Companies, obtaining licenses, and ensuring compliance with statutory requirements.",
        },
        {
            image: board,
            heading: "Board Structure and Compliance",
            text: "Guiding companies on establishing effective governance frameworks, including board composition, roles, and responsibilities. We help ensure compliance with the Companies Act, 2013, and other relevant regulations.",
        },
        {
            image: stakeholder,
            heading: "Shareholder Rights",
            text: "Advising on shareholder agreements, protecting the rights and interests of shareholders, and addressing disputes that may arise among them.",
        },
        {
            image: due,
            heading: "Due Diligence",
            text: " Conducting thorough due diligence for both buyers and sellers to identify risks and liabilities associated with a transaction. We ensure that all aspects of the deal are thoroughly evaluated.",
        },
        {
            image: drafting,
            heading: "Drafting Agreements",
            text: "Preparing and negotiating various agreements, including share purchase agreements, asset purchase agreements, and confidentiality agreements, to protect our clients' interests.",
        },

        {
            image: regulatory,
            heading: "Regulatory Approvals",
            text: "Assisting clients in obtaining necessary approvals from regulatory authorities, including the Competition Commission of India (CCI), to ensure compliance with legal requirements.",
        },
        {
            image: recognization,
            heading: "Reorganization Strategies",
            text: "Advising on strategies for corporate restructuring, including mergers, demergers, and business transfers, to enhance operational efficiency and financial stability.",
        },
        {
            image: insolvency,
            heading: "Insolvency Matters",
            text: "Assisting companies facing financial distress with options under the Insolvency and Bankruptcy Code, 2016 (IBC), including the Corporate Insolvency Resolution Process (CIRP).",
        },
        {
            image: ipregistration,
            heading: "IP Registration",
            text: "Assisting businesses in registering trademarks, copyrights, patents, and designs to protect their intellectual property assets.",
        },
        {
            image: enforcement,
            heading: "IP Compliance and Enforcement",
            text: "Advising clients on compliance with IPR laws and representing them in disputes related to intellectual property infringement.",
        },
        {
            image: regulatoryy,
            heading: "Regulatory Filings",
            text: "Ensuring timely compliance with statutory requirements, including annual filings, maintenance of statutory registers, and adherence to corporate governance norms.",
        },
        {
            image: advisory,
            heading: "Advisory Services",
            text: "Providing ongoing legal advice on changes in corporate laws and regulations, helping clients adapt to new compliance requirements.",
        },
        {
            image: litigation,
            heading: "Corporate Litigation",
            text: "Representing clients in corporate disputes, including shareholder disputes, breach of contract claims, and regulatory enforcement actions.",
        },
        {
            image: resolution,
            heading: "Alternative Dispute Resolution (ADR)",
            text: "Exploring mediation and arbitration as effective means to resolve disputes without resorting to lengthy litigation.",
        },

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
            {/* <AllBanner title="Company and Corporate law" subtitle="Company and Corporate law" image={career} /> */}
            <Seo title=" Startup Lawyer in New Delhi, India | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 px-3 corporate commonbox'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>
                                    Company and Corporate law</h2>
                                <p className='pt-3 roboto'>We specialize in Company and Corporate Law, providing comprehensive legal services to businesses of all sizes in India. We are dedicated to helping clients navigate the complex regulatory landscape, ensuring compliance with legal requirements while fostering growth and innovation. Whether you are a startup, a small business, or a large corporation, we offer tailored solutions to meet your specific needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center">
                        <div className="col-md-6">
                            <div className="w-100">
                                <h4 className='roboto text-start pt-3'>Company and Corporate Law</h4>
                                <p className='pt-3 roboto'>
                                    Company and Corporate Law governs the formation, operation, and dissolution of corporations and other business entities. It encompasses a wide range of legal issues, including corporate governance, compliance, mergers and acquisitions, and intellectual property. Our practice area is designed to support clients in achieving their business objectives while mitigating legal risks.
                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={companyright} className='h-100 w-100 img-fluid' />
                        </div>
                    </div>
                    <div className="row corporatebox pt-5">
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
                                <h4 className='roboto text-start black'>Why us?</h4>
                                <p className='roboto pt-3'>
                                    We bring extensive experience in Company and Corporate Law. We are committed to understanding your business objectives and providing strategic legal solutions that support your growth and success. We are well-versed in the intricacies of Indian corporate law, ensuring compliance and effective navigation of legal challenges.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row  corporatebox " >
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
                                <img src={personal} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4"> Personalized Approach</h5>
                                <p className="roboto text-start pt-3" >
                                    We take the time to understand your unique business needs and tailor our services accordingly, providing practical solutions that align with your goals.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4">
                            <div className="w-100 text-start shadow h-100">
                                <img src={services} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4">Client-Centric Service</h5>
                                <p className="roboto text-start pt-3" >
                                    Your interests are our priority. We work closely with you to ensure that you are informed and empowered throughout every legal process.
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

                    <div className="row py-4">
                        <h4 className="roboto text-start ">
                            Contact Us
                        </h4>
                        <p className="roboto text-start pt-2">
                            If you require expert legal assistance with company formation, corporate governance, mergers and acquisitions, or any other corporate matters, we are here to help. Contact us today to schedule a consultation and discover how we can support your business in achieving its goals while ensuring compliance with the law. Let us be your trusted legal partner in navigating the complexities of Company and Corporate Law in India.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Corporate