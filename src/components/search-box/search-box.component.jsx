import React from 'react'
import './search-box.styles.css'

const SearchField = ({ placeholder, handleChange }) => (
    <input 
        type='search'
        className='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)

export default SearchField;