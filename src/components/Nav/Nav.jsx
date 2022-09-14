import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='search'>search</Link>
            <Link to='result'>result</Link>
        </div>
    )
}

export default Nav