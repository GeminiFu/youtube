import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'

const Search = (props) => {
  return (
    <SearchBar setQ={props.setQ} />
  )
}

export default Search