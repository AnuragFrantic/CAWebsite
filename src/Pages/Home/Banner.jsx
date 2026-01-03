//import React from 'react'
import { useEffect, useState } from 'react'
// import bannerimage from '../../assets/images/banner4.jpg'
import bannercircle from '../../assets/images/bannercircle.svg'
import { BaseUrl } from '../../Api/BaseUrl';
import axios from 'axios';


const Banner = () => {
    const [bannerdata, setbannerdata] = useState([]);
    const handleget = async () => {
        await axios.get(`${BaseUrl}banner`).then(resp => {
            console.log(resp.data.data)
            setbannerdata(resp.data.data[0])
        })
    }
    useEffect(() => {
        handleget();
    }, [])

    // Function to ensure BaseUrl has a trailing slash and format the image URL properly
    const formatUrl = (baseUrl, imagePath) => {
        // Ensure the BaseUrl ends with a slash
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }

        // Replace backslashes with forward slashes for proper URL formatting
        const formattedImagePath = imagePath.replace(/\\/g, '/');

        // Return the combined URL
        return `${baseUrl}${formattedImagePath}`;
    };
    return (
        <>

            <section className="banner   d-flex align-items-center justify-content-center space position-relative "
                style={{
                    backgroundImage: bannerdata?.image ? `url(${formatUrl(BaseUrl, bannerdata?.image)})` : "none"
                }} >

                <img src={bannercircle} alt="image" className='position-absolute bannercircle img-fluid' />
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-md-6 col-12">
                            <div className="w-100 leftcol">
                                <h2 className="roboto ">
                                    {/* INTEGRITY.<br></br>
                                    TRANSPARENCY.<br></br>
                                    CONFIDENTIALITY. */}
                                    {bannerdata?.title && bannerdata?.title.split('.').map((line, index) => (
                                        line.trim() !== '' && ( // To prevent empty strings from being rendered
                                            <span key={index}>
                                                {line.trim()} {/* This removes any leading or trailing spaces */}
                                                <br />
                                            </span>
                                        )
                                    ))}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 position-relative rightcol ">
                            <div className="collast p-5 text-start">
                                {/* <p className="parahead roboto">
                                    Announcements
                                </p> */}
                                <h2 className='roboto'>
                                    {/* PERSONALIZED legal representation and COMPASSIONATE guidance, empowering one to navigate the legal challenges with confidence and achieve the best possible outcomes, with STRATEGIC solutions, and EMPHATIC support. */}
                                    {bannerdata?.para}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner