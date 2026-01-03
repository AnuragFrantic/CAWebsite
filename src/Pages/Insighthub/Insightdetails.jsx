//import React from 'react'
// import AllBanner from "../../Component/AllBanner"
// import blogsbanner from '../../assets/images/blog-banner-bg.webp'
import { useEffect, useState } from "react"
import axios from "axios"
import { BaseUrl } from "../../Api/BaseUrl"
import { Link, useParams } from "react-router-dom"
import Seo from "../../Seocomponent/Seo"


const Insightdetails = () => {
    const { url } = useParams();
    const [data, setData] = useState([]);
    const [remainingBlogs, setRemainingBlogs] = useState([]);

    // Fetch the current blog details and all other blogs
    const handleget = async () => {
        try {
            const response = await axios.get(`${BaseUrl}legal-update/${url}`);
            const currentBlog = response.data.data;

            // Set current blog data
            setData(currentBlog ? [currentBlog] : []);

            // Fetch all blogs and filter out the current one
            const allBlogsResponse = await axios.get(`${BaseUrl}legal-update`);
            const allBlogs = allBlogsResponse.data.data;
            const filteredBlogs = allBlogs.filter(blog => blog.url !== url);

            // Set remaining blogs
            setRemainingBlogs(filteredBlogs);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        handleget();
    }, [url]);

    // Ensure data is loaded before setting the title
    const seoTitle = data?.length > 0
        ? `Case Comments: Case Analysis of - ${data[0]?.title || 'Default Title'} - | Chambers of Kumar Deepraj, Advocate`
        : 'Default Title | Default Type | Chambers of Kumar Deepraj, Advocate';
    return (
        <>
            {/* <AllBanner title="Knowledge Vault Details" subtitle="Knowledge Vault Details" image={blogsbanner} /> */}
            <Seo title={seoTitle} />
            <section className="py-5 px-4 blogsdetails blogs">
                <div className="container">
                    {/* Display Current Blog */}
                    {data.map((itm) => (
                        <div className="row align-items-center mb-4" key={itm.id}>
                            <div className="col-md-12">
                                <div className="w-100">
                                    <h3 className="roboto text-start">{itm.title}</h3>
                                    <p className="roboto text-start py-2 black shortpara">{itm.short_description}</p>
                                    <div className="description roboto" dangerouslySetInnerHTML={{ __html: itm.description }} />
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Display Remaining Blogs */}
                    <div className="row py-4">
                        <h3 className="roboto text-center py-2">
                            Recent Posts
                        </h3 >
                        {remainingBlogs.slice(0, 3).map((itm) => {
                            return (
                                <div className="col-md-4" key={itm.id}>
                                    <Link to={`/legal-update/${itm.url}`}>
                                        <div className="w-100 h-100 blogbox p-3 shadow">
                                            <img src={`${BaseUrl}${itm.image}`} alt={itm.title} className="blogboximage" />

                                            <div className="text py-3">
                                                <h2 className="roboto">{itm.title}</h2>
                                            </div>

                                            <div className="roboto blogspara">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: itm?.description
                                                            ?.split(' ')
                                                            ?.slice(0, 30)
                                                            ?.join(' ') + '...',
                                                    }}
                                                />
                                            </div>

                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Insightdetails;