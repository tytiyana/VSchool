import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'

import UglyThing from './UglyThing'

const {Provider, Consumer} = React.createContext()



class ContextProvider extends Component{
    state={
        title: "",
        description: "",
        imgUrl: "",
        newTitle: "",
        newDescription: "",
        newImgUrl: "",
        uglyThings: []
    }

    

    componentDidMount(){
        axios.get(`https://api.vschool.io/tytiyana/thing`)
        .then(response => response.data)
        .then(data => {
            const uglyData = data
            this.setState({
                uglyThings: uglyData
            })
        })
        .catch(err => console.log(err))
    }

    getData = () => {
        axios.get(`https://api.vschool.io/tytiyana/thing`)
        .then(response => response.data)
        .catch(err => console.log(err))
    }
 

    handleChange = (e) => {
            const {name, value} = e.target
            this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const uggaDug = {
            title: this.state.title,
            description: this.state.description,
            imgUrl: this.state.imgUrl
        }
            axios.post(`https://api.vschool.io/tytiyana/thing`,uggaDug)
            .then(response => console.log(response.data))
            .catch(err => console.log(err))  
    }

    deleteUggaDug = (id) => {
        axios.delete(`https://api.vschool.io/tytiyana/thing/${id}`)
        .then(response => console.log(response.data))
        .catch(err => console.log(err))      
    }

    editUggaDug = (id) => {
        const newUggaDug = {
            title: this.state.newTitle,
            description: this.state.newDescription,
            imgUrl: this.state.newImgUrl
        }

        const input = (
            <div>
                <form>
                <input onChange={this.handleChange} type="text" name="newImgUrl" value={this.state.newImgUrl.value} placeholder="New Image Url"/>
                <input onChange={this.handleChange} type="text" name="newTitle" value={this.state.newTitle.value} placeholder="New Title"/>
                <input onChange={this.handleChange} type="text" name="newDescription" value={this.state.newDescription.value} placeholder="New Description"/>
                </form>
                <button onClick={() => {
                    axios.put(`https://api.vschool.io/tytiyana/thing/${id}`, newUggaDug)
                    .then(response => {
                        console.log(response.data)
                        this.setState({
                            title: "Hello",
                            description: "World",
                            imgUrl: ""
                        })
                    })
                    .catch(err => console.log(err))  
                }}>Submit</button>
            </div>
        )
        ReactDOM.render(input, document.getElementById("newInputs"))
    }

    render(){
        const uglyThingItem = this.state.uglyThings.map((info) => <UglyThing key={info._id} id={info._id} title={info.title} description={info.description} imgUrl={info.imgUrl} edit={this.editUggaDug} delete={this.deleteUggaDug}/>)

        return(
            <Provider value={{
            title: this.state.title, 
            imgUrl: this.state.imgUrl, 
            description: this.state.description, 
            handleSubmit: this.handleSubmit, 
            handleChange: this.handleChange, 
            uglyThingItem: uglyThingItem,
            getData: this.getData
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ContextProvider, Consumer}