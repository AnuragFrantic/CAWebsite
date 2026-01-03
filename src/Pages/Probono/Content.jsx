import axios from 'axios';
//import React from 'react'
import { BaseUrl } from '../../Api/BaseUrl';
import focus1 from '../../assets/images/probonofocus1.png'
import focus2 from '../../assets/images/probonofocus2.png'
import focus3 from '../../assets/images/probonofocus3.png'
import focus4 from '../../assets/images/probonofocus4.png'
import legalsupport from '../../assets/images/legalsupport.png'
import education from '../../assets/images/education.png'
import { useEffect, useState } from 'react';

const Content = () => {
    const [data, setdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BaseUrl}probono`).then(resp => {
            console.log(resp.data.data);
            setdata(resp.data.data[0]);
        })
    }
    useEffect(() => {
        handleget();
    }, [])
    const arr = [
        {
            image: focus1,
            title: "Discrimination Cases",
            para: "Addressing issues related to discrimination based on race, gender, sexual orientation, and disability."
        },
        {
            image: focus2,
            title: "Housing Rights",
            para: " Advocating for individuals facing unlawful eviction or discrimination in housing."
        },
        {
            image: focus3,
            title: "Legal Aid for Marginalized Communities",
            para: "Supporting indigenous populations, refugees, and other marginalized groups in asserting their rights."
        },
        {
            image: focus4,
            title: "Civil Liberties",
            para: " Defending the rights to freedom of expression, assembly, and association."
        }
    ]
    return (
        <>
            <section className='probono px-3'>
                <div className="container">
                    <div className="row commonbox">
                        <div className="col-md-12">
                            <div className="w-100 py-5">
                                <h2 className='formheading roboto'>
                                    {data?.title}
                                </h2>
                                <p className='roboto py-2'>
                                    <div dangerouslySetInnerHTML={{ __html: data?.description }} />

                                </p>
                                <div className="row pt-2">
                                    <div className="col-md-12 focus">
                                        <div className="w-100">
                                            <h4 className="roboto text-center black">Our Focus on Human Rights</h4>
                                            <p className='roboto text-start pt-3'>
                                                Human rights are the basic rights and freedoms that belong to every individual, regardless of nationality, gender, ethnicity, or religion. Unfortunately, many people face injustices that violate these rights, often due to socio-economic disadvantages. Our pro bono efforts target various areas, including:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row probonobox ">
                                    {
                                        arr.map((itm) => (
                                            <>
                                                <div className="col-md-4 pt-5" >
                                                    <div className="w-100 text-start shadow h-100">
                                                        <img src={itm.image} alt="image" className="img-fluid" />
                                                        <h5 className="roboto text-start pt-4">{itm.title}</h5>

                                                        <p
                                                            className="roboto text-start pt-3 "

                                                        >
                                                            {itm.para}
                                                        </p>



                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
                                </div>
                                <div className="row pt-5" >
                                    <div className="col-md-12">
                                        <div className="w-100">
                                            <h5 className='roboto text-start'>Our Approach </h5>
                                            <p className='roboto pt-2'>
                                                Our approach to pro bono cases is grounded in compassion and commitment. We provide:
                                            </p>



                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-3 probonobox">
                                    <div className="col-md-4 pt-2">
                                        <div className="w-100 text-start shadow h-100">
                                            <img src={legalsupport} alt="image" className="img-fluid" />
                                            <h5 className="roboto text-start pt-4">Comprehensive Legal Support</h5>

                                            <p
                                                className="roboto text-start pt-3 "

                                            >
                                                From initial consultations to court representation, we ensure that clients receive thorough and effective legal assistance.
                                            </p>



                                        </div>
                                    </div>
                                    <div className="col-md-4 pt-2">
                                        <div className="w-100 text-start shadow  h-100">
                                            <img src={education} alt="image" className="img-fluid" />
                                            <h5 className="roboto text-start pt-4">Awareness and Education</h5>

                                            <p
                                                className="roboto text-start pt-3 "

                                            >
                                                We actively engage in raising awareness about human rights issues, educating clients and communities about their rights and available resources.
                                            </p>



                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <h5 className="roboto text-start ">
                                        Get Involved
                                    </h5>
                                    <p className="roboto text-start pt-2">
                                        If you are an individual or organization in need of pro bono legal assistance related to human rights, we invite you to reach out to us. Together, we can work toward ensuring that every individual’s rights are respected and upheld. Join us in our mission to create a more just and equitable society.</p>
                                </div>
                                <div className="row py-2">

                                    <p className="roboto text-start fw-bold black">

                                        Contact us today to learn more about our pro bono services and how we can help you!
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

export default Content