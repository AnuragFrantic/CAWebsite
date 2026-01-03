//import React from 'react'
import { useEffect, useState } from "react"
import axios from "axios"
import { BaseUrl } from "../../Api/BaseUrl"
import { Link, useParams } from "react-router-dom"
import calendaricon from '../../assets/images/calendar-icon.svg'
import {
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon,
    XIcon,
    TwitterShareButton
} from "react-share";
import Seo from "../../Seocomponent/Seo"
import moment from "moment"


const Blogsdetails = () => {
    const { url } = useParams();
    const [data, setData] = useState({});
    const [remainingBlogs, setRemainingBlogs] = useState([]);


    const handleget = async () => {
        try {
            const response = await axios.get(`${BaseUrl}blogs/${url}`);
            const currentBlog = response.data.data;
            console.log(currentBlog)
            setData(currentBlog);
            const allBlogsResponse = await axios.get(`${BaseUrl}blogs`);
            const allBlogs = allBlogsResponse.data.data;
            const filteredBlogs = allBlogs.filter(blog => blog.url !== url);
            setRemainingBlogs(filteredBlogs);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        handleget();
    }, [url]);

    const seoTitle = data.title;




    return (
        <>
            {
                data.title && (
                    <>
                        <Seo
                            title={seoTitle}
                            description={seoTitle}
                            keywords="blog, article, topic"
                            image={`${BaseUrl}${data.image}`}
                            url={window.location.href}
                        />




                        <section className="py-5 px-4 blogsdetails blogs">
                            <div className="container">

                                <div className="row align-items-center mb-4" >

                                    <div className="col-md-12">
                                        <div className="w-100">
                                            <div className="">
                                                <h3 className="roboto text-start">{data.title} </h3>
                                                <div className="d-flex gap-2 py-3">
                                                    <FacebookShareButton
                                                        url={window.location.href}
                                                        quote={seoTitle}
                                                        hashtag={`#Article`}
                                                    >
                                                        <FacebookIcon size={32} round />
                                                    </FacebookShareButton>

                                                    <WhatsappShareButton
                                                        url={window.location.href}
                                                        title={seoTitle}
                                                        separator=" - "
                                                    >
                                                        <WhatsappIcon size={32} round />
                                                    </WhatsappShareButton>

                                                    <LinkedinShareButton
                                                        url={window.location.href}
                                                        title={seoTitle}
                                                        summary={seoTitle}
                                                        source={window.location.href}
                                                    >
                                                        <LinkedinIcon size={32} round />
                                                    </LinkedinShareButton>

                                                    <TwitterShareButton
                                                        url={window.location.href}
                                                        title={seoTitle}
                                                    >
                                                        <XIcon size={32} round />
                                                    </TwitterShareButton>
                                                </div>

                                            </div>
                                            <div className="description roboto" dangerouslySetInnerHTML={{ __html: data.description }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row py-2 commonbox">
                                    <h3 className="roboto text-center py-2">
                                        Recent Posts
                                    </h3 >
                                    {remainingBlogs.slice(0, 3).map((itm) => {

                                        return (
                                            <div className="col-md-4 pt-4" key={itm.id}>
                                                <Link to={`/blog-details/${itm.url}`}>
                                                    <div className="w-100 h-100 blogbox p-3 shadow">
                                                        <img src={`${BaseUrl}${itm.image}`} alt={itm.title} className="blogboximage" />
                                                        <div className="roboto text-start pt-2">
                                                            <span className="blogsevent">{itm.type}</span>
                                                        </div>
                                                        <div className="text py-3">
                                                            <h2 className="roboto">{itm.title}</h2>
                                                        </div>

                                                        <div className="roboto blogspara">
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: itm?.description
                                                                        ?.split(' ')
                                                                        ?.slice(0, 40)
                                                                        ?.join(' ') + '...',
                                                                }}
                                                            />
                                                        </div>
                                                        {itm.publish_date != "undefined" && (
                                                            <div className="d-flex align-items-center gap-2 py-3">
                                                                <div className="icon">
                                                                    <img
                                                                        src={calendaricon}
                                                                        alt="calendar icon"
                                                                        className="icon img-fluid"
                                                                    />
                                                                </div>
                                                                <div className="text">
                                                                    <p className="blogdate roboto pt-2">
                                                                        {moment(itm.publish_date).format("D/M/YYYY")}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </section >
                    </>
                )
            }

        </>
    )
}

export default Blogsdetails;