import React from "react"
import styled from "styled-components"

const Title = styled.h3`font-family: Arial, Helvetica, sans-serif;`
const SubTitle = styled.h4`font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`
const Author = styled.span`font-style: italic; color: #6c757d;`
const Date = styled.span`font-style: italic; color: #6c757d;`

function BlogPost(props){
    return(
        <div>
            <Title><b>{props.title}</b></Title>
            <SubTitle>{props.subTitle}</SubTitle>
            <Author>{`Posted by ${props.author} on`} </Author>
            <Date>{props.date}</Date>
            <hr></hr>
        </div>
    )
}

export default BlogPost