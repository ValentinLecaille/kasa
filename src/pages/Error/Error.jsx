import React from 'react'
import Header from '../../layout/Header'
import {Link} from 'react-router-dom'
import HighWraper from '../../layout/HighWraper'
import '../../style/Error/Error.css'

function Error() {
  return (
    <>
    <HighWraper>
        <Header />
        <div className='error-container'>
            <h1 className='error-title'>404</h1>
            <h2 className='error-subtitle'>Oops! La page que vous demandez n'existe pas</h2>
            <Link className='error-link' to="/">Retournez sur la page d'accueil</Link>
        </div>
    </HighWraper>
    </>
  )
}

export default Error