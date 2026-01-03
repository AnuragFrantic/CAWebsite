import React from 'react'
import loader from '../assets/images/loader.gif'

const Loader = () => {
  return (
    <>
      <div className="overlay">
        <div className="loader-spinner">
          <div className="loader-inner">
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
            <div className="loader-block"></div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Loader