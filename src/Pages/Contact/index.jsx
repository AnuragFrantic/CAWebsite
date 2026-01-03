//import React from 'react'

import AllBanner from "../../Component/AllBanner"
import Seo from "../../Seocomponent/Seo"
import contactbanner from '../../assets/images/contact-banner-bg.webp'
//import contact2 from '../../assets/images/young-attractive-emotionacontact2.jpg'
import Info from "./Info"

const Contact = () => {
  return (
    <>
      <Seo title="Contact the office of Advocate Chambers of Kumar Deepraj" />
      <AllBanner title="Contact" subtitle="Contact" image={contactbanner} />
      <Info />
    </>
  )
}

export default Contact