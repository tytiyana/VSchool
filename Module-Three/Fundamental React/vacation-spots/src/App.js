import React from "react"
import Card from "./Cards"
import vacationInfo from "./vacationData"

function App(props) {
   const vacation = vacationInfo.map(vacay => <Card place= {vacay.place} price= {vacay.price} timeToGo= {vacay.timeToGo} />)

   return(
       <div>
        {vacation}
       </div>
   )
}

export default App