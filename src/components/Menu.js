import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'

function Menu({menuItem}) {
    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    return <Link to={item.url} target='_parent' className="item-con" key={item.id}>
                        <div className="item-container">
                            {item.image}
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}

export default Menu;