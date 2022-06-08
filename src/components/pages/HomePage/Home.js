import React from 'react'
import HeroSection from '../../HeroSection'
import Latest from '../../Latest'
import {homeObjOne} from './Data'
import Grid from '../../Grid'
import PiePlot from '../../PiePlot';
import BoxPlot from '../../BoxPlot'
import TimePlot from '../../TimePlot'


import axios from 'axios'
import {useState,useEffect} from 'react'
import './search.css'
import { FaSearch } from 'react-icons/fa';
import Plot from 'react-plotly.js';

function Home() {
    const [users,setUsers]= useState([])
    const [text,setText]= useState('')
    const [suggestions,setSuggestions]=useState([])

    handlePlot1 = () => {
        axios.get("http://localhost:9000/plot2_json"),{
            "url":text
        }
            .then(resp => {console.log(resp.data); 
            Plotly.newPlot('distChart',resp.data.data,resp.data.layout);})
        }

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

    const onSubmitHndler=(text) => {
        setText(text)
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
                <div className='search-container'>
                    
                <input
                name="search" 
                type="text" placeholder="Search by product link.."
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                />
                <button type="submit"
                onSubmit={ ()=>onSubmitHndler(text)  }
                ><FaSearch /></button>
                {suggestions && suggestions.map((suggestion, i)=>
                    <div key={i}
                    onClick={ ()=>onSuggestHandler(suggestion.email)}
                    >{suggestion.email}</div>
                )}

                </div>
                
            </div>
            

            <div>
            <h1 style={{color: '#469777'}}>Bar Plot</h1>
                <Plot data={[{
                    x:[1,2,3],y:[1,2,3],
                    type: 'bar',
                    mode:'lines+markers',
                    maker:{color: '#d3714d'}
                }]}
                layout={{width: 1200, height: 600, title:'Bar plot demo'}}
                />
            </div>
                
            <div>
            <h1 style={{color: '#469777'}}>Pie Plot</h1>
            <PiePlot/>
            </div>

            <div>
            <h1 style={{color: '#469777'}}>Box Plot</h1>
            <BoxPlot/>
            </div>

            <div>
            <h1 style={{color: '#469777'}}>Time Plot</h1>
            <TimePlot/>
            </div>

        </div>
    
    )
}

export default Home
