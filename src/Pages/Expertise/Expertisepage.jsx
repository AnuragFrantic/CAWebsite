//import React from 'react'
import AllBanner from '../../Component/AllBanner'
import career from '../../assets/images/careernew.png'
import arbitration from '../../assets/images/expertisearbitration.png'
import commercial from '../../assets/images/commercial.png'
import realstate from '../../assets/images/realestate.png'
import criminal from '../../assets/images/criminal.png'
import bankruptcy from '../../assets/images/bankruptcy.png'
import corporate from '../../assets/images/corporatelaw.png'
import success from '../../assets/images/success.png'
import { ArrowRightOutlined } from '@ant-design/icons'
// import { Link, useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import { BaseUrl } from '../../Api/BaseUrl'

const Expertisepage = () => {
    // const { url } = useParams();
    const data = [
        {
            icon: arbitration,
            title: "Arbitration",
            link: "/arbitration",
            short_description: "We excel in Arbitration, providing swift and effective solutions for resolving disputes outside the courtroom. Our skilled attorneys navigate the intricacies of the arbitration process, ensuring your interests are fiercely represented. With a focus on achieving favourable outcomes, we help you save time and resources while securing your rights.",
        },
        {
            icon: commercial,
            title: "Civil and Commercial law",
            link: "/civil",
            short_description: "We bring clarity and confidence to Civil and Commercial Law. Whether you're facing contract disputes, property issues, or complex business transactions, we are here to safeguard your interests. We combine strategic insight with a proactive approach, ensuring that your legal challenges are met with effective, tailored solutions. Let us empower your business journey.",
        },
        {
            icon: realstate,
            title: "Consumer protection and real estate",
            link: "/consumer",
            short_description: "We are committed to safeguarding your rights in Consumer Protection and Real Estate matters. We navigate complex legal landscapes to resolve disputes, ensuring compliance and fair treatment. Whether you’re facing issues with products, services, or property transactions, we provide tailored solutions to protect your interests and investments.",
        },
        {
            icon: criminal,
            title: "Quasi-criminal matters",
            link: "/criminal",
            short_description: "We specialize in Quasi Criminal Matters, including cases related to dishonour of negotiable instruments (cheques) under the Negotiable Instruments Act 1881 and the quashing of FIRs. We provide expert legal representation and strategic guidance to protect your rights and ensure fair outcomes in these complex issues.",
        },
        {
            icon: bankruptcy,
            title: "Insolvency and Bankruptcy law",
            link: "/bankruptacy",
            short_description: " We specialize in Insolvency and Bankruptcy Law, guiding individuals and businesses through financial distress with expertise and empathy. Our dedicated team navigates the complexities of the Insolvency and Bankruptcy Code, ensuring effective resolution strategies, protecting your rights, and facilitating a path toward recovery and stability. Let us support you in reclaiming your financial future.",
        },
        {
            icon: corporate,
            title: "Company and Corporate law",
            link: "/corporate",
            short_description: "We empower businesses with expert guidance in Company and Corporate Law. We streamline the complexities of corporate formation, compliance, and transactions, enabling you to focus on growth. Whether you're a startup or a multinational, we provide tailored solutions to navigate legal challenges and achieve your business objectives.",
        },
        {
            icon: success,
            title: "Matrimonial and succession",
            link: "/matrimonial",
            short_description: "We understand that family matters are deeply personal. We specializes in Matrimonial and Succession Law, guiding you through the intricacies of divorce, child custody, and inheritance with sensitivity and skill. We are dedicated to crafting tailored solutions that honor your values and protect your family's legacy. Let us support you through these pivotal moments with compassion and clarity.",
        }
    ];
    // const [data, setdata] = useState([]);
    // const handleget = async () => {
    //     await axios.get(`${BaseUrl}expertise`).then(resp => {
    //         console.log(resp.data.data)
    //         setdata(resp.data.data)
    //     })
    // }
    // useEffect(() => {
    //     handleget();
    // }, [])
    return (
        <>
            <AllBanner title="Expertise" subtitle="Expertise" image={career} />
            <section className='py-5 px-3 expertise '>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <h2 className='roboto text-center'>
                                    Expertise
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row expertisebox commonbox">
                        {
                            data.map((itm) => (
                                <div className="col-md-4 pt-5" key={itm._id}>
                                    <div className="w-100 shadow  h-100">
                                        <div className="text-start">
                                            {/* <img src={`${BaseUrl}${itm.icon}`} alt='icon' className='text-start' /> */}
                                            <img src={itm.icon} alt='icon' className='text-start' />
                                        </div>
                                        <h5 className="roboto pt-4">
                                            {itm.title}
                                        </h5>
                                        <p className="roboto pt-3">{itm.short_description}</p>
                                        {/* <Link to={`/expertise/${itm.url}`}>
                                            <div className='expertisetextcircle mt-2'>
                                                <ArrowRightOutlined />
                                            </div>
                                        </Link> */}
                                        <a href={itm.link}>
                                            <div className='expertisetextcircle mt-2'>
                                                <ArrowRightOutlined />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Expertisepage