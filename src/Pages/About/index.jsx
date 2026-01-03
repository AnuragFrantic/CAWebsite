//import React from 'react'
import aboutbanner from '../../assets/images/aboutbanner.jpg'
// import college from '../../assets/images/college.jpg'
import college from '../../assets/images/collegedays2.avif'
import areaofexpertise from '../../assets/images/areaofexpertise.jpg'
import expertise from '../../assets/images/expertise.jpg'
// import legalpractise from '../../assets/images/legalpractise.jpg'
import AllBanner from "../../Component/AllBanner"
import abouteducation from '../../assets/images/abouteducation.jpg'
import commitment from '../../assets/images/commitment.jpg'
import newimg from '../../assets/images/founderimg.jfif'

import quotesblue from '../../assets/images/quote.png'
import quotesdiv from '../../assets/images/ourstory.jpeg'
import { useEffect, useState } from 'react'
import { BaseUrl } from '../../Api/BaseUrl'
import axios from 'axios'
import Seo from '../../Seocomponent/Seo'
// import Abouttestimonial from './Abouttestimonial'


const About = () => {
    const [quotesdata, setquotesdata] = useState([]);
    const [profiledata, setprofiledata] = useState([]);

    const handleget = async () => {
        await axios.get(`${BaseUrl}quote`).then(resp => {
            console.log(resp.data.data)
            setquotesdata(resp.data.data[1])
        })
    }
    useEffect(() => {
        handleget();
    }, [])


    const handleProfile = async () => {
        await axios.get(`${BaseUrl}profile`).then(resp => {
            console.log(resp.data.data)
            setprofiledata(resp.data.data[0])
        })
    }
    useEffect(() => {
        handleProfile()
    }, [])


    return (
        <>
            <Seo title="Chambers of Kumar Deepraj, Advocate at Delhi NCR | NCDRC | RERA" />
            <AllBanner title="Our Story" subtitle="Our Story" image={aboutbanner} />
            {/* <Abouttestimonial /> */}
            <section className='about py-5 px-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 py-3">
                                <h2 className='roboto text-center'>Our Story</h2>
                                {/* <p className='pt-3 roboto'>Kumar Deepraj is a distinguished advocate dedicated to transforming the legal landscape through expertise, innovation, and collaboration. With a robust academic foundation, holding both a B.A. LL.B. and an LL.M. degree, he combines scholarly knowledge with practical experience to deliver exceptional legal services.</p> */}
                                <p className='pt-3 roboto'><strong>Chambers of Kumar Deepraj</strong> is a New Delhi-based legal practice founded by Advocate Kumar Deepraj, dedicated to providing strategic, result-oriented counsel in complex litigation and arbitration matters. This Chamber is built on a foundation of deep legal acumen, courtroom experience, and policy insight. Led by Advocate Kumar Deepraj, a litigation and dispute resolution counsel with experience across forums and sectors, the Chambers is dedicated to delivering strategic, high-quality legal representation in complex and contentious matters.</p>
                                <p className='pt-3 roboto'>
                                    The Chambers provides comprehensive Dispute Resolution services, both within India and across international jurisdictions. The practice is grounded in the ethos of precision, preparedness, and strategic foresight. The Chambers regularly represent clients in complex commercial disputes, arbitration proceedings, and litigation matters before various judicial and quasi-judicial forums. Chamber’s Dispute Resolution vertical is not confined to geographical boundaries; it collaborates with foreign counsels and arbitral institutions to represent Indian interests abroad and provide Indian legal expertise in cross-border matters.
                                </p>
                                <p className='pt-3 roboto'>
                                    With half a decade of robust experience in constitutional law, commercial disputes, arbitration, and real estate litigation, the Chambers represents a confluence of traditional advocacy and modern, client-centric solutions.
                                </p>
                                <p className='pt-3 roboto'>
                                    The Chambers was established in 2025 with a singular vision, i.e., to be a litigation-first, research-backed dispute resolution practice grounded in integrity, responsiveness, and professional excellence.
                                </p>


                            </div>
                        </div>

                    </div>
                    <div className="row pt-5">
                        <div className="col-md-6 offset-md-3">
                            <div className='w-100 leftcol '>
                                <div className="div leftcolinner">
                                    <img src={quotesblue} alt='image' />
                                    <h5 className='roboto black'>
                                        {quotesdata.quotes}
                                    </h5>
                                    <h4 className='roboto black py-2 mt-3'>
                                        Kumar Deepraj
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center position-relative">
                            <div className='circleimage'>
                                <img src={quotesdiv} alt='image' className='quotesdivimage' />
                            </div>

                        </div>
                    </div>
                    {/* <div className="pt-5 row">
                        <div className="col-md-12">
                            <h3 className='roboto black py-2 mt-3 '>
                                MEET OUR FOUNDER
                            </h3>
                        </div>
                        <div className="col-md-6">
                            <img src={newimg} alt="" />
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex justify-content-start">
                                <a href={`${BaseUrl}${profiledata?.image}`} target='_blank' download className='mt-4 bg-blue text-white btn'>
                                    Download Our Profile
                                </a>

                            </div>
                        </div>
                    </div> */}

                    {/* 
                    <div className="founder-section my-5 py-5">
                        <div className="container">
                            <div className="row align-items-center">

                          
                                <div className="col-md-7 text-center text-md-end">
                                    <h2 className="fw-bold text-white mb-2 text-end">Meet Our Founder</h2>
                                    <h4 className="text-uppercase founder-name mb-4 text-white">
                                        Kumar Deepraj
                                    </h4>


                                    <a
                                        href={`${BaseUrl}${profiledata?.image}`}
                                        target="_blank"
                                        download
                                        className="btn btn-download mt-3"
                                    >
                                        Download Our Profile
                                    </a>
                                </div>

                               
                                <div className="col-md-5 text-start mt-4 mt-md-0">
                                    <img
                                        src={newimg}
                                        alt="Founder"
                                        className="founder-img img-fluid "
                                    />
                                </div>

                            </div>
                        </div>
                    </div> */}

                    <div className="bg-light my-5 py-5">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">

                                <div className="col-md-8">
                                    <div className="row align-items-center">

                                        <div className="col-md-12 text-center">
                                            <div className="">
                                                <img
                                                    src={newimg}
                                                    alt="Founder"
                                                    className="founder-img img-fluid "
                                                />
                                            </div>
                                            <h2 className="fw-bold  mb-2 roboto text-center d-flex justify-content-center mt-3">Meet Our Founder</h2>
                                            <h4 className="text-uppercase founder-name roboto  ">
                                                Kumar Deepraj
                                            </h4>


                                            <a
                                                href={`${BaseUrl}${profiledata?.image}`}
                                                target="_blank"
                                                download
                                                className="btn btn-download mt-3"
                                            >
                                                Download Founder’s Profile
                                            </a>
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>




                    <div className="row pt-5">
                        <div className="col-md-6">
                            <div className="w-100 py-3">
                                <h4 className='roboto text-start'>Educational Background</h4>
                                <p className='pt-3 roboto'>Deepraj's educational journey laid a strong foundation for his legal career, beginning with his early schooling at Saint Teresa School in Bhagalpur at Bihar, where he completed his pre-primary education from LKG to Class I. This nurturing environment fostered his curiosity and love for learning.</p>
                                <p className='pt-4 roboto'>He then transitioned to Saint Joseph's Public School, Sitamarhi, Bihar, where he completed his primary education. During this time, Deepraj developed a keen interest in extracurricular activities, actively participating in various events that enhanced his leadership and teamwork skills. The transition of cities during his school days happened, as his father was a Government Servant, who used to get transferred.</p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={abouteducation} alt='image' className='h-100 w-100 image1 img-fluid' />
                        </div>
                        <div className="col-md-12">
                            <div className="w-100">
                                <p className='pt-3 roboto'>Kumar continued his academic pursuits at Nikhil Shyama DAV Public School in Sitamarhi, Bihar, where he stream was Science during his intermediate studies. Here, he was albeit average in academics but was more into co-curricular activities, which further shaped his ability to balance academics with personal interests and social engagement.</p>
                                <p className='pt-3 roboto'>These formative years instilled in him a strong sense of discipline, curiosity, and a passion for holistic development, qualities that have significantly contributed to his success as a legal professional.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row py-5 ">
                        <div className="row align-items-center p-0">
                            <div className="col-md-6">
                                <img src={college} alt='image' className='h-100 w-100 image2 img-fluid' />
                            </div>
                            <div className="col-md-6 pe-0">
                                <div className="w-100 py-3">
                                    <h4 className='roboto text-start'>College Days</h4>
                                    <p className='pt-4 roboto'>Deepraj’s college years at Lloyd Law College, Greater Noida, were pivotal in shaping his legal acumen and passion for human rights. Pursuing a Bachelor of Laws (B.A. LL.B.), he immersed himself in a rigorous academic environment that encouraged critical thinking and practical application of legal principles.</p>
                                    <p className='pt-4 roboto'>During his time at Lloyd, Deepraj actively participated in a variety of extracurricular activities, including moot court competitions, which sharpened his advocacy skills and provided a platform to engage with complex legal issues. He thrived in group exercises and community visits, emphasizing the importance of practical experience in understanding the law impact on society.</p>


                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="w-100">
                                <p className='pt-3 roboto'>During his formative academic years in the college, Deepraj played a pivotal role in organizing the second and third editions of the prestigious Prof. N.R. Madhava Menon SAARCLAW Mooting Competition and Law Students Conference. These experiences not only refined his organizational abilities but also facilitated invaluable interactions with eminent legal figures, including apex court justices, senior advocates, and academicians from various SAARC nations. Working closely with the late Padma Shree Prof. (Dr.) N.R. Madhava Menon significantly enriched his understanding of modern Indian legal education.</p>
                                <p className='pt-4 roboto'>In addition to his studies, Deepraj attended the 19th Human Rights Summer School in Bangladesh, a prestigious two-week residential program organized by Empowerment Through Law of the Common People (ELCOP). This enriching experience included formal teaching, training sessions, and collaborative exercises focused on human rights education. Under the guidance of esteemed faculty, including Prof. (Dr.) Mizanur Rahman, former Chairman of the National Human Rights Commission of Bangladesh, Deepraj gained invaluable insights into human rights advocacy and legal reform.</p>
                                <p className='pt-4 roboto'>
                                    This commitment to human rights and active engagement in legal practices during his college years not only enhanced Deepraj’s knowledge but also ignited a lifelong passion for contributing to justice and equality. His college experience laid a strong foundation for his future endeavors in the legal field.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row py-3 align-items-center">
                        <div className="col-md-6">
                            <img src={areaofexpertise} alt='image' className='h-100 w-100 image2 img-fluid' />
                        </div>
                        <div className="col-md-6">
                            <div className="w-100 py-3">
                                <h4 className='roboto text-start'>Areas of Expertise</h4>
                                <p className='pt-3 roboto'>Deepraj specializes in Civil, Commercial, and Corporate matters, with a focused representation in Criminal law limited to Appellate and Writ jurisdiction. His tenure at the Legislative Department, Ministry of Law and Justice, Government of India, provided him with the unique opportunity to contribute to important legislative measures, including:</p>
                                <ul className='pt-3 roboto text-start aboutlist'>
                                    <li >
                                        Fugitive Economic Offenders Bill
                                    </li>
                                    <li  >
                                        Assisted Reproductive Technology (ART) Bill
                                    </li>
                                    <li  >
                                        Surrogacy Amendment Bill
                                    </li>
                                    <li  >
                                        National Investigation Agency Amendment Bill
                                    </li>
                                </ul>
                                <p className='pt-3 roboto'>
                                    This experience has given Kumar a comprehensive understanding of the legal intricacies involved in legislative processes.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div className="row py-3 align-items-center">

                        <div className="col-md-6">
                            <div className="w-100 py-3">
                                <h4 className='roboto text-start'>Legal Practice</h4>
                                <p className='pt-3 roboto'>Throughout his career, Deepraj has represented a diverse clientele, including international firms and real estate entities across Delhi NCR and pan India. His approach is characterized by competitiveness and meticulous due diligence, ensuring that every client receives tailored solutions that meet their specific legal needs.</p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={expertise} alt='image' className='h-100 w-100 image1 img-fluid' />
                        </div>


                    </div>
                    <div className="row py-3 align-items-center">
                        <div className="col-md-6">
                            <img src={commitment} alt='image' className='h-100 w-100 image2 img-fluid' />
                        </div>
                        <div className="col-md-6">
                            <div className="w-100 py-3">
                                <h4 className='roboto text-start'>Commitment to Innovation</h4>
                                <p className='pt-3 roboto'>Kumar Deepraj is passionate about leveraging innovative practices in every facet of legal work. His unwavering commitment to excellence drives him to explore new methods and strategies that enhance client outcomes and streamline legal processes.</p>
                                <p className='pt-3 roboto'>
                                    With a firm belief in the transformative power of law, Kumar Deepraj is committed to advancing the legal profession and ensuring justice for all. His blend of expertise, innovation, and collaborative spirit positions him as a trusted advocate ready to tackle the challenges of today’s legal landscape.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About