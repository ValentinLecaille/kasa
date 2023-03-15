// Composant de la bannière carousel de la page de présentation d'un logement. 

import React, { useState } from 'react'
import '../../style/Flat/FlatBanner.css'

function FlatBanner(props) {
  // on récupère toutes les images liées à l'appartement
  const pictures = props.pictures;
  // on créé un state de l'image dans la bannière
  const [currentPicture, SetCurrentPicture] = useState(0);
  // on affiche les images de la base de données si elles sont bien disponibles
  const getClassName = (index) => {
    if (index === currentPicture) return "show";
    return "";
  };

  // on configure le clic sur l'image suivante grâce au nombre total d'images
  const nextPic = () => {
    SetCurrentPicture((currentPicture + 1) % pictures.length);
  }
  // on configure le clic sur l'image précédente grâce au nombre total d'images
  const prevPic = () => {
    const newCurrentPic = currentPicture -1;
    if (newCurrentPic < 0) {
      SetCurrentPicture(pictures.length -1);
      return;
    }
    SetCurrentPicture(currentPicture - 1);
  };
  // on retourne les éléments images dans le DOM grâce à un map, et un clic sur les chevron qui apparraissent seulement si plusieurs images sont disponibles.
  return (

    <div className='flat-banner'>
      <div className='banner-img'>
      {pictures.map((pic, index) => <img
        key={pic}
        src={pic}
        alt=""
        className={getClassName(index)}
      ></img>)}
      </div>
  
      {(pictures.length > 1) && <button className="nextBtn" onClick={nextPic}>
        <i className="fas fa-chevron-right"></i>
      </button> }

      {(pictures.length > 1) && <button className="prevBtn" onClick={prevPic}>
        <i className="fas fa-chevron-left"></i>
      </button> }

    </div>
  );
}

export default FlatBanner

