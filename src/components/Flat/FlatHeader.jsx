import React from 'react'
import '../../style/Flat/FlatHeader.css'

function FlatHeader(props) {
  const name = props.host.name;
  const [firstName, lastName] = name.split(" ");

  return (
    <div className='flat-header'>
    <div className='flat-title'>
        <h1>{props.title}</h1>
        <h2>{props.location}</h2>
        <div className='flat-tag'>
          {props.tags.map((tag) => (
            <span key={tag}>{tag}</span>
            ))}
        </div>
    </div>

    <div className='flat-owner'> 
        <div className='flat-owner-profile'>
        <h3 className='flat-owner-name'>
            <span>{firstName}</span>
            <span>{lastName}</span>
        </h3>
        <div className='flat-badge'>
          <img src={props.host.picture} alt="profil de l'hôte" />
        </div>
        </div>
        <div className='flat-stars'>
          { [1,2, 3, 4, 5].map((num) => (
            <span key={num} className={props.rating >= num ? "on" : ""}>★</span>
            ))}
        </div>
      </div>
    </div>
  )
}

export default FlatHeader