import React from 'react'
 
function Buttons (props){
    return(
        <div>  
          <div style={{height: 300, width: 300, borderColor: 'black', borderStyle: 'solid', borderWidth: 1, backgroundColor: props.color}}></div> 
        </div>
    )
}
export default Buttons