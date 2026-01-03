//import React from 'react'
import { useState } from "react";
import divource1 from '../../assets/images/divource1.png'
import divource2 from '../../assets/images/divourse2.png'
import custody from '../../assets/images/custody.png'
import child from '../../assets/images/child.png'
import visitor from '../../assets/images/visitor.png'
import financial from '../../assets/images/financial.png'
import legalprotection from '../../assets/images/legalprotection.png'
import annulment from '../../assets/images/annulment.png'
import matrimonyright from '../../assets/images/matrimonyright.jpg'
import successright from '../../assets/images/successright.jpg'
import will from '../../assets/images/will.png'
import willregistration from '../../assets/images/willregistration.png'
import probate from '../../assets/images/probate.png'
import letter from '../../assets/images/letter.png'
import heirs from '../../assets/images/heirs.png'
import representation from '../../assets/images/representation.png'
import mediation from '../../assets/images/mediation.png'
import trust from '../../assets/images/trust.png'
import estateplanning from '../../assets/images/estateplanning.png'
import clientcentric from '../../assets/images/clientcentric.png'
import focus from '../../assets/images/focus.png'
import guidence from '../../assets/images/guidence.png'
import Seo from "../../Seocomponent/Seo";


const Matriminial = () => {
    const arr = [
        {
            image: divource1,
            heading: "Contested and Uncontested Divorce",
            text: "We assist clients in navigating both contested and uncontested divorce proceedings, helping them understand their rights and options.",
        },
        {
            image: divource2,
            heading: "Grounds for Divorce",
            text: "Advising on various grounds for divorce, including adultery, cruelty, desertion, and mutual consent. We provide strategic guidance for presenting cases effectively.",
        },
        {
            image: custody,
            heading: "Custody Arrangements",
            text: "Advocating for arrangements that prioritize the best interests of the child, including joint or sole custody.",
        },
        {
            image: child,
            heading: "Child Support",
            text: "Assisting in the calculation and negotiation of child support payments, ensuring financial support meets the child's needs.",
        },
        {
            image: visitor,
            heading: "Visitation Rights",
            text: " Representing clients in establishing fair visitation rights for non-custodial parents.",
        },
        {
            image: financial,
            heading: "Financial Support",
            text: "Guiding clients in negotiating alimony and maintenance payments that are fair and sustainable based on individual circumstances.",
        },
        {
            image: legalprotection,
            heading: "Legal Protection",
            text: "Assisting victims of domestic violence in obtaining protection orders under the Domestic Violence Act, 2005, ensuring their safety and well-being.",
        },
        {
            image: annulment,
            heading: "Grounds for Annulment",
            text: "Advising on annulment options based on lack of consent, fraud, or mental incapacity, and guiding clients through the legal process.",
        },
    ];
    const brr = [
        {
            image: will,
            heading: "Drafting Wills",
            text: "Assisting clients in drafting legally sound wills that reflect their wishes and ensure smooth distribution of assets after death.",
        },
        {
            image: willregistration,
            heading: "Will Registration",
            text: "Advising on the registration of wills and the benefits it provides in terms of legal recognition.",
        },
        {
            image: probate,
            heading: "Probate Applications",
            text: "Assisting executors in applying for probate of a will, ensuring that the deceased's wishes are honored legally.",
        },
        {
            image: letter,
            heading: "Letters of Administration",
            text: "Guiding legal heirs in obtaining letters of administration when no will exist, facilitating the lawful distribution of the deceased's assets.",
        },
        {
            image: heirs,
            heading: "Legal Heirs",
            text: " Advising clients on the distribution of assets when a person dies without a will, including identifying legal heirs and their entitlements under applicable laws.",
        },
        {
            image: representation,
            heading: "Representation in Court",
            text: "Representing clients in disputes related to wills, inheritance, and property rights, advocating for fair resolution through negotiation or litigation",
        },
        {
            image: mediation,
            heading: "Mediation",
            text: "Encouraging alternative dispute resolution methods to settle conflicts amicably and efficiently.",
        },
        {
            image: trust,
            heading: "Establishing Trusts",
            text: "Assisting clients in creating trusts to manage and protect their assets, ensuring their wishes are fulfilled during their lifetime and beyond.",
        },
        {
            image: estateplanning,
            heading: "Comprehensive Estate Planning",
            text: "Providing strategic guidance on comprehensive estate planning to minimize taxes and maximize asset protection for beneficiaries.",
        },
    ];
    const [expanded, setExpanded] = useState({});
    const toggleReadMore = (index) => {
        setExpanded((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };
    return (
        <>

            <Seo title=" Matrimonial Lawyer, Family Lawyer in New Delhi, India | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 px-3 bank commonbox'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>
                                    MATRIMONIAL & SUCCESSION</h2>
                                <p className='pt-3 roboto'>We specialize in Matrimonial and Succession matters, providing expert legal assistance to clients navigating the complexities of family law in India. We understand the emotional and legal challenges associated with marriage, divorce, child custody, and inheritance. We are committed to protecting your rights and interests while guiding you through the legal landscape with compassion and professionalism.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 align-items-center">
                        <div className="col-md-6">
                            <div className="w-100">
                                <h4 className='roboto text-start pt-3'> Matrimonial Matters</h4>
                                <p className='pt-3 roboto'>
                                    Matrimonial Matters encompass a wide range of legal issues related to marriage and family relationships. In India, these issues are governed by various personal laws, including the Hindu Marriage Act 1955, the Special Marriage Act 1925, among others.
                                </p>
                                <p className='pt-3 roboto'>

                                </p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={matrimonyright} className='h-100 w-100 img-fluid' />
                        </div>
                    </div>
                    <div className="row bankbox pt-5">
                        <h2 className='roboto text-center pb-3'>
                            Key Areas of Focus</h2>
                        {arr.map((itm, index) => {

                            const isLongText = itm.text.length > 150;

                            return (
                                <div className="col-md-4  pb-4" key={index}>
                                    <div className="w-100 text-start shadow h-100">
                                        <img src={itm.image} alt="image" className="img-fluid" />
                                        <h5 className="roboto text-start pt-4">{itm.heading}</h5>

                                        <p
                                            className={`roboto text-start pt-3 ${expanded[index] ? "expanded" : "collapsed"
                                                }`}
                                        >
                                            {itm.text}
                                        </p>

                                        {isLongText && (
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
                    <div className="row pt-5 align-items-center">
                        <div className="col-md-6">
                            <img src={successright} className='h-100 w-100 img-fluid' />
                        </div>
                        <div className="col-md-6">
                            <div className="w-100">
                                <h4 className='roboto text-start pt-3'> SUCCESSION</h4>
                                <p className='pt-3 roboto'>
                                    Succession Matters deal with the distribution of a deceased person assets and properties according to the law or their wishes. In India, succession laws vary based on religion, with different provisions under the Hindu Succession Act 1956, Muslim Personal Law, and the Indian Succession Act 1925.
                                </p>
                                <p className='pt-3 roboto'>

                                </p>

                            </div>
                        </div>

                    </div>
                    <div className="row bankbox pt-5">
                        <h2 className='roboto text-center pb-3'>
                            Key Areas of Focus</h2>
                        {brr.map((itm, index) => {

                            const isLongText = itm.text.length > 150;

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

                                        {isLongText && (
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
                    <div className="row  pt-5">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h4 className='roboto text-start black'>Why Choose Us?</h4>
                                <p className='roboto pt-3'>
                                    We are dedicated to providing personalized support in Matrimonial and Succession Matters. We understand the sensitive nature of these issues and are committed to achieving fair and just outcomes for our clients.
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="row bankbox">
                        <div className="col-md-4 pt-4" >
                            <div className="w-100 text-start shadow h-100">
                                <img src={divource1} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4">Deep Knowledge of Family Law </h5>
                                <p className="roboto text-start pt-3" >
                                    We are well-versed in the intricacies of matrimonial and succession laws in India, ensuring that you receive informed advice tailored to your specific situation.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4" >
                            <div className="w-100 text-start shadow h-100">
                                <img src={clientcentric} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4"> Client-Centric Approach </h5>
                                <p className="roboto text-start pt-3" >
                                    We prioritize your needs and concerns, working closely with you to develop strategies that align with your objectives and protect your rights.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4" >
                            <div className="w-100 text-start shadow h-100">
                                <img src={focus} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4">Client-Centric Focus</h5>
                                <p className="roboto text-start pt-3" >
                                    Your interests are our priority. We work closely with you to ensure you are informed and empowered at every stage of the process, from initial consultation to resolution.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 pt-4" >
                            <div className="w-100 text-start shadow h-100">
                                <img src={guidence} alt="image" className="img-fluid" />
                                <h5 className="roboto text-start pt-4">Compassionate Guidance</h5>
                                <p className="roboto text-start pt-3" >
                                    We strive to create a supportive environment where clients feel comfortable discussing their challenges. Our goal is to empower you through the legal process.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-3" >
                        <div className="col-md-12">
                            <div className="w-100">
                                <p className='roboto  issues related to marriage, divorce, child custody, or inheritance, we are here to help. Contact pt-2'>
                                    If you are facing issues related to marriage, divorce, child custody, or inheritance, we are here to help. Contact us today to schedule a consultation and discover how we can assist you in navigating the complexities of Matrimonial and Succession Matters in India.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Matriminial