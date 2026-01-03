//import React from 'react'
import { useEffect, useState } from 'react'
import calendaricon from '../../assets/images/calendar-icon.svg'
import axios from 'axios'
import { BaseUrl } from '../../Api/BaseUrl'
import { Link } from 'react-router-dom'
import Seo from '../../Seocomponent/Seo'
import moment from 'moment'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'


const BlogBox = () => {
    const [page, setpage] = useState("1")
    const [totalpage, settotalpage] = useState("1")
    const [data, setdata] = useState([]);
    const [totalrecords, settotalrecords] = useState("")
    const handleget = async () => {
        await axios.get(`${BaseUrl}blogs?page=${page}&limit=9`).then(resp => {
            console.log(resp.data)
            if (resp.data.error == 0) {
                setpage(resp.data.currentPage)
                settotalpage(resp.data.totalPages)
                settotalrecords(resp.data.totalRecords)
                setdata(resp.data.data)
            }

        })
    }
    useEffect(() => {
        handleget();
    }, [page])

    return (
        <>
            <Seo title="Latest Articles and Blogs on Contemporary issues | Chambers of Kumar Deepraj, Advocate" />
            <section className='py-5 blogs px-3'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="w-100 ">
                                <h2 className='roboto text-center'>Knowledge Vault</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row py-2 ">
                        {data.map((itm) => {
                            // Format the date for each blog item
                            // const formattedDate = new Date(itm.created_at).toLocaleDateString();

                            return (
                                <div className="col-md-4 pt-4" key={itm.id}>
                                    <Link to={`/blog-details/${itm.url}`}>
                                        <div className="w-100 h-100 blogbox p-3 shadow">
                                            <img src={`${BaseUrl}${itm.image}`} alt="blog" className="blogboximage" />
                                            <div className="roboto text-start pt-2">
                                                <a href="#" className="blogsevent">{itm.type}</a>
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

                    {
                        totalrecords > 9 &&
                        <div className="row pt-4">
                            <div className="col-md-12 ">
                                <button onClick={() => setpage(page - 1)} disabled={page == 1} className=" text-black paginationarrow  "><LeftOutlined /></button>
                                <span className=" px-3 roboto black">{page} / {totalpage}</span>
                                <button onClick={() => setpage(page + 1)} disabled={page == totalpage} className=" text-black paginationarrow "><RightOutlined /></button>
                            </div>
                        </div>
                    }



                </div>
            </section>
        </>
    )
}

export default BlogBox