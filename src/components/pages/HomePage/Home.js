import { Link } from 'react-router-dom'
import { Button } from '../../Button'
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
import './home.css'
import { FaSearch } from 'react-icons/fa';
import Plot from 'react-plotly.js';

function Home() {
    const [users,setUsers]= useState([])
    const [text,setText]= useState('')
    const [suggestions,setSuggestions]=useState([])
    const [data, setData] = useState([])
    const [deets, setDeets] = useState([])

    //arrays of aspects
    const [pos, setPos] = useState([])
    const [neu, setNeu] = useState([])
    const [neg, setNeg] = useState([])



    const [clicked,setClick] = useState(false)

    // handlePlot1 = () => {
    //     axios.get("http://localhost:9000/plot2_json"),{
    //         "url":text
    //     }
    //         .then(resp => {console.log(resp.data); 
    //         Plotly.newPlot('distChart',resp.data.data,resp.data.layout);})
    //     }

    useEffect(() => {
        const loadUsers = async() =>{
            const response = await axios.get('https://reqres.in/api/users');
            // console.log(response.data)
            setUsers(response.data.data)
        }
        loadUsers();
    }, [])

    const onSuggestHandler =(text) =>{
        setText(text);
        setSuggestions([]);
    }
    const handleSubmit =() =>{
        var form = document.getElementsByName("newsteller")[0];
        form.reset();
      }

    const onSubmitHndler=(text) => {
        setText(text)
        setClick(true)

        console.log(text);
        axios.post('http://localhost:4000/reviews_statistics',
        {
            "url":text
            }).then(res => { 
                console.log("gowaaa el submit", res.data[0]);
                 setDeets(res.data[0]["details"]); 
                 setData(res.data[0]); 
                console.log("deets", res.data[0]["details"]["postives"]) 
                setPos(res.data[0]["details"]["postives"]);
                setNeu(res.data[0]["details"]["neutral"]);
                setNeg(res.data[0]["details"]["negatives"]);
                })
        
        // console.log(res.data);
        // setData(response.data.data);
    }

    const plotDiv = (isClicked) => {
        // console.log("dataaaaa",data);

        // setElectronics(data["isElectronic"])
        // console.log("ISELECTRONICS");
        // if (data){
        //     // console.log("details pos",pos);
        // }

        
        
        var trace1 = {
            x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
            y: deets["postives"],
            name: 'Positive',
            type: 'bar'
        };

        var trace2 = {
            x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
            y: deets["neutral"],
            name: 'Neutral',
            type: 'bar'
        };
        var trace3 = {
            x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
            y: deets["negatives"],
            name: 'Negative',
            type: 'bar'
        };

        var layout = { barmode: 'group',autosize: false,width: 800, height: 500 ,title: 'Distribution of Aspects' };
        let aspects = ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service']

        if(data["isFound"]){
            return(

                
                <div style={{ alignItems:"flex-end" }}>

                        <div class="row">
                            <div style={{padding: '3%'}} class="column-msg">
                                <div>
                                    <h2 style={{ color: '#57077c' ,width: '100%', height: "100%" }}>Sorry looks like we don't have this product info in our database right now...</h2>
                                    <h2 style={{ color: '#57077c' ,width: '100%', height: "100%" }}>Please come back after a while, we'll work on it!</h2>
                                </div>
                                
                                
                                <div style={{paddingTop:"1%"}}>
                                    <h3 style={{ color: '#57077c' ,width: '100%', height: "100%" }}>Meanwhile feel free to check out our processed products</h3>
                                    <Link style={{color: "#B79854",fontWeight:"bold"}} to="/agencies">See processed products!</Link>
                                </div>

                                <div style={{paddingTop:"1%"}}>
                                    <h3 style={{ color: '#57077c' ,width: '100%', height: "100%" }}>Or submit your email and we'll notify you when the product is processed</h3>
                                    
                                    <section className='email-subscription'>
                                        
                                        <div className='input-areas'>
                                            
                                        <form name='productNotify' target="_blank" action="https://formsubmit.co/2d6e1a89efa6492b6e05e1a2b92816ca" method="POST" onSubmit={handleSubmit}>
                                        
                                        <input type="hidden" name="_next" value="https://www.ixrfsystems.com/about/"/>
                                        <input type="hidden" name="_captcha" value="false"/>
                                            <input
                                            className='email-input'
                                            name='email'
                                            type='email'
                                            placeholder='Your Email'
                                            required
                                            />
                                            <Button type='submit' buttonStyle='btn--outline'>Submit</Button>
                                        </form>
                                        </div>
                                    </section>

                                </div>
                            </div>
                            
                            <div style={{paddingTop: '3%',paddingBottom: '3%'}} class="column-msg">
                                <img src="images/dtctv2.png" alt="error-msg" style={{width:"70%",float:"right"}}/>
                            </div>
                            
                        </div>

                    
                
                </div>
            )
        }

        else{

            if (isClicked && data["isElectronic"]) {
                // setClick(false)
                return (
                    
                    <div style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '3%' }}>
                        
                        
                        <div>
                            <h1 style={{ color: '#57077c' }}>Word Clouds:</h1>
                            <div class="row">
                                <div class="column-home">
                                    <img src="images/dtctv4.png" alt="wordCloud1" style={{width:"100%"}}/>
                                </div>
                                <div class="column-home">
                                    <img src="images/dtctv4.png" alt="wordCloud2" style={{width:"100%"}}/>
                                </div>
                                <div class="column-home">
                                    <img src="images/dtctv4.png" alt="wordCloud3" style={{width:"100%"}}/>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div></div>
                            <h1 style={{ color: '#57077c' ,width: '100%', height: "100%" }}>overall features and aspects</h1>
                            <Plot 
                                style={{width: '100%', height: "100%"}}
                                data={[trace1, trace2, trace3]}
                                layout={{ layout }}
                            />
                        </div>
    
                        
                        
                        
                        <div>
                            {aspects.map((it, index) => (
                                <div>
                                    <h1 style={{ color: '#57077c' }}>{"Aspect: " + it}</h1>
                                    <Plot
                                        data={[{
                                            values: [pos[index], neu[index], neg[index]],
                                            labels: ['positives', 'neutral', 'negatives'],
                                            type: 'pie'
                                        }]}
                                        layout={{ width: 800, height: 500, title: it + ' statistics' }}
                                    />
                                </div>
                            ))}
                        </div>                            
                
            
    
                    </div>
                )
               
            }
    
            else if (isClicked && !data["isElectronic"]) {
    
                return (
                    <div style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        padding: '3%' }}>
                        <div>
                            <h1 style={{ color: '#57077c' }}>Word Clouds:</h1>
                            <div class="row">
                                <div class="column-home">
                                    <img src="images/dtctv4.png" alt="wordCloud1" style={{width:"100%"}}/>
                                </div>
                                <div class="column-home">
                                    <img src="images/dtctv4.png" alt="wordCloud2" style={{width:"100%"}}/>
                                </div>
                                <div class="column-home">
                                    <img src="images/dtctv4.png" alt="wordCloud3" style={{width:"100%"}}/>
                                </div>
                            </div>
                        </div> 
                        <div>
                        <div></div>
                            <h1 style={{ color: '#57077c' }}>Pie Plot</h1>
                            <Plot
                                data={[{
                                    values: [pos[0], neu[0], neg[0]],
                                    labels: ['positives', 'neutral', 'negatives'],
                                    type: 'pie'
                                }]}
                                layout={{ width: 500, height: 500, title: 'Piechart demo' }}
                            />
                        </div>
                    
                        
                    </div>
                )
    
            }
            
            else{
                return (
                    <div></div>
                )
                       
            }

        }
        
        
    }


    const onChangeHandler=(text) => {
        let matches=[]
        if(text.length>0){
            matches=users.filter(user => {
                const regex =  new RegExp(`${text}`,"gi");
                return user.email.match(regex)
            })
        }
        // console.log('matches',matches)
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
                onKeyDown={e => (e.key === 'Enter' ? onSubmitHndler(text) : null)}
                />
                <button type="submit"
                onClick={ ()=>onSubmitHndler(text)  }
                ><FaSearch style={{color: "#57077c"}} /></button>
                {suggestions && suggestions.map((suggestion, i)=>
                    <div key={i}
                    onClick={ ()=>onSuggestHandler(suggestion.email)}
                    >{suggestion.email}</div>
                )}

                </div>
                
            </div>

    
            <div >{plotDiv(clicked)}</div>
            
                
            
            {/* <h1 style={{color: '#469777'}}>Box Plot</h1>
            <BoxPlot/>
            </div>

            <div>
            <h1 style={{color: '#469777'}}>Time Plot</h1>
            <TimePlot/>
            </div> */}

        </div>
    
    )
}

export default Home
