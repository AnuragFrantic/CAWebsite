
import { useState, useEffect } from "react";
// import disclaimer from '../assets/images/disclaimer.png'

const Disclaimer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Close the popup
    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem('modalclose', true);
    };

    // useEffect to show the popup 6 seconds after the page loads
    useEffect(() => {

        const isModalClosed = localStorage.getItem("modalclose") === "true";

        if (!isModalClosed) {
            // Show the popup after 6 seconds if modal is not closed
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);

            // Cleanup the timer if the component unmounts
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <div className="homepopup">
                {isVisible && (
                    <div className="modal disclaimer fade show d-flex align-items-center justify-content-center blur-container" tabIndex="-1" role="dialog" style={{ display: "block", }}>
                        <div className="modal-dialog" >
                            <div className="modal-content" >
                                <div className="modal-header justify-content-center">
                                    <h4 className="roboto text-white">
                                        DISCLAIMER & ACKNOWLEDGMENT
                                    </h4>
                                    {/* <img src={disclaimer} className="modal-title roboto " /> */}

                                </div>
                                <div className="modal-body">
                                    <p className="roboto px-2">
                                        In accordance with the guidelines of the Institute of Chartered Accountants of India (ICAI), Chartered Accountants are restricted from soliciting professional work or advertising their services. This website is created solely for informational purposes.
                                    </p>
                                    <h5 className="roboto black py-3 px-2">
                                        The user acknowledges the following:
                                    </h5>
                                    <ul className="roboto disclaimerlist" style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        <li>No advertisement, solicitation, invitation, or inducement has been made by the Chartered Accountant or the firm to solicit work through this website;</li>

                                        <li>This website is intended only to provide information about the Chartered Accountant/firm, its services, and areas of expertise;</li>

                                        <li>The information provided is available at the user’s specific request, and any materials downloaded or accessed from this website are done at your own discretion. Use of this website does not establish a client–professional relationship;</li>

                                        <li>This website is not intended to serve as a source of advertising or solicitation, nor should its content be interpreted as financial, tax, or professional advice;</li>

                                        <li>The Chartered Accountant/firm shall not be responsible for any consequences arising from actions taken based on the information provided on this website. If professional assistance is required, please contact us directly through the Contact section.</li>
                                    </ul>
                                </div>
                                <div className="modal-footer w-full ">
                                    <button
                                        type="button"
                                        className="open roboto"
                                        onClick={handleClose}
                                    >
                                        THE USER ACKNOWLEDGES & AGREE
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Modal backdrop for the dark overlay */}
                {isVisible && <div className="modal-backdrop  custom-backdrop  " style={{
                    filter: 'blur(5px)'

                }}></div>}
            </div>
        </>
    );
};

export default Disclaimer;