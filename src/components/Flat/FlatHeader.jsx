import React from 'react'
import '../../style/Flat/FlatHeader.css'

function FlatHeader() {
  return (
<div className='flat-header'>
<div className='flat-title'>
    <h1>Crazy Loft on canal St Martin</h1>
    <h2>Paris, Ile De France</h2>
    <div className='flat-tag'>
    <span>Cosy</span>
    <span>Canal</span>
    <span>Paris 10</span>
    </div>
</div>
<div className='flat-owner'>
    <div className='flat-owner-profile'>
    <h3 className='flat-owner-name'>
        <span>Alexandre</span>
        <span>Dumas</span>
    </h3>
    <div className='flat-badge'></div>
    </div>
    <div className='flat-stars'>
    <span className='on'>★</span>
    <span className='on'>★</span>
    <span className='on'>★</span>
    <span className='off'>★</span>
    <span className='off'>★</span>
    </div>
</div>
</div>
  )
}

export default FlatHeader