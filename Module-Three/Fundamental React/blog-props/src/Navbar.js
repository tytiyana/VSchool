import React from "react"
import styled from "styled-components"


const NavbarTitle = styled.span`font-family:Arial, Helvetica, sans-serif;`
const Tabs = styled.span`font-family:Arial, Helvetica, sans-serif;`


function Navbar(){
    return(
        <div className="div">
            <NavbarTitle> <b>Start Bootstrap</b> </NavbarTitle>
            <Tabs>Home </Tabs>
            <Tabs>About </Tabs>
            <Tabs>Sample Post </Tabs>
            <Tabs>Contact </Tabs>
        </div>
    )
}

export default Navbar