import React, { Component } from 'react'
import { Container, Row, Col} from 'react-grid-system'
import Badge from './Badge'


class App extends Component{
    constructor(props){
        super(props)
        this.state={
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favFood: "",
            selfDescription: "",
            badges: []
        }
 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
            this.setState({
                [name]: value
            })
    }

    handleSubmit(){
        this.setState(prevState => ({
            badges: [...prevState.badges, this.state]}))
        
        this.setState({
           firstName:  "",
           lastName:  "",
           email:  "",
           placeOfBirth: "",
           phoneNumber: "",
           favFood: "",
           selfDescription: ""
    }
       )
    }   

    render(){
        const allBadges = this.state.badges.map((item, index) =>  <Badge key={index} firstName={item.firstName} lastName={item.lastName} email={item.email} placeOfBirth={item.placeOfBirth} phoneNumber={item.phoneNumber} favFood={item.favFood} selfDescription={item.selfDescription}/>)

        return(
            <div>
                <Container fluid style={{borderStyle: 'solid',borderColor: 'black', borderWidth: 3, borderRadius: 10}}>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.handleSubmit()
                    }}>
                    <Row>
                    <Col debug>
                        <input className="inputs"
                        required
                        minLength= "3" 
                        onChange={this.handleChange} 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName" 
                        value={this.state.firstName} 
                        style={{fontSize:12}}/>
                        </Col>
                    <Col debug>
                        <input className="inputs"
                        required
                        minLength= "3" 
                        onChange={this.handleChange} 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                        value={this.state.lastName} 
                        style={{fontSize:12}}/></Col>
                    </Row>
                    <Row>
                    <Col debug>
                        <input className="inputs"
                        required
                        minLength= "3" 
                        onChange={this.handleChange} 
                        type="text" 
                        placeholder="Email" 
                        name="email" 
                        value={this.state.email} 
                        style={{fontSize:12}}/>
                        </Col>
                    <Col debug>
                        <input className="inputs"
                        required
                        minLength= "3" 
                        onChange={this.handleChange} 
                        type="text" 
                        placeholder="Place of Birth" 
                        name="placeOfBirth" 
                        value={this.state.placeOfBirth} 
                        style={{fontSize:12}}/>
                        </Col>
                    </Row>
                    <Row>
                    <Col debug>
                        <input className="inputs"
                        required 
                        minLength= "3" 
                        onChange={this.handleChange} 
                        type="tel"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        placeholder="1234567890" 
                        name="phoneNumber" 
                        value={this.state.phoneNumber} 
                        style={{fontSize:12}}/>
                        </Col>
                    <Col debug>
                        <input className="inputs"
                        required
                        minLength= "3" 
                        onChange={this.handleChange} 
                        type="text" 
                        placeholder="Favorite Food" 
                        name="favFood" 
                        value={this.state.favFood} 
                        style={{fontSize:12}}/>
                        </Col>
                    </Row>
                    <Row>
                    <Col debug>
                        <input className="inputs"
                        required
                        minLength= "3" 
                        onChange={this.handleChange} 
                        type="text" 
                        placeholder="Describe yourself." 
                        name="selfDescription" 
                        value={this.state.selfDescription} 
                        style={{fontSize:12}}/>
                        </Col>
                    </Row>
                    <button  >Submit</button>
                </form>
                </Container>
                {allBadges}
            </div>
        )
    }
}

export default App