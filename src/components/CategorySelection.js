import React from 'react'

const CategorySelection = ({onSelect}) => {
    const categories = ['Social Profile', 'Personal Info', 'Bank Account'];
  return (
    <div>
    <h2>Select a Category</h2>
    {categories.map((category) => (
      <button key={category} onClick={() => onSelect(category)}>
        {category}
      </button>
    ))}
  </div>
  )
}

export default CategorySelection