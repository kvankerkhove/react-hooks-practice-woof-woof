import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import DogDisplay from './DogDisplay'

function App() {
  const [pups, setPups] = useState([])
  const [currentPup, setCurrentPup] = useState({})

  useEffect(() => {
    fetch(' http://localhost:3001/pups')
    .then(res => res.json())
    .then(pups => setPups(pups))
  }, [])

  const handleOnClick = (e) => {
    const findPup = pups.find(pup => pup.name ===e.target.textContent)
    setCurrentPup(findPup)
  }

  const handleOnGoodDogClick = (e) => {

  }


  return (
    <div className="App">
      <NavBar handleOnClick={handleOnClick} pups={pups}/>
      <DogDisplay currentPup={currentPup}/>
    </div>
  );
}

export default App;
