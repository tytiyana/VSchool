import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props){
    const initState = { 
      user: {} || JSON.parse(localStorage.getItem("user")) , 
      token: localStorage.getItem("token") || "", 
      gemstones: [],
      minerals: [],
      metals: [],
      errMsg: ""
    }

const [userState, setUserState] = useState(initState)


function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserGemstones()
        getUserMinerals()
        getUserMetals()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthErr(err.response.data.errMsg))
    }
      function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
          user: {},
          token: "",
          gemstones: [],
          minerals: [],
          metals: []
        })
      }

      function handleAuthErr(errMsg){
        setUserState(prevState => ({
          ...prevState,
          errMsg
        }))
      }

      function resetAuthErr(){
        setUserState(prevState => ({
          ...prevState,
          errMsg: ""
        }))
      }

      function getUserGemstones(){
        userAxios.get("/api/gemstones/user")
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              gemstones: res.data
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

      function addGemstones(newGemstones){
        userAxios.post("/api/gemstones", newGemstones)
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              gemstones: [...prevState.gemstones, res.data]
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }
    

      function editGemstones(updatedObject, gemstoneId){
        userAxios.put(`/api/gemstones/${gemstoneId}`, updatedObject)
        .then( res => {
          setUserState(prevState => ({
            ...prevState,
            gemstones: prevState.gemstones.map(gemstone => gemstone._id !== gemstoneId ? gemstone : res.data)
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteGemstones(gemstoneId){
      userAxios.delete(`/api/gemstones/${gemstoneId}`)
      .then(res => {
        setUserState( prevState => ({
          ...prevState,
          gemstones: prevState.gemstones.filter(gemstone => gemstone._id !== gemstoneId)
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
    }
      


      function getUserMinerals(){
        userAxios.get("/api/minerals/user")
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              minerals: res.data
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }


      function addMinerals(newMinerals){
        userAxios.post("/api/minerals", newMinerals)
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              minerals: [...prevState.minerals, res.data]
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

      function editMinerals(updatedObject, mineralId){
        userAxios.put(`/api/minerals/${mineralId}`, updatedObject)
        .then( res => {
          setUserState(prevState => ({
            ...prevState,
            minerals: prevState.minerals.map(mineral => mineral._id !== mineralId ? mineral : res.data)
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteMinerals(mineralId){
      userAxios.delete(`/api/minerals/${mineralId}`)
      .then(res => {
        setUserState( prevState => ({
          ...prevState,
          minerals: prevState.minerals.filter(mineral => mineral._id !== mineralId)
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
    }

      function getUserMetals(){
        userAxios.get("/api/metals/user")
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              metals: res.data
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

      function addMetals(newMetals){
        userAxios.post("/api/metals", newMetals)
          .then(res => {
            setUserState(prevState => ({
              ...prevState,
              metals: [...prevState.metals, res.data]
            }))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

      function editMetals(updatedObject, metalId){
        userAxios.put(`/api/metals/${metalId}`, updatedObject)
        .then( res => {
          setUserState(prevState => ({
            ...prevState,
            metals: prevState.metals.map(metal => metal._id !== metalId ? metal : res.data)
          }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function deleteMetals(metalId){
      userAxios.delete(`/api/metals/${metalId}`)
      .then(res => {
        setUserState( prevState => ({
          ...prevState,
          metals: prevState.metals.filter(metal => metal._id !== metalId)
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
    }


    return (
        <UserContext.Provider
        value={{
            ...userState,
            signup,
            login,
            logout,
            getUserGemstones,
            getUserMinerals,
            getUserMetals,
            addGemstones,
            editGemstones,
            deleteGemstones,
            addMinerals,
            editMinerals,
            deleteMinerals,
            addMetals,
            editMetals,
            deleteMetals,
            resetAuthErr
        }}>
        { props.children }
        </UserContext.Provider>
    )
}