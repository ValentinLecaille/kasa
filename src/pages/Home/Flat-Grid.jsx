import React, { useEffect, useState } from 'react'
import '../../style/Home/FlatGrid.css'
import Flat from './Flat-Card'

function Flatgrid() {
  const [flats, setFlats] = useState([]);

  // on execute la fonction au chargement du composant
  useEffect(fetchFlats, [])

  function fetchFlats() {
  fetch("db.json")
    .then((res) => res.json())
    .then((res) => setFlats(res))
    .catch(console.error)
  }

  return (
    <div className='grid_container'>
    {flats.map((flat) => (
      <Flat key={flat.id} title={flat.title} imageUrl={flat.cover} id={flat.id}/>      
    ))}
    </div>
  )
}

export default Flatgrid