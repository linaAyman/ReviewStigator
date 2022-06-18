import React from 'react';
import { FaSearch } from 'react-icons/fa';
import {useState,useEffect} from 'react'
import axios from 'axios';
import Plot from 'react-plotly.js';
import './review.css';

function ReviewTest(){

    const [text,setText]= useState('')
    const [data, setData] = useState([])
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
        // console.log(data["aspects"])
        // console.log("click? ",isClicked)

        // resText=data['text'];
        // aspect=data['aspect'];
        // color=data['Colorflag']=='positive'?'green': data[Colorflag]=='negative'?'red':'yellow';

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

    const Highlighted = ({ text = "", highlight = "",color="yellow" }) => {
        
        if (!highlight.trim()) {
          return <span>{text}</span>;
        }
        const regex = new RegExp(`(${highlight})`, "gi");
        const parts = text.split(regex);

        //text colors & BG colors
        let textClr,bgClr;
        if(color=='green')
        {
            textClr="#286a49";
            bgClr="#2ed682";        
        }
        else if (color=='yellow'){
            textClr="#f3f31c";
            bgClr="#f3f31c";
        }
        else if (color="red"){
            textClr="#eb3f3f";
            bgClr="#e85f5f";
        }
      
        return (
          <span>
            {parts.filter(String).map((part, i) => {
              return regex.test(part) ? (
                <mark style={{color: color,background: color}} key={i}>{part}</mark>
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
                <div className='search-container-review'>

                    <textarea name="search"
                        placeholder="Search by a review..(limit of 300 words)"
                        onChange={e => onChangeHandler(e.target.value)}
                        value={text}
                        cols="40" 
                        rows="5"
                        maxLength="300"
                        >
                
                    </textarea>

                {/* <input
                
                name="search" 
                type="text" placeholder="Search by a review.."
                onChange={e => onChangeHandler(e.target.value)}
                value={text}
                /> */}
                <button
                style={{color: "#57077c"}}
                onClick={() => onSubmitHndler(text)}
                type="submit"><FaSearch /></button>
                </div>
                
                
                
                
            </div>
            <div className='result'>{printRes(clicked)}</div>
        </div>
    )


}
export default ReviewTest