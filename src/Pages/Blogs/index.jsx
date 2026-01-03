//import React from 'react'
import AllBanner from '../../Component/AllBanner'
import blogsbanner from '../../assets/images/blog-banner-bg.webp'
import BlogBox from './BlogBox'


const Blogs = () => {
  return (
    <>
       <AllBanner title="Knowledge Vault" subtitle="Knowledge Vault" image={blogsbanner}/>
       <BlogBox/>
       
    </>
  )
}

export default Blogs

