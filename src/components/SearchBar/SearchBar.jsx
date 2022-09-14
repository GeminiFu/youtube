import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchBar = (props) => {
    const [temptQ, setTemptQ] = useState(props.q)

    return (
        <>
            <input type="text" value={temptQ} onChange={e => { setTemptQ(e.target.value) }} />

            <Link to='/result'>
                <button onClick={() => { props.setQ(temptQ) }}>search</button>
            </Link>
        </>
    )
}

export default SearchBar