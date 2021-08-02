import React from "react"

import FriendsData from "./friendsData"
import Friend from "./components/Friends"



function App(){
    const friendComponents = FriendsData.map(friendInfo => <Friend name= {friendInfo.name} age= {friendInfo.age} petName= {friendInfo.pets.map(petInfo => petInfo.name)} petBreed= {friendInfo.pets.map(petInfo => petInfo.breed)}/>)

    return(
        <div>
        {friendComponents}
        </div>
    )
}

export default App