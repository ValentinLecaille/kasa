import React from 'react'
import '../../style/Flat/FlatInfo.css'

function InfoPanel(props) {

const [isContentVisible, setIsContentVisible] = React.useState(false);
const showContent = () => {
  setIsContentVisible(!isContentVisible);
}
  return (
    <div className='flat-description'>
      <p className='flat-description-title'>
        <span>{props.title}</span>
        <i className="fa-solid fa-chevron-up" onClick={showContent}></i>
      </p>
      
      {isContentVisible && <p className='flat-description-txt'>{props.content}</p>}
    </div>
  );
}

export default InfoPanel