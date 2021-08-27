import axios from 'axios'
import React, {useEffect, useState} from 'react'


const UglyContext = React.createContext()

function UglyThingProvider (props) {

    useEffect(()=> getData(),[])

    const getData = () => {
        axios.get("https://api.vschool.io/xavierb/thing")
        .then(res => {
            setuglyThings({completedUglyThings: res.data.map(item => ({ ...item, isEditing: false}))})
        })
        .catch(err => console.log(err))
    }


    let init = {
        completedUglyThings: [], 
        title: "", 
        imgUrl: "", 
        description: "",
        editTitle: "",
        editImgUrl: "",
        editDescription: ""
    }

    const [uglyThings, setuglyThings] = useState(init)


    const handleChange = (event) => {
        const {name, value} = event.target
        
        setuglyThings(prevState => {
            return{
                ...prevState,
                [name]: value}
            }
        )
        // console.log(`this is "${name}" value: ${value} in the handleChnage func`)


    }

    const newUglyThing = {
        title: uglyThings.title, 
        imgUrl: uglyThings.imgUrl, 
        description: uglyThings.description,
        isEditing: false,

    }



    const handleSubmit = (e) =>{
        e.preventDefault()
        
        axios.post("https://api.vschool.io/xavierb/thing", newUglyThing)
                .then(res => {
                    setuglyThings(init)
                    return getData()
                })
                .catch(err=> console.log(err))
        
    }

    const deleteFunc = (id) => {
        axios.delete(`https://api.vschool.io/xavierb/thing/${id}`)
            .then(res => getData())
            .catch(err => console.log(err))

    }
    // getAttribute(data-)
    const editFunc = (e, id) => {   
        e.preventDefault()    
        axios.put(`https://api.vschool.io/xavierb/thing/${id}`, {title: uglyThings.editTitle, description: uglyThings.editDescription, imgUrl: uglyThings.editImgUrl})
        .then(res => { getData() })
        .catch(err => console.log(err))
    }
    
    const toggleEdit = (id) => {
        let newUglyThings = uglyThings.completedUglyThings.map(uglyThing => uglyThing._id === id  ? {...uglyThing, isEditing: !uglyThing.isEditing}  : uglyThing)
        return setuglyThings({completedUglyThings: newUglyThings})
    }
        

    return (
        
        <UglyContext.Provider value={{
            uglyThings, 
            handleChange, 
            handleSubmit, 
            deleteFunc,
            editFunc,
            toggleEdit, 
            }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyThingProvider, UglyContext}
