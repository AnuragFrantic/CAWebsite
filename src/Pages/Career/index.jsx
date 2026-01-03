//import React from 'react'

import AllBanner from "../../Component/AllBanner"
//import career from '../../assets/images/career.jpg'
import career from '../../assets/images/careernew.png'
import careerbox1 from '../../assets/images/careerbox1.jpg'
import careerbox2 from '../../assets/images/collabrativeculture.jpg'
import careerbox3 from '../../assets/images/careerbox3.jpg'
import careerbox4 from '../../assets/images/careerbox4.jpg'
import { useEffect, useState } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CloseOutlined, LinkedinFilled } from "@ant-design/icons"
import { Button, Form, Modal } from "react-bootstrap"
import axios from "axios"
import { BaseUrl } from "../../Api/BaseUrl"
// import Loader from "../../Component/Loader"
import modalgif from '../../assets/images/modalgif.gif'
import Seo from "../../Seocomponent/Seo"



const Career = () => {
    // const [loading, setloading] = useState(false)
    const [name, setname] = useState("");
    const [type, settype] = useState("career");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [qualification, setqualification] = useState("");
    const [experience, setexperience] = useState("");
    const [image, setimage] = useState("");
    const [icon, seticon] = useState("");
    const [success, setSuccess] = useState(true); // State to manage submission status
    const [show, setShow] = useState(false);

    // const [success, setSuccess] = useState(true); // State to manage submission status
    const handleimage = (e) => {
        let selectedimage = e.target.files[0]
        setimage(selectedimage)
    }
    const handleicon = (e) => {
        let selectedicon = e.target.files[0]
        seticon(selectedicon)
    }

    const handleClose = () => {
        setShow(false);
        if (success) {
            resetForm(); // Reset form if successful
        }
    };
    const handleShow = () => setShow(true);



    const handlesubmit = async (e) => {
        // setloading(true)
        e.preventDefault();
        let formdata = new FormData();
        formdata.append("name", name);
        formdata.append("type", type);
        formdata.append("email", email);
        formdata.append("mobile", mobile);
        formdata.append("qualification", qualification);
        formdata.append("experience", experience);
        formdata.append("image", image);
        formdata.append("icon", icon);
        try {
            const resp = await axios.post(`${BaseUrl}contacts`, formdata);
            console.log(resp);
            setSuccess(true); // Set success state to true
            handleShow(); // Show the modal on successful submission
            resetForm(); // Reset form if successful

        } catch (err) {
            console.error(err);
            setSuccess(false); // Set success state to false
            // handleShow(); // Show the modal even on error
        }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: false, // Whether the animation should happen only once
        });
    }, []);
    const resetForm = () => {
        setname("");
        settype("query");
        setemail("");
        setmobile("");
        setqualification("");
        setexperience("");
        setimage("");
        seticon("");

        // Reset file inputs by setting them to null
        document.getElementById("cv-upload").value = null;
        document.getElementById("Research Paper/Articles/Blogs").value = null;
    };
    return (
        <>
            {/* {loading && <Loader />} */}
            <Seo title=" Career / Law Office of Chambers of Kumar Deepraj" />
            <AllBanner title="Career" subtitle="career" image={career} />
            <section className="career py-5 px-3 ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 py-4">
                            <div className="w-100">
                                <h2 className='formheading roboto'>
                                    Career
                                </h2>
                                <h2 className="subtitle roboto" data-delay="0.4"> Join a Team Committed to Excellence <span className="bluecolor block">Innovation, and Social Impact</span></h2>

                                <p className="pt-2 pb-2 roboto parahead ">
                                    Join Our Team of Legal Innovators
                                </p>
                                <p className="pb-2 roboto ">
                                    Here, we believe that our greatest asset is our people. We are committed to creating a dynamic and inclusive work environment that fosters professional growth, collaboration, and excellence. If you are passionate about law and eager to make a meaningful impact, we invite you to explore career opportunities with us.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 maincolumn py-4">
                            <div className="w-100  careerboxouter shadow">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="w-100">
                                            <h4 className="roboto">
                                                Commitment to Professional Development
                                            </h4>
                                            <p className="roboto careerbox">
                                                We prioritize continuous learning and offer various opportunities for training, mentorship, and career advancement. Our team members are encouraged to attend workshops, seminars, and conferences to stay ahead in the ever-evolving legal landscape.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="w-100 " data-aos="zoom-in">
                                            <img src={careerbox1} alt="image" className="careerimg img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 maincolumn py-4">
                            <div className="w-100  careerboxouter shadow">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="w-100">
                                            <img src={careerbox2} alt="image" className="careerimg img-fluid" data-aos="zoom-in" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="w-100">
                                            <h4 className="roboto">
                                                Collaborative Culture
                                            </h4>
                                            <p className="roboto careerbox">
                                                We foster a supportive and collegial atmosphere where diverse perspectives are valued. Our team works closely together, sharing knowledge and insights to provide the best possible outcomes for our clients.
                                            </p>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="row">
                        <div className="col-md-12 maincolumn py-4">
                            <div className="w-100  careerboxouter shadow">
                                <div className="row align-items-center">

                                    <div className="col-md-6">
                                        <div className="w-100">
                                            <h4 className="roboto">
                                                Focus on Work-Life Balance
                                            </h4>
                                            <p className="roboto careerbox">
                                                We understand the importance of maintaining a healthy work-life balance. Our flexible work arrangements and supportive policies ensure that our team members can thrive both personally and professionally.
                                            </p>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="w-100">
                                            <img src={careerbox3} alt="image" className="careerimg img-fluid" data-aos="zoom-in" />
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="row">
                        <div className="col-md-12 maincolumn py-4">
                            <div className="w-100  careerboxouter shadow">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="w-100">
                                            <img src={careerbox4} alt="image" className="careerimg img-fluid" data-aos="zoom-in" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="w-100">
                                            <h4 className="roboto">
                                                Impactful Work
                                            </h4>
                                            <p className="roboto careerbox">
                                                Our firm is dedicated to making a difference. Whether through pro bono work or community engagement, our team members have the opportunity to contribute to meaningful causes and advocate for justice.
                                            </p>

                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="row">
                        <div className="col-md-12 bg-white rounded-3"   >{/* style={{ boxShadow: "0 0 10px " }} */}
                            <div className="w-100 applicationform px-3 py-3">

                                {/* <div className="formdiv roboto">
                                    Basic Details
                                </div> */}
                                <Form onSubmit={handlesubmit}>
                                    <div className="row py-4">
                                        <div className="col-md-12">
                                            <p className="roboto text-start py-3">
                                                If you are ready to take the next step in your legal career, we would love to hear from you! To apply for a position, please submit your resume and a cover letter detailing your experience and why you would be a great fit for our team


                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label roboto">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={name}
                                                onChange={(e) => setname(e.target.value)}
                                                className="form-control bg-transparent roboto" placeholder="Enter Your Name" required />
                                        </div>



                                        <div className="col-md-6">
                                            <label htmlFor="name" className="form-label roboto">Email ID</label>
                                            <input
                                                type="email"
                                                id="name"
                                                value={email}
                                                onChange={(e) => setemail(e.target.value)}
                                                className="form-control bg-transparent roboto" placeholder="Enter Your Email" required />
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <label htmlFor="mobile" className="form-label roboto">Mobile No.</label>
                                            <input
                                                type="tel"
                                                id="mobile"
                                                value={mobile}
                                                onChange={(e) => {
                                                    // Ensure only digits are entered and limit length to 10
                                                    const value = e.target.value;
                                                    if (/^\d*$/.test(value) && value.length <= 10) {
                                                        setmobile(value);
                                                    }
                                                }}
                                                className="form-control bg-transparent roboto"
                                                placeholder="Enter Your Mobile Number"
                                                maxLength="10" // Extra validation for max length in compatible browsers
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <label htmlFor="name" className="form-label roboto">Qualification</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={qualification}
                                                onChange={(e) => setqualification(e.target.value)}
                                                className="form-control bg-transparent roboto" placeholder="Maximum Qualification" required />

                                        </div>
                                        <div className="col-md-6 mt-3">
                                            <label htmlFor="name" className="form-label roboto">Experience</label>
                                            <input
                                                type="text"
                                                id="name"
                                                value={experience}
                                                onChange={(e) => setexperience(e.target.value)}
                                                className="form-control bg-transparent roboto" placeholder="Total Work Experience" required />

                                        </div>


                                        <div className="col-md-6 file mt-3">
                                            <label htmlFor="cv-upload" className="form-label roboto"> Upload CV</label>
                                            <input
                                                type="file"
                                                className="form-control bg-transparent custom-input roboto"
                                                id="cv-upload"
                                                onChange={(e) => handleimage(e)}
                                                name="cv"
                                                accept=".pdf,.doc,.docx"
                                                required  // This restricts file types to common CV formats
                                            />
                                        </div>
                                        <div className="col-md-6 file mt-3">
                                            <label htmlFor="cv-upload" className="form-label roboto">Research Paper/Articles/Blogs</label>
                                            <input
                                                type="file"
                                                className="form-control bg-transparent custom-input roboto"
                                                id="Research Paper/Articles/Blogs"
                                                onChange={(e) => handleicon(e)}
                                                name="reaearchpaper"
                                                accept=".pdf,.doc,.docx"
                                                required // This restricts file types to common CV formats
                                            />
                                        </div>
                                        <div className="col-md-12 pt-4 file text-center">
                                            <button className="formbtn px-5 py-2 roboto rounded-3">SUBMIT</button>
                                        </div>
                                    </div>
                                </Form>
                                <div className="">
                                    <Modal
                                        show={show}
                                        onHide={handleClose}
                                        backdrop="static"
                                        keyboard={false}
                                        className='infos'
                                    >
                                        <Modal.Header >
                                            <Modal.Title className='justify-end'>
                                                <Button variant="secondary" onClick={handleClose} className='roboto closebutton'><CloseOutlined /></Button>
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="d-flex justify-content-center">
                                                <img src={modalgif} className='infopopupimgae' />
                                            </div>
                                            <div className="w-100 px-4 py-2">
                                                <p className='roboto text-center'>
                                                    Thank you for taking your valuable time and filling out the form.
                                                </p>
                                                <p className='roboto text-center'>
                                                    We take your privacy seriously. Any information you provide will be kept confidential and used solely for the purpose of responding to your inquiry.
                                                </p>
                                                <p className='roboto text-center'>
                                                    Thank you for considering us. We look forward to assisting you and will get in touch soon!
                                                </p>
                                            </div>
                                        </Modal.Body>

                                    </Modal>
                                </div>
                                <div className="row py-4">
                                    <p className="roboto text-start parahead">
                                        Commitment to Diversity and Inclusion
                                    </p>
                                    <p className="roboto text-start pt-2">
                                        We are committed to fostering a diverse and inclusive workplace. We believe that a variety of backgrounds and perspectives enriches our firm and enhances our ability to serve our clients. We welcome applications from individuals of all backgrounds and experiences.</p>
                                </div>
                                <div className="row py-4">
                                    <p className="roboto text-start parahead">
                                        Connect With Us
                                    </p>
                                    <p className="roboto text-start pt-1">
                                        Stay connected with us for future career opportunities and updates by connecting with us on our <a href="https://www.linkedin.com/company/chambers-of-kumar-deepraj/" target="_blank" className="linkdinicon"><LinkedinFilled /></a>

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

export default Career