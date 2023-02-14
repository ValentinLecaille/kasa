import React from 'react'
import '../style/FlatGrid.css'
import Flat from './Flat.jsx'

function Flatgrid() {
  return <div className='grid_container'>
    <Flat />
    <Flat />
    <Flat />
    <Flat />
  </div>;
}

export default Flatgrid