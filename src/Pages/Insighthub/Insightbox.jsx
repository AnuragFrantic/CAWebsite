//import React from 'react'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { BaseUrl } from "../../Api/BaseUrl"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const Insightbox = () => {
    const [page, setpage] = useState("1")
    const [totalpage, settotalpage] = useState("1")
    const [totalrecords, settotalrecords] = useState("")
    const [data, setdata] = useState([])
    const handleget = async () => {
        await axios.get(`${BaseUrl}legal-update?page=${page}&limit=9`).then(resp => {
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
            <section className='pb-5 blogs px-3'>
                <div className="container ">
                    <div className="row pt-3 ">
                        {data.map((itm) => {
                            return (
                                <div className="col-md-4 pt-3" key={itm.id}>
                                    <Link to={`/legal-update/${itm.url}`}>
                                        <div className="w-100 h-100 blogbox p-3 shadow">
                                            <img src={`${BaseUrl}${itm.image}`} alt="blog" className="blogboximage" />

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

export default Insightbox