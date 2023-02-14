import React from 'react'
import '../style/Flat.css'
import {Link} from 'react-router-dom'

function Flat() {
  return (
  <div className='flat'>
    <Link to='/flat'>
      <div className='flat_title'>Titre de la location</div>
    </Link>
  </div>
  );
}

export default Flat