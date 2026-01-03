//import React from 'react'
import AllBanner from '../../Component/AllBanner'
import Seo from '../../Seocomponent/Seo'
import career from '../../assets/images/careernew.png'
import Content from './Content'

const Probono = () => {
  return (
    <>
      <Seo title=" Human Rights Lawyer in New Delhi | Chambers of Kumar Deepraj, Advocate
Expertise: Civil, Commercial and Corporate Lawyer in Delhi | Chambers of Kumar Deepraj, Advocate"/>
      <AllBanner title="Pro Bono" subtitle="Pro Bono" image={career} />
      <Content />
    </>
  )
}

export default Probono