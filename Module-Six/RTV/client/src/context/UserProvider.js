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
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "", 
    issues: [],
    comments: [],
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
        getUserIssues()
        getUserComments()
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
      issues: [],
      comments: []
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

  function getUserIssues(){
    userAxios.get("/api/issue/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function getUserComments(){
    userAxios.get("/api/comment/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          comments: res.data
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }


  function addIssue(newIssue){
    userAxios.post("/api/issue", newIssue)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function addComment(newComment){
    userAxios.post("/api/comment", newComment)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          comments: [...prevState.comments, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function sendUpvote(postId){
    userAxios.put(`/api/issue/upvote/${postId}`)
      .then(res => {
        setUserState(prevState => ({
          ...prevState, 
          issues: prevState.issues.filter(post => post._id === postId ? res.data : post)
        }))
      })
  }

  function sendDownvote(postId){
    userAxios.put(`/api/issue/downvote/${postId}`)
      .then(res => {
        setUserState(prevState => ({
          ...prevState, 
          issues: prevState.issues.filter(post => post._id === postId ? res.data : post)
        }))
      })
  }


  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        getUserComments,
        getUserIssues,
        addIssue,
        addComment,
        resetAuthErr, 
        sendUpvote,
        sendDownvote
      }}>
      { props.children }
    </UserContext.Provider>
  )
}