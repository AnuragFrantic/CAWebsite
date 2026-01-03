/* eslint-disable react/prop-types */
//import React from 'react'




const AllBanner = (props) => {
    return (
        <>
            <section
                className="banner-area"
                style={{ backgroundImage: `url(${props.image})` }}
            >
                {/* <div className="overlay"></div> */}
                <div className="container overflow-hidden">
                    <div className="banner-wrapper">
                        <div className="banner-content">
                            <h1 className="section-title-lg mb-10 fade-slide bottom banner-area-heading" data-delay="0.2">
                                {props.title}
                            </h1>
                            <ul className="breadcrumbs-list fade-slide bottom pt-2" data-delay="0.4">
                                <li className="breadcrumbs-item">
                                    <a className="breadcrumbs-link" href="/">Home</a>
                                </li>
                                <li className="breadcrumbs-item">{props.subtitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AllBanner