import React from 'react'
import FlatBanner from '../../components/Flat/FlatBanner'
import FlatHeader from '../../components/Flat/FlatHeader'
import InfoPanel from '../../components/Flat/InfoPanel'

function Flat() {
  return (
    <div className='flat-page'>
      <FlatBanner />
      <FlatHeader />
      <div className='flat-info'>
        <InfoPanel />
        <InfoPanel />
      </div>
    </div>
  )
}

export default Flat