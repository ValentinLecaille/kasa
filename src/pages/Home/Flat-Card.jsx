import React from 'react'
import '../../style/Home/FlatCard.css'
import {Link} from 'react-router-dom'

function Flat() {
  return (
    <Link className='flat-link' to='/flat'>
      <div className='flat-card'>
          <div className='flat_title'>Titre de la location</div>
      </div>
    </Link>
  );
}

export default Flat