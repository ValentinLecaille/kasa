import React from 'react'
import '../../style/Home/FlatGrid.css'
import Flat from './Flat-Card'

function Flatgrid() {
  return <div className='grid_container'>
    <Flat />
    <Flat />
    <Flat />
    <Flat />
  </div>;
}

export default Flatgrid