import React from 'react'
import '../../style/Home/FlatGrid.css'
import Flat from './Flat-Card'
import { NavLink } from 'react-router-dom';
import flats from '../../assets/api/db.json'

function Flatgrid() {

  //on retourne les infos du fetch pour les placer à l'emplacement que l'on défini dans le DOM et dans le composant Flat. On map les éléments de la liste en utilisant la méthode.
  return (
<div className="grid_container">
  {flats.map((flat) => 
    <NavLink className="flat-link"key={flat.id} to={"/flat/"+flat.id}>
      <Flat key={flat.id} id={flat.id} image={flat.cover} title={flat.title} />
    </NavLink>)}
</div>
  )
}

export default Flatgrid

