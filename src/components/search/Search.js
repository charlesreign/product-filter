import React from 'react'

const Search = ({ onInputChange, inputValue }) => {
  return (
    <div className="--form-control">
      <input
        type="text"
        placeholder="Search Products"
        onChange={onInputChange}
        value={inputValue}
      />
    </div>
  )
}

export default Search
