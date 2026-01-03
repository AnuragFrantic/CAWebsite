//import React from 'react'

//import formimage from '../../assets/images/contact.jpg'
import formimage from '../../assets/images/contactformimage.png'
import { CloseOutlined, EnvironmentOutlined, } from '@ant-design/icons'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from 'react-icons/io5';
import modalgif from '../../assets/images/modalgif.gif'
import { Form } from 'react-router-dom';
import axios from 'axios';
import { BaseUrl } from '../../Api/BaseUrl';


const Info = () => {
    const [show, setShow] = useState(false);
    const [name, setname] = useState("");
    const [type, settype] = useState("query");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [message, setmessage] = useState("");
    const [success, setSuccess] = useState(true); // State to manage submission status


    const handleClose = () => {
        setShow(false);
        if (success) {
            resetForm(); // Reset form if successful
        }
    };
    const handleShow = () => setShow(true);
    const resetForm = () => {
        setname("");
        setemail("");
        setmobile("");
        setmessage("");
        settype("");
    }


    const handleSubmit = async (e) => {
        e.preventDefault();


        let requestdata = {
            name: name,
            type: type,
            email: email,
            mobile: mobile,
            message: message,
        };

        try {
            const resp = await axios.post(`${BaseUrl}contacts`, requestdata);
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
    return (
        <>
            <section className="info py-5 px-3">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-4 col-md-12 col-12  infomainbox">
                            <a href="https://maps.app.goo.gl/gg25uQkTumGgBpH97"
                                target="_blank"
                                rel="noopener noreferrer">
                                <div className="w-100 infobox  shadow p-5 position-relative pb-4 h-100 ">
                                    <div className="infocircle">
                                        <EnvironmentOutlined className='icon' />
                                    </div>
                                    <h1 className='roboto'>
                                        Office Location
                                    </h1>
                                    <p className="pt-2 text-center roboto">
                                        <a
                                            href="https://maps.app.goo.gl/gg25uQkTumGgBpH97"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            A/26, L.G.F., Jangpura Extension, New Delhi – 110 014
                                        </a>
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 infomainbox">
                            <a href="tel:+918447248119">
                                <div className="w-100 infobox shadow p-5 position-relative pb-4 h-100 ">
                                    <div className="infocircle">
                                        <FiPhone className='icon' />
                                    </div>
                                    <h1 className='roboto'>
                                        Phone Number
                                    </h1>
                                    <p className='pt-2 text-center roboto'>
                                        <a href="tel:+911143596371">
                                            +91 – 11 – 4359 6371
                                        </a>
                                    </p>
                                    <p className='pt-1 text-center roboto'>
                                        <a href="tel:+918447248119">
                                            +91 - 8447248119
                                        </a>
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 infomainbox">
                            <a href="mailto:mail@advkumardeepraj.com">
                                <div className="w-100 infobox shadow p-5 position-relative pb-4 h-100 ">
                                    <div className="infocircle">
                                        <IoMailOutline className='icon' />
                                    </div>
                                    <h1 className='roboto'>
                                        E-Mail Us
                                    </h1>
                                    <p className='pt-2 text-center roboto'>
                                        <a href="mailto:mail@advkumardeepraj.com" className="footertext roboto">
                                            mail@advkumardeepraj.com
                                        </a>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='info pb-5 px-3'>
                <div className="container formcontent shadow">
                    <div className="row p-4  align-items-center">
                        <div className="col-md-12 text-center">
                            <div className="w-100 ">
                                <p className='formtitle roboto'>Contact us</p>
                                <h2 className='formheading  roboto'>
                                    Get in touch
                                </h2>
                                <p className='roboto text-center py-2'>
                                    We’d love to hear from you! Whether you have a question, need legal assistance, or want to discuss potential collaborations, we are here to help.
                                </p>
                            </div>
                        </div>
                        <div className="row py-5">
                            <div className="col-md-8">
                                <div className="w-100">

                                    <h2 className='formheadinginner  roboto'>
                                        Schedule a Consultation
                                    </h2>
                                    <p className='roboto py-2'>
                                        To schedule a consultation with us, please fill out the form below, and we will get back to you as soon as possible.
                                    </p>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="row h-100">
                                            <div className="col-md-6">
                                                <div className="mt-4 text-start">

                                                    <input
                                                        type="text"
                                                        id="name"
                                                        value={name}
                                                        onChange={(e) => setname(e.target.value)}
                                                        className="form-control bg-transparent roboto" placeholder="Enter Your Name" required />

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mt-4 text-start">

                                                    <input
                                                        type="text"
                                                        id="email"
                                                        value={email}
                                                        onChange={(e) => setemail(e.target.value)}
                                                        className="form-control bg-transparent roboto" placeholder="Enter Your Email ID" required />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="mt-4 text-start">
                                                    <input
                                                        type="tel"
                                                        id="mobile"
                                                        value={mobile}
                                                        onChange={(e) => {
                                                            // Ensure only digits are entered
                                                            const value = e.target.value;
                                                            if (/^\d*$/.test(value) && value.length <= 10) {
                                                                setmobile(value);
                                                            }
                                                        }}
                                                        className="form-control bg-transparent roboto"
                                                        placeholder="Enter Your Mobile Number"
                                                        maxLength="10" // Prevents typing more than 10 characters on browsers that respect `maxLength`
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="mt-4 text-start">
                                                    <textarea
                                                        id="message"
                                                        value={message}
                                                        onChange={(e) => setmessage(e.target.value)}
                                                        className="form-control bg-transparent roboto" style={{ height: '200px' }} placeholder="Enter Your Message" required></textarea>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className='mt-4 text-left'>
                                                    <button type='submit' className='contactbtn px-5 py-2 roboto'>SUBMIT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="w-100">
                                    <img src={formimage} alt='image' className='img-fluid contactimg' />
                                </div>
                            </div>
                        </div>

                        {/* Popup for the confirmation message */}
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
                                            Thank you for taking your valuable time and filing out the form.
                                        </p>
                                        <p className='roboto text-center'>
                                            We take your privacy seriously. Any information you provide will be kept confidential and used solely for the purpose of responding to your inquiry.
                                        </p>
                                        <p className='roboto text-center'>
                                            Thank you for considering us. We look forward to assisting you!
                                        </p>
                                    </div>
                                </Modal.Body>

                            </Modal>
                        </div>

                    </div>
                </div>
            </section>


        </>
    )
}

export default Info