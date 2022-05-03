import React from 'react'
import NavItem from './NavItem'

function NavBar({pups, handleOnClick }){
    // const handleOnClick = (e) => {
    //     console.log(e.target)
    // }
    const renderPups = pups.map(pup => {
        return <NavItem key={pup.id} pup={pup} handleOnClick={handleOnClick}/>
    })
    return(
        <>
            <div id="filter-div">
                <button id="good-dog-filter">Filter good dogs: OFF</button>
            </div>
            <div id="dog-bar">
                {renderPups}
            </div>
        </>
    )
}

export default NavBar