import React, {useContext} from 'react'

import CommentForm from './CommentForm'
import { UserContext } from '../context/UserProvider'
import CommentList from './CommentList'

export default function Issue(props){
  const { title, description, upvote, downvote, _id} = props

  let totalVotes = upvote.length - downvote.length
  const {addComment, comments, sendUpvote, sendDownvote} = useContext(UserContext)

  return (
    <div className="issue">
      <h1>{ title }</h1>
      <h3>{ description }</h3>

      <h4>Comments</h4>
      <CommentList comments={comments}/>
      <CommentForm addComment={addComment}/>
      <h5>{totalVotes}</h5>
      <button onClick={() => sendUpvote(_id)}>upvote</button>
      <button onClick={() => sendDownvote(_id)}>downvote</button>
    </div>
  )
}