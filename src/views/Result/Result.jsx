import React from 'react'
import Preview from '../../components/Preview'
import SearchBar from '../../components/SearchBar/SearchBar'

const Result = (props) => {
    props.searchByQ(props.q)

    return (
        <>
            <SearchBar q={props.q} setQ={props.setQ} />
            <Preview q={props.q} />
        </>
    )
}

export default Result