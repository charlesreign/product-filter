import React from 'react'

const capitalize=(param) => {
  return param.charAt(0).toUpperCase() + param.slice(1)
}

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="--flex-center">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="--btn --btn-secondary btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {/* {category} */}
            {/* {category.toUpperCase()} */}
            {capitalize(category)}
          </button>
        );
      })}
    </div>
  )
}

export default Categories
