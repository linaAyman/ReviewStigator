import React from 'react'
import './FilterButton.css'

function FilterButton({button, filter}) {
    return (
        <div className="filter-btns">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="filter-btn">{cat}</button>
                })
            }
        </div>
    )
}

export default FilterButton;