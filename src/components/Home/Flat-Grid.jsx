import React, { useEffect, useState } from 'react'
import '../../style/Home/FlatGrid.css'
import Flat from './Flat-Card'


function Flatgrid() {
  // on track flat et setFlats avec le hook useState
  const [flats, setFlats] = useState([]);

  // on execute la fonction au chargement du composant
  useEffect(fetchFlats, [])
  // on réalise un fetch des éléments de la base de donnée pour récupérer les infos des différents appartements
  function fetchFlats() {
  fetch("db.json")
    .then((res) => res.json())
    .then((res) => setFlats(res))
    .catch(console.error)
  }

  //on retourne les infos du fetch pour les placer à l'emplacement que l'on défini dans le DOM et dans le composant Flat. On map les éléments de la liste en utilisant la méthode.
  return (
    <div className='grid_container'>
    {flats.map((flat) => (
      <Flat key={flat.id} title={flat.title} imageUrl={flat.cover} id={flat.id}/>      
    ))}
    </div>
  )
}

export default Flatgrid