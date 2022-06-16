import React from 'react';
import axios from 'axios'
import {useState,useEffect} from 'react'
import '../Compare/compare.css'
import { FaSearch } from 'react-icons/fa';
import Plot from 'react-plotly.js';
import { Link } from 'react-router-dom'
import { Button } from '../../Button'


function Compare() {
    const [users,setUsers]= useState([])
    const [text1,setText1]= useState('')
    const [text2, setText2] = useState('')
    const [suggestions,setSuggestions]=useState([])

    //
    const [data1, setData1] = useState([])
    const [deets1, setDeets1] = useState([])
    const [data2, setData2] = useState([])
    const [deets2, setDeets2] = useState([])


    const [clicked1, setClick1] = useState(false)
    const [clicked2, setClick2] = useState(false)

    // arrays of aspects
    const [pos1, setPos1] = useState([])
    const [neu1, setNeu1] = useState([])
    const [neg1, setNeg1] = useState([])
    const [pos2, setPos2] = useState([])
    const [neu2, setNeu2] = useState([])
    const [neg2, setNeg2] = useState([])

    //data2
    

    useEffect(() => {
        const loadUsers = async() =>{
            const response = await axios.get('https://reqres.in/api/users');
            console.log(response.data)
            setUsers(response.data.data)
        }
        loadUsers();
    }, [])

    const onSuggestHandler =(text,id) =>{
        if(id===1){
            setText1(text);
        }
        else if(id===2){
            setText2(text);
        }
        setSuggestions([]);
    }

    const onChangeHandler=(text,id) => {
        if (id === 1) {
            setText1(text);
        }
        else if (id === 2) {
            setText2(text);
        }
        setSuggestions([]);
        let matches=[]
        if(text.length>0){
            matches=users.filter(user => {
                const regex =  new RegExp(`${text}`,"gi");
                return user.email.match(regex)
            })
        }
        console.log('matches',matches)
        setSuggestions(matches)
        
    }

    const handleSubmit =() =>{
        var form = document.getElementsByName("newsteller")[0];
        form.reset();
      }

    const plotDiv = (isClicked,id) => {
        // console.log(isClicked);

        // setElectronics(data["isElectronic"])
        // console.log("ISELECTRONICS", data["isElectronic"]);

        let pos,neu,neg,isElectric,isFound;

        if (id==1)
        {
            pos=pos1;
            neu=neu1;
            neg=neg1;
            isElectric=data1["isElectronic"];
            isFound=data1["isFound"];

            var trace1 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets1["postives"],//[20, 14, 23, 27, 20, 30, 40, 50, 60,23],
                name: 'Positive',
                type: 'bar'
            };
    
            var trace2 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets1["neutral"],//[12, 18, 29, 10, 14, 20, 30, 40, 5,78],
                name: 'Neutral',
                type: 'bar'
            };
            var trace3 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets1["negatives"],//[2, 8, 9, 10, 14, 20, 30, 40, 60,99],
                name: 'Negative',
                type: 'bar'
            };
        }
        else if (id==2)
        {
            pos=pos2;
            neu=neu2;
            neg=neg2;
            isElectric=data2["isElectronic"];
            isFound=data2["isFound"];

            var trace1 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets2["postives"],//[20, 14, 23, 27, 20, 30, 40, 50, 60,23],
                name: 'Positive',
                type: 'bar'
            };
    
            var trace2 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets2["neutral"],//[12, 18, 29, 10, 14, 20, 30, 40, 5,78],
                name: 'Neutral',
                type: 'bar'
            };
            var trace3 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets2["negatives"],//[2, 8, 9, 10, 14, 20, 30, 40, 60,99],
                name: 'Negative',
                type: 'bar'
            };
        }

        

        var layout = { barmode: 'group', width: 300, title: 'Distribution of Aspects' };
        let aspects = ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service']
        
        if(isFound){
            return(

                
                <div style={{ padding: '3%', alignItems:"flex-end" }}>

                        <div class="row">
                            <div class="column-msg">
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
                            
                            <div class="column-msg">
                                <img src="images/dtctv2.png" alt="error-msg" style={{width:"70%",float:"right"}}/>
                            </div>
                            
                        </div>

                    
                
                </div>
            )
        }

        else{

            if (isClicked && isElectric) {
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
                                <div class="column-compare">
                                    <img src="images/dtctv4.png" alt="wordCloud1" style={{width:"100%"}}/>
                                </div>
                                <div class="column-compare">
                                    <img src="images/dtctv4.png" alt="wordCloud2" style={{width:"100%"}}/>
                                </div>
                                <div class="column-compare">
                                    <img src="images/dtctv4.png" alt="wordCloud3" style={{width:"50%"}}/>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div></div>
                            {/* <h1 style={{ color: '#469777' }}>Bar Plot</h1> */}
                            <Plot data={[trace1, trace2, trace3]}
                                layout={{ layout }}
                            />
                        </div>
    
                        
    
                        {aspects.map((it, index) => (
                                <div>
                                    <h1 style={{ color: '#469777' }}>{"Aspect: "+it}</h1>
                                    <Plot
                                    data={[{
                                        values: [pos[index], neu[index], neg[index]],
                                        labels: ['positives','neutral','negatives'],
                                        type: 'pie'
                                    }]}
                                    layout={{width: 500, height: 500, title: it+' statistics'}}
                                    />
                                </div>
                            ))}
    
                    </div>
                )
    
            }
    
            else if (isClicked && !isElectric) {
    
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
                                <div class="column-compare">
                                    <img src="images/dtctv4.png" alt="wordCloud1" style={{width:"100%"}}/>
                                </div>
                                <div class="column-compare">
                                    <img src="images/dtctv4.png" alt="wordCloud2" style={{width:"100%"}}/>
                                </div>
                                <div class="column-compare">
                                    <img src="images/dtctv4.png" alt="wordCloud3" style={{width:"50%",marginLeft:"25%"}}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div></div>
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
    
                    // <div style={{ flexDirection: 'row' }}>
                    // <div>
                    //         {/* <h1 style={{ color: '#469777' }}>Bar Plot</h1> */}
                    //         <Plot data={[trace1, trace2, trace3]}
                    //             layout={{ layout }}
                    //         />
                    // </div>
    
                    // <div>
                    //     <Plot
                    //     data={[{
                    //         values: [33,33,34],
                    //         labels: ['Iphone','Samsung','Huawei'],
                    //         type: 'pie'
                    //     }]}
                    //     layout={{width: 500, height: 500, title: 'Piechart demo'}}
                    //     />
                    // </div>
                    // </div>
                )
    
            }
    
            else {
                return (
                    <div></div>
                )
    
            }

        }
    }

    const onSubmitHndler = (text,id) => {
        if (id === 1) {
            setText1(text);
            setClick1(true)

            axios.post('http://localhost:4000/reviews_statistics',
            {
                "url": text
            }).then(res => {
                console.log("gowaaa el submit", res.data[0]);
                setDeets1(res.data[0]["details"]);
                setData1(res.data[0]);
                console.log("deets", res.data[0]["details"]["postives"])
                setPos1(res.data[0]["details"]["postives"]);
                setNeu1(res.data[0]["details"]["neutral"]);
                setNeg1(res.data[0]["details"]["negatives"]); })
        }
        else if (id === 2) {
            setText2(text);
            setClick2(true)

            axios.post('http://localhost:4000/reviews_statistics',
            {
                "url": text
            }).then(res => {
                console.log("gowaaa el submit", res.data[0]);
                setDeets2(res.data[0]["details"]);
                setData2(res.data[0]);
                console.log("deets", res.data[0]["details"]["postives"])
                setPos2(res.data[0]["details"]["postives"]);
                setNeu2(res.data[0]["details"]["neutral"]);
                setNeg2(res.data[0]["details"]["negatives"]); })
        }
        


        console.log(text);
        

        // console.log(response.value.data);
        // setData(response.data.data);
    }

    return (


        
            <div >

                <div className='topPane'>
                    <div className="topnav">
                        <div className='search-container'>
                            
                            <h1 style={{ color: '#57077c' }}>Product 1</h1>
                            <input
                            name="search1" 
                            type="text" placeholder="Search by product link.."
                            onChange={e => onChangeHandler(e.target.value,1)}
                            value={text1}
                            onKeyDown={e => (e.key === 'Enter' ? onSubmitHndler(text1,1) : null)}
                            />
                            <button 
                            onClick={() => onSubmitHndler(text1,1)}
                            style={{alignItems:"center"}}
                            type="submit"><FaSearch style={{color: "#57077c"}} /></button>
                            {/* {suggestions && suggestions.map((suggestion, i)=>
                                <div key={i}
                                onClick={()=>onSuggestHandler(suggestion.email)}
                                >{suggestion.email}</div>
                            )} */}
        
                        </div>
                    </div>
                    
                    <div>{plotDiv(clicked1,1)}</div>

                </div>
                
                <div className='bottomPane'>
                    <div className="topnav">
                        <div className='search-container'>
                            <h1 style={{ color: '#57077c' }}>Product 2</h1>
                            <input
                            name="search2" 
                            type="text" placeholder="Another product link.."
                            onChange={e => onChangeHandler(e.target.value,2)}
                            value={text2}
                            onKeyDown={e => (e.key === 'Enter' ? onSubmitHndler(text2,2) : null)}
                            />
                            <button 
                            onClick={() => onSubmitHndler(text2,2)}
                            type="submit"><FaSearch style={{color: "#57077c"}} /></button>
                            {/* {suggestions && suggestions.map((suggestion, i)=>
                                <div key={i}
                                onClick={()=>onSuggestHandler(suggestion.email)}
                                >{suggestion.email}</div>
                            )} */}
                        </div>
                    </div>

                    <div>{plotDiv(clicked2,2)}</div>
                    
                </div>

                
            </div>
            
            
       
            

    )
}

export default Compare

