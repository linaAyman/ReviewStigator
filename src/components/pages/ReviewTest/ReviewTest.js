import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {useState,useEffect} from 'react'
import axios from 'axios';
import Plot from 'react-plotly.js';
import './review.css';

function ReviewTest(){

    const [text,setText]= useState('')
    const [data, setData] = useState([])
    const [deets, setDeets] = useState([])
    const [clicked, setClick] = useState(false)

    const onSubmitHndler=(text) => {
        setText(text)
        setClick(true)

        console.log(text);
        axios.post('http://localhost:4000/review_test',
        {
            "review":text
            }).then(res => { console.log(res.data);  setData(res.data)})
        
        // console.log(response.value.data);
        // setData(response.data.data);
    }

    const printRes=(isClicked)=>{
        console.log(data["aspects"])
        console.log("click? ",isClicked)
        if (isClicked){

            return(
                <div>
                    <h3> The result of the ABSA for your input: </h3>
                    <Highlighted
                        // text={data["Aspect"]+"/n"+data["Sentiment"]} 
                        text="the battery lasts little"
                        highlight="battery"
                    />
    
                </div>
            )
        }
        
    }

    const onChangeHandler=(text) => {
   
        setText(text)
    }

    const Highlighted = ({ text = "", highlight = "" }) => {
        if (!highlight.trim()) {
          return <span>{text}</span>;
        }
        const regex = new RegExp(`(${highlight})`, "gi");
        const parts = text.split(regex);
      
        return (
          <span>
            {parts.filter(String).map((part, i) => {
              return regex.test(part) ? (
                <mark style={{color: 'green',background: '#00CC00'}} key={i}>{part}</mark>
              ) : (
                <span key={i}>{part}</span>
              );
            })}
          </span>
        );
      };

    return(

        <div>
            <div className='topnav'>
                <div className='search-container'>

                    <textarea name="search"
                        placeholder="Search by a review.."
                        onChange={e => onChangeHandler(e.target.value)}
                        value={text}
                        cols="40" 
                        rows="5">
                
                    </textarea>

                {/* <input
                
                name="search" 
                type="text" placeholder="Search by a review.."
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                /> */}
                <button 
                onClick={() => onSubmitHndler(text)}
                type="submit"><FaSearch /></button>
                </div>
                
                
                
                
            </div>
            <div className='result'>{printRes(clicked)}</div>
        </div>
    )


}
export default ReviewTest