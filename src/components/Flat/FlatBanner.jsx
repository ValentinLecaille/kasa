import React, { useState } from 'react'
import '../../style/Flat/FlatBanner.css'

function FlatBanner(props) {

  const pictures = props.pictures;
  const [currentPicture, SetCurrentPicture] = useState(0);
  const getClassName = (index) => {
    if (index === currentPicture) return "show";
    return "";
  };

  const nextPic = () => {
    SetCurrentPicture((currentPicture + 1) % pictures.length);
  }

  const prevPic = () => {
    const newCurrentPic = currentPicture -1;
    if (newCurrentPic < 0) {
      SetCurrentPicture(pictures.length -1);
      return;
    }
    SetCurrentPicture(currentPicture - 1);
  }

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

      <button className="nextBtn" onClick={nextPic}>
        <i className="fas fa-chevron-right"></i> 
      </button>    
      <button className="prevBtn" onClick={prevPic}>
         <i className="fas fa-chevron-left"></i> 
      </button>
      
    </div>
  );
}

export default FlatBanner