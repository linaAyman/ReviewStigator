import React from 'react';
import axios from 'axios'
import {useState,useEffect} from 'react'
import './csearch.css'
import { FaSearch } from 'react-icons/fa';

function Compare() {
    const [users,setUsers]= useState([])
    const [text,setText]= useState('')
    const [suggestions,setSuggestions]=useState([])

    useEffect(() => {
        const loadUsers = async() =>{
            const response = await axios.get('https://reqres.in/api/users');
            console.log(response.data)
            setUsers(response.data.data)
        }
        loadUsers();
    }, [])

    const onSuggestHandler =(text) =>{
        setText(text);
        setSuggestions([]);
    }

    const onChangeHandler=(text) => {
        let matches=[]
        if(text.length>0){
            matches=users.filter(user => {
                const regex =  new RegExp(`${text}`,"gi");
                return user.email.match(regex)
            })
        }
        console.log('matches',matches)
        setSuggestions(matches)
        setText(text)
    }

    return (
        <div >

            <div className="topnav">
                <div className='splitScreen'>

                    <div className='topPane'>
                        <div className='search-container'>
                            
                            <input
                            name="search" 
                            type="text" placeholder="Search by product link.."
                            onChange={e => onChangeHandler(e.target.value)}
                            value={text}
                            />
                            <button type="submit"><FaSearch /></button>
                            {suggestions && suggestions.map((suggestion, i)=>
                                <div key={i}
                                onClick={()=>onSuggestHandler(suggestion.email)}
                                >{suggestion.email}</div>
                            )}
        
                        </div>
                    </div>
                    
                    <div className='bottomPane'>
                        <div className='search-container'>
                            
                            <input
                            name="search" 
                            type="text" placeholder="another product link.."
                            onChange={e => onChangeHandler(e.target.value)}
                            value={text}
                            />
                            <button type="submit"><FaSearch /></button>
                            {suggestions && suggestions.map((suggestion, i)=>
                                <div key={i}
                                onClick={()=>onSuggestHandler(suggestion.email)}
                                >{suggestion.email}</div>
                            )}
                        </div>
                    </div>
    
                    
                </div>
                
                
            </div>
            

        </div>

    )
}

export default Compare

