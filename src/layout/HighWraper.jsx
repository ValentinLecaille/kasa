import React from 'react'
import '../style/Layout/HighWraper.css'

function HighWraper(props) {
    return <div className='highwraper'>{props.children}</div>
}

export default HighWraper