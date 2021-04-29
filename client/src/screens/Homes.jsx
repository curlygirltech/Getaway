import React from 'react'

export default function Homes(props) {
  const {homes} = props
  return (
    <div>
      <h3> browse homes</h3>
      {homes.map(home=>(
      <p key={home.id}>{home.description}</p>
      ))}
    </div>
  )
}
