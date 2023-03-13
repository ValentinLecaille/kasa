import React from 'react'
import '../../style/Flat/FlatInfo.css'

// on créé la fonction qui gére l'affichage des infos déroulantes du colapse et ses animations
function InfoPanel(props) {
const [isContentVisible, setIsContentVisible] = React.useState(false);
const showContent = () => {
  setIsContentVisible(!isContentVisible);
}
  return (
    <div className='flat-description'>
      <p className='flat-description-title'>
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up" style={{
          transform: isContentVisible ? 'rotate(180deg)' : 'rotate(0deg)'
        }} onClick={showContent}></i>
      </p>
      <p className='flat-description-txt' style={{
        display: isContentVisible ? 'block':'none'
      }}>{props.content}</p>
    </div>
  );
}
export default InfoPanel