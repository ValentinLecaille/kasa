import React from 'react'
import '../../style/Home/FlatCard.css'

// Le composant Flat défini la carte liée à l'id unique d'un appartement. Le clic envoi l'utilisateur vers l'appartement ayant l'id que l'on passe en state.

function Flat({id, image, title}) {
    return(
      <div className='flat-card' id={id}>
      <img src={image} alt="" />
      <div className='flat_title'>{title}</div>
      </div>
    );
}

export default Flat;