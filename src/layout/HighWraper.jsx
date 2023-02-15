import React from 'react'
import '../style/Layout/HighWraper.css'


function HighWraper(props) {
    const {children} = props.children;
    console.log('children:', children)
    return <div className='highwraper'>{props.children}</div>
}

export default HighWraper