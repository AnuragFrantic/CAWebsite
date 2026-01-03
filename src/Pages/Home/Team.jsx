
//import teamimg from '../../assets/images/teamimage.jfif'
import { ArrowRightOutlined } from '@ant-design/icons';
// import teamnew from '../../assets/images/teamnew.jpeg'
// import teamnew from '../../assets/images/teamremovebg.png'
import iconlogo from "../../assets/images/iconlogo.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Team = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Whether the animation should happen only once
        });
    }, []);

    return (
        <>
            <section className="about-area-3  team position-relative">

                <div className="container  position-relative text-white z-1 py-3">
                    <div className="row gy-4 align-items-center teamarea">

                        {/* <div className="col-xl-6 col-12">
                            <div className="w-100">
                                <img src={teamnew} alt='image' className='teamimg img-fluid' />
                            </div>
                        </div> */}
                        <div className="col-xl-12 col-12 text-center">
                            <div className="w-100 h-100 cards  pt-3 pb-1">
                                {/* <h5 className="title roboto">
                                    KUMAR DEEPRAJ</h5> */}
                                <img src={iconlogo} className='' style={{ width: "80px" }} alt="" />
                                {/* <h2 className="subtitle roboto pb-3"> We Are Professional <span className="bluecolor">Law Firm Since 2012</span></h2> */}
                                <div className="w-100 text-center">
                                    <p className='roboto pt-2 pb-1 text-center'>
                                        <strong>Chambers of Kumar Deepraj</strong> is a litigation and advisory chamber based in Delhi, offering thoughtful and strategic legal support across a range of practice areas. Led by Advocate Kumar Deepraj, the chamber regularly handles matters involving civil and commercial disputes, arbitration, tenancy and property issues, and corporate advisory. Our work is built on a foundation of clear communication, detailed legal research, and a strong sense of responsibility towards every client we represent.

                                    </p>
                                    <p className='roboto pt-2 pb-1 text-center'>With experience across various courts, tribunals, and arbitral forums in India, and a growing involvement in cross-border legal matters, we aim to provide counsel that is not just legally sound but also practical and solution-oriented. We often collaborate with foreign counsels and institutions to advise on matters with international dimensions. At its core, the chamber functions on principles of trust, clarity, and discretion—treating every matter with the seriousness and attention it deserves.</p>

                                </div>
                            </div>
                            <div className="w-100 text-center">
                                <Link to='/about-us'>
                                    <button className='teambutton roboto px-5 py-3 mt-3'>OUR STORY <ArrowRightOutlined /></button>
                                </Link>

                                {/* <Link to='/about-us'>
                                    <ArrowRightOutlined className='teamarrow' />

                                </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team