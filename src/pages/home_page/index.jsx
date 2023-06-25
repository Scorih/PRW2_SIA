import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return <div>
        <span style={{marginRight:20}}>home</span>
        <Link to={'/about_us'}>О руководстве</Link>
    </div>
}

export default HomePage