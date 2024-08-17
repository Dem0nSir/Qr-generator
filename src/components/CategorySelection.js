import React from 'react'

const CategorySelection = ({onSelect}) => {
    const categories = ['Social Profile', 'Personal Info', 'Bank Account'];
  return (
    <div className="text-center">
      <h2 className="mb-4">Select a Category</h2>
      <div className="d-grid gap-2">
        {categories.map((category) => (
          <button 
            key={category} 
            className="btn btn-outline-primary btn-lg"
            onClick={() => onSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategorySelection