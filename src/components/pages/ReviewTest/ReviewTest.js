import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {useState,useEffect} from 'react'

function ReviewTest(){

    const [text,setText]= useState('')

    const onChangeHandler=(text) => {
        
        
        setText(text)
    }

    return(

        <div className='topnav'>
            <div className='search-container'>
            <input
            name="search" 
            type="text" placeholder="Search by a review.."
            onChange={e => onChangeHandler(e.target.value)}
            value={text}
            />
            <button type="submit"><FaSearch /></button>
            </div>
            
            
        </div>
    )


}
export default ReviewTest