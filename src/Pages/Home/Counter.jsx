//import React from 'react'
import CountUp from 'react-countup';


const Counter = () => {


    return (
        <>
            <section className="counter py-5">
                <div className="container">
                    
                    <div className="row">

                        {/* First Counter */}
                        <div className="col-md-3 py-3 counterborder">
                            <div className="w-100">
                                <h3 className='roboto'>
                                    <CountUp end={200} duration={2} />+
                                </h3>
                                <p className='roboto'>Trust Administration</p>
                            </div>
                        </div>

                        {/* Second Counter */}
                        <div className="col-md-3 py-3 counterborder">
                            <div className="w-100">
                                <h3 className='roboto'>
                                    <CountUp end={400} duration={2} />+
                                </h3>
                                <p className='roboto'>Estate Plans</p>
                            </div>
                        </div>

                        {/* Third Counter */}
                        <div className="col-md-3 py-3 counterborder">
                            <div className="w-100">
                                <h3 className='roboto'>
                                    <CountUp end={400} duration={2} />+
                                </h3>
                                <p className='roboto'>Litigation Clients</p>
                            </div>
                        </div>

                        {/* Fourth Counter */}
                        <div className="col-md-3 py-3">
                            <div className="w-100">
                                <h3 className='roboto'>
                                    <CountUp end={100} duration={2} />+
                                </h3>
                                <p className='roboto'>Securities Cases</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter