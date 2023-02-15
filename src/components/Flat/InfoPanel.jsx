import React from 'react'
import '../../style/Flat/FlatInfo.css'

function InfoPanel() {
  return (
    <div className='flat-description'>
      <p className='flat-description-title'>
        <span>Description</span>
        <i className="fa-solid fa-chevron-down"></i>
      </p>
      <p className='flat-description-txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, itaque, quas mollitia commodi qui ipsa est amet deleniti neque vel possimus error totam rerum. Quo expedita quidem rerum! Autem ab assumenda cum accusamus itaque, saepe numquam illo eum excepturi eaque fugiat optio nobis ducimus sequi a ipsa et voluptatum dolore.</p>
    </div>
  );
}

export default InfoPanel