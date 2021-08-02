import React from 'react'
import colors from './colors';
import Buttons from './Buttons';
import { Container, Row, Col } from 'react-grid-system';


class App extends React.Component {
    constructor(){
        super()
        this.state = {
           colors: colors
        }
        this.blackOut = this.blackOut.bind(this)
        this.ravensPurple = this.ravensPurple.bind(this)
        this.blueLeft = this.blueLeft.bind(this)
        this.blueRight = this.blueRight.bind(this)
        this.autumn= this.autumn.bind(this)
        this.winter= this.winter.bind(this)
        this.spring= this.spring.bind(this)
        this.summer= this.summer.bind(this)
    }

    blackOut(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [`black`,`black`,`black`,`black`]
            }
         })
    }

    ravensPurple(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [`purple`,`purple`,prevState, prevState]
            }
         })
    }

    blueLeft(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [prevState,prevState,`blue`,prevState]
            }
         })
    }

    blueRight(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [prevState,prevState,prevState,`blue`]
            }
         })
    }

    autumn(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [`red`,`orange`,`yellow`,`brown`]
            }
         })
    }

    winter(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [`white`,`blue`,`lightblue`,`silver`]
            }
         })
    }

    spring(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [`yellow`,`pink`,`green`,`orange`]
            }
         })
    }

    summer(){
        this.setState(prevState => {
            return {
                colors: prevState.colors = [`red`,`orange`,`yellow`,`green`]
            }
         })
    }



    render(){
        const buttons = this.state.colors.map(color => <Buttons color={color}/>)

        return(
            <div>
                <Container fluid>
                    <Row>
                        {buttons}
                    </Row>
                </Container>
                <button onClick={this.blackOut}>Blackout</button>
                <button onClick={this.ravensPurple}>Ravens!</button>
                <button onClick={this.blueLeft}>Left Blue</button>
                <button onClick={this.blueRight}>Right Blue</button>
                <button onClick={this.autumn}>Autumn</button>
                <button onClick={this.winter}>Winter</button>
                <button onClick={this.spring}>Spring</button>
                <button onClick={this.summer}>Summer</button>
           </div>
        )
    }  
}

export default App