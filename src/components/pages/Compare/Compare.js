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

        let pos,neu,neg,isElectric,isFound,img1,img2,img3,Name;

        if (id==1)
        {
            pos=pos1;
            neu=neu1;
            neg=neg1;
            isElectric=data1["isElectronic"];
            isFound=data1["isFound"];
            img1 = data1["positiveWordCloud"];
            img2 = data1["neutralWordCloud"];
            img3 = data1["negativeWordCloud"];
            Name=data1["productName"];

            var trace1 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets1["positives"],//[20, 14, 23, 27, 20, 30, 40, 50, 60,23],
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
            img1 = data2["positiveWordCloud"];
            img2=data2["neutralWordCloud"];
            img3=data2["negativeWordCloud"];
            Name=data2["productName"];

            var trace1 = {
                x: ['Display', 'Battery', 'Performance', 'Price', 'Camera', 'Sound', 'Design', 'Software', 'Hardware', 'Support/Service'],
                y: deets2["positives"],//[20, 14, 23, 27, 20, 30, 40, 50, 60,23],
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
        
        if(isFound===false){
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

        else if (isFound === true) {

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
                            <h1 style={{ color: '#57077c' }}>{Name}</h1>
                            <h1 style={{ color: '#57077c' }}>Word Clouds</h1>
                            <div class="row">
                                <div class="column-home">
                                    <img src={img1} alt="wordCloud1" style={{width:"100%"}}/>
                                    <figcaption style={{ marginLeft: "25%", color: '#57077c' }}>Fig.1 - Positive WordCloud.</figcaption>
                                </div>
                                <div class="column-home">
                                    <img src={img2} alt="wordCloud2" style={{width:"100%"}}/>
                                    <figcaption style={{ marginLeft: "25%", color: '#57077c' }}>Fig.2 - Neutral WordCloud.</figcaption>

                                </div>
                                <div class="column-home">
                                    <img src={img3} alt="wordCloud3" style={{width:"100%"}}/>
                                    <figcaption style={{ marginLeft: "25%", color: '#57077c' }}>Fig.3 - Negative WordCloud.</figcaption>

                                </div>
                            </div>
                        </div>
                        
                        <div></div>

                        <div>
                            <div style={{ paddingLeft:"3%",marginTop: "5%" }}></div>
                            <h1 style={{ color: '#57077c' }}>Overall features and aspects</h1>
                            <Plot
                                style={{ width: '150%', height: "100%" }}
                                data={[trace1, trace2, trace3]}
                                layout={{ layout }}
                            />
                        </div>
    
                        
    
                        <div>
                            {aspects.map((it, index) => (
                                    <div>
                                        <h1 style={{ color: '#57077c' }}>{"Aspect: "+it}</h1>
                                        <Plot
                                        data={[{
                                            values: [pos[index], neu[index], neg[index]],
                                            marker: {
                                                'colors': ['#2ca02c',
                                                    '#ff7f0e',
                                                    '#1f77b4']
                                            },
                                            labels: ['positives','neutrals','negatives'],
                                            type: 'pie'
                                        }]}
                                        layout={{width: 500, height: 500, title: it+' statistics'}}
                                        />
                                    </div>
                                ))}
                        </div>
    
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
                            <h1 style={{ color: '#57077c' }}>{Name}</h1>
                            <h1 style={{ color: '#57077c' }}>Word Clouds</h1>
                            <div class="row">
                                <div class="column-home">
                                    <img src={img1} alt="wordCloud1" style={{width:"100%"}}/>
                                    <figcaption style={{ marginLeft: "25%", color: '#57077c' }}>Fig.1 - Positive WordCloud.</figcaption>
                                </div>
                                <div class="column-home">
                                    <img src={img2} alt="wordCloud2" style={{width:"100%"}}/>
                                    <figcaption style={{ marginLeft: "25%", color: '#57077c' }}>Fig.2 - Neutral WordCloud.</figcaption>

                                </div>
                                <div class="column-home">
                                    <img src={img3} alt="wordCloud3" style={{width:"100%"}}/>
                                    <figcaption style={{ marginLeft: "25%", color: '#57077c' }}>Fig.3 - Negative WordCloud.</figcaption>

                                </div>
                            </div>
                        </div>

                        <div></div>

                        <div></div>
                        <div style={{ marginTop: "5%" }}>

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
    
                    // <div style={{ flexDirection: 'row' }}>
                    // <div>
                    //         {/* <h1 style={{ color: '#57077c' }}>Bar Plot</h1> */}
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
        else {
            return (
                <div></div>
            )

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
                    console.log("gowaaa el submit", res.data[0]["isFound"]);
                    if (res.data[0]["isFound"] === true) {
                        console.log("ANA FEL IF", res.data);
                        setDeets1(res.data[0]["details"]);
                        setData1(res.data[0]);
                        // console.log("deets", res.data[0]["details"]["postives"]) 
                        setPos1(res.data[0]["details"]["positives"]);
                        setNeu1(res.data[0]["details"]["neutral"]);
                        setNeg1(res.data[0]["details"]["negatives"]);
                    } else {
                        setData1(res.data[0]);
                        console.log("ANA FEL ELSE", res.data);
                    }
                })
        }
        else if (id === 2) {
            setText2(text);
            setClick2(true)

            axios.post('http://localhost:4000/reviews_statistics',
                {
                    "url": text
                }).then(res => {
                    console.log("gowaaa el submit", res.data[0]["isFound"]);
                    if (res.data[0]["isFound"] === true) {
                        console.log("ANA FEL IF", res.data);
                        setDeets2(res.data[0]["details"]);
                        setData2(res.data[0]);
                        // console.log("deets", res.data[0]["details"]["postives"]) 
                        setPos2(res.data[0]["details"]["positives"]);
                        setNeu2(res.data[0]["details"]["neutral"]);
                        setNeg2(res.data[0]["details"]["negatives"]);
                    } else {
                        setData2(res.data[0]);
                        console.log("ANA FEL ELSE", res.data);
                    }
                })
        }
        


        console.log(text);
        

        // console.log(response.value.data);
        // setData(response.data.data);
    }

    return (


        
            <div className='splitScreen'>

                <div className='topPane'>
                    <div className="topnav">
                        <div className='search-container'>
                            
                            <h1 style={{ color: '#57077c' }}>First Product</h1>
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
                            <h1 style={{ color: '#57077c' }}>Second Product</h1>
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

