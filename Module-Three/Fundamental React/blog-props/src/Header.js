import React from "react"
import styled from "styled-components"
import Navbar from "./Navbar"

const WebTitle = styled.h1`font-family: Arial, Helvetica, sans-serif;`
const SubWebTitle = styled.p`font-family:Arial, Helvetica, sans-serif;`

const Container = styled.div`background-image: url("https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");width: 100; height: 400px;`


function Header(){
    return(
        <Container>
            <Navbar/>
            <WebTitle style= {{display:"flex",justifyContent: "center"}}><b>Clean Blog</b></WebTitle>
            <SubWebTitle style= {{display:"flex",justifyContent: "center"}}>A Blog Theme by Start Bootstrap</SubWebTitle>
        </Container>
    )
}

export default Header