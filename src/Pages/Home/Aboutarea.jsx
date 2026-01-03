//import React from 'react'
//import aboutarea from '../../assets/images/ab-thumb-3.webp'
// import aboutarea from '../../assets/images/aboutus.jpg'
// import quotes from '../../assets/images/quotes.png'
import quotesblue from '../../assets/images/quote.png'
import quotesdiv from '../../assets/images/quotesdiv.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BaseUrl } from '../../Api/BaseUrl';

const Aboutarea = () => {
    const [quotesdata, setquotesdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BaseUrl}quote`).then(resp => {
            console.log(resp.data.data)
            setquotesdata(resp.data.data[0])
        })
    }
    useEffect(() => {
        handleget()
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Whether the animation should happen only once
        });
    }, []);
    return (
        <>

            <section className="about-area-3 pt-150 pb-150 px-3 aboutarea">
                <div className="container roboto">
                    <div className="row gy-4 align-items-center firstrow">
                        <div className="col-xl-5 col-lg-5 col-md-12" data-aos="zoom-in">
                            <div className='w-100 leftcol '>
                                <div className="div leftcolinner">
                                    <img src={quotesblue} alt='image' />
                                    <h5 className='roboto black'>
                                        {/* “A Lawyer’s professional ethics bars him from judging his clients. One has to go by the documents and is obliged to provide the best tailored strategy in the interest for his client” */}
                                        {quotesdata?.quotes}
                                    </h5>
                                    <h4 className='black py-2 mt-3'>
                                        Kumar Deepraj
                                    </h4>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className='circleimage'>
                                    <img src={quotesdiv} alt='image' className='quotesdivimage' />
                                </div>
                                {/* <div className="text black">
                                    <h3 className='roboto quotestext '>Advocate <span className='d-block'>Kumar Deepraj</span></h3>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-12">
                            <div className="about-right-3">
                                <div className="aboutinnerheading roboto py-3">
                                    <h3 className="roboto firstheading">OBJECTIVE</h3>
                                    <p className="roboto">
                                        {/* To provide unwavering advocacy and expert legal guidance, ensuring justice and protection of rights for every client, while upholding the highest ethical standards and fostering trust through transparent communication and compassionate support.*/}
                                        {quotesdata?.objective}
                                    </p>
                                </div>

                                <div className="aboutinner aboutinnerheading roboto pb-3">
                                    <h3 className="roboto">PURPOSE</h3>
                                    <p className="roboto">
                                        {/* Our Commitment extends beyond mere representation. We strive to build lasting relationships based on trust, integrity, and transparency. Whether one is facing a legal challenge, seeking advice, or looking to protect your rights, the office is here to guide you every step of the way. */}
                                        {quotesdata?.purpose}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Aboutarea
