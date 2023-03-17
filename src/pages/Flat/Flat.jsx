import React from 'react'
import FlatBanner from '../../components/Flat/FlatBanner'
import FlatHeader from '../../components/Flat/FlatHeader'
import InfoPanel from '../../components/Flat/InfoPanel'
import { useParams, Navigate } from 'react-router-dom'
import flats from '../../assets/api/db.json'

function Flat() {
    const id = useParams();
    const findFlat = flats.find(flat => flat.id === id.id);

  if (findFlat == null) 
  return <Navigate replace to="/404"/> ;
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
          key = 'description'
          title = "Description"
          content = {findFlat.description}
        />
        <InfoPanel 
          key = 'equipements'
          title="Equipements"
          content = {findFlat.equipments.map((equipment,index) => (
            <li key={index}>{equipment}</li>
            ))}
        />
      </div> 
    </div>
  )
}

export default Flat