import React from 'react'
import AboutBanner from '../../components/About/AboutBanner'
import '../../style/About/About.css'
import InfoPanel from '../../components/Flat/InfoPanel'

function About() {
  return (
    <>
        <AboutBanner/>
        <div className='about-container'>
            <InfoPanel/>
            <InfoPanel/>
            <InfoPanel/>
            <InfoPanel/>
        </div>
    </>
  )
}

export default About