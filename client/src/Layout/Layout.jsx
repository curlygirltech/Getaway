
import React from 'react'
import Nav from './Nav'

export default function Layout(props) {
  const { currentUser } = props
  return (
  
    <div>
      <Nav currentUser={currentUser}/>
      {props.children}
      
    </div>
  )
}
