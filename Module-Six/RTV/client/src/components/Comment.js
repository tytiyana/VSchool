import React from 'react'


export default function Comment(props){
  const { comment, title } = props
  return (
    <div className="comment">
        <h3> { title } </h3>
        <p> { comment } </p>
    </div>
  )
}