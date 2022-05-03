import React from 'react'

function DogDisplay({ currentPup }) {
    // const [isGoodDog, setIsGoodDog] = useState("")
    // console.log(isGoodDog)
    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <h2>{currentPup.name}</h2>
                <img src={currentPup.image} alt="A cute pup"/>
                <br></br>
                <button>{currentPup.isGoodDog ? "Good Dog" : "Bad Dog" }</button>
            </div>
        </div>
    )
}

export default DogDisplay


