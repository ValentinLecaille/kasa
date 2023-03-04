import React from 'react'
import FlatBanner from '../../components/Flat/FlatBanner'
import FlatHeader from '../../components/Flat/FlatHeader'
import InfoPanel from '../../components/Flat/InfoPanel'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';

function Flat() {
  const location = useLocation();
  const [findFlat, setFindFlat] = useState(null); 
  // au chargement, on lance la fonction de fetch (récupération data de l'appartement)
  // eslint-disable-next-line
  useEffect(fetchFlatInfo, []);

  function fetchFlatInfo() {
    fetch("db.json")
      .then((res) => res.json())
      .then((flats) => { // on cherche l'apartement que l'on veut, grâce à son id
        const flat = flats.find((flat) => flat.id === location.state.flatId);
        setFindFlat(flat)
      })
      .catch(console.error)
  }

  //on créé un loader, en attendant que react trouve la donnée en question afin d'éviter l'erreur.
  if (findFlat == null) return <div>...Loading</div>;
  return (
    <div className='flat-page'>
      <FlatBanner pictures={ findFlat.pictures }/>
      <FlatHeader 
        title = {findFlat.title}
        host = {findFlat.host}
        rating = {findFlat.rating}
        location = {findFlat.location}
        tags = {findFlat.tags}
      />
      <div className='flat-info'>
        <InfoPanel 
          title = "Description"
          content = {findFlat.description}
        />
        <InfoPanel 
          title="Equipements"
          content = {findFlat.equipments.map(equipment => (
          <li className="rotate">{equipment}</li>
          ))}
        />
      </div>
    </div>
  )
}

export default Flat