import React, {useState} from 'react'
import AddMovieForm from './AddMovieForm'

function Movie(props){
    const {title, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return(
        <div id="movieBlock">
          { !editToggle ?
          <>
          <h1>Title: {title}</h1>
           <p>Genre: {genre} </p>
           <button id="delete" onClick={() => props.deleteMovie(_id)}>Delete</button>
           <button id="edit" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
           </>
           :
           <>
           <AddMovieForm 
            title={title} 
            genre={genre}
            _id={_id}
            buttonText="Submit Edit"
            submit={props.editMovie} 
            />
            <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    )
}

export default Movie