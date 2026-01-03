// import React, { useEffect, useState } from 'react'
import AllBanner from '../../Component/AllBanner'
import Seo from '../../Seocomponent/Seo';
import career from '../../assets/images/careernew.png'
// import axios from 'axios'
// import { BaseUrl } from '../../Api/BaseUrl';
// import { useEffect, useState } from 'react';
import Insightbox from './Insightbox';
const Insighthub = () => {
    // const [data, setdata] = useState([])
    // const handleget = async () => {
    //     await axios.get(`${BaseUrl}insights`).then(resp => {
    //         console.log(resp.data.data)
    //         setdata(resp.data.data[0])
    //     })
    // }
    // useEffect(() => {
    //     handleget();
    // }, [])
    return (
        <>
            <Seo title="Case Analysis of the Judgments of High Courts and Supreme Court | Chambers of Kumar Deepraj, Advocate" />
            <AllBanner title="Insight Hub" subtitle="Insight Hub" image={career} />
            <section className='insighthub pt-4 px-3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 ">
                                <h2 className='roboto text-center'>Insight Hub</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100">
                                <p className='roboto pt-3'>

                                    Stay informed with our comprehensive summary of the latest judgments from the High Courts and the Supreme Court of India. Our dedicated legal team meticulously curates key rulings, providing you with insights into important legal precedents and developments that could impact your rights and interests.     </p>
                                <p className='pt-2 roboto'>
                                    In an ever-evolving legal landscape, understanding recent judicial decisions is crucial for legal practitioners, businesses, and individuals alike. Our summaries cover a range of topics, including constitutional law, civil and criminal matters, commercial disputes, and more, ensuring that you remain up-to-date on significant case law.
                                </p>
                                <p className='pt-2 roboto'>
                                    Each entry includes a concise overview of the judgment, highlighting the key issues, the court’s reasoning, and its implications. Whether you are a legal professional seeking to enhance your knowledge or a layperson wanting to understand how these rulings may affect you, our updates are designed to provide clarity and accessibility.
                                </p>
                                <p className='pt-2 roboto' >
                                    Join us in navigating the complexities of Indian law. Our commitment to delivering timely and relevant legal information empowers you to make informed decisions and stay ahead in today’s fast-paced legal environment.
                                </p>
                                <p className='pt-2 roboto'>
                                    Check back regularly for the latest updates and enrich your understanding of the judicial landscape in India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Insightbox />
            </section >


        </>
    )
}

export default Insighthub