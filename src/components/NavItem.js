import React from 'react'

function NavItem({ pup, handleOnClick }) {
  return (
    <span onClick={handleOnClick}>{pup.name}</span>
  )
}

export default NavItem