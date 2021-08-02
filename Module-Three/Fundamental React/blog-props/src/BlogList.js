import React from "react"
import BlogPost from "./BlogPost"
import blogData from "./blogData"

function BlogList(){
  const blogListComponents = blogData.map(blogListData => <BlogPost title= {blogListData.title} subTitle= {blogListData.subTitle} author= {blogListData.author} date= {blogListData.date}/>)
    return (
      <div  style= {{display:"flex",justifyContent: "center", flexDirection: "column"}}>
        {blogListComponents}
      </div>
    )
}

export default BlogList