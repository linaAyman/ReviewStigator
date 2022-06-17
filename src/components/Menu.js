import React from 'react'
import './Menu.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'
import Plot from 'react-plotly.js'
import { Button } from './Button'
import Modal from 'react-modal';
import { FaBars,FaTimes } from 'react-icons/fa'
Modal.setAppElement("#root");

function Menu({menuItem}) {


    //data and details
    const [data, setData] = useState([])
    const [deets, setDeets] = useState([])

    //arrays of aspects
    const [pos, setPos] = useState([])
    const [neu, setNeu] = useState([])
    const [neg, setNeg] = useState([])

    //modal
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    const onClickHandler=(text) => {
        
        setIsOpen(true)
       
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
                setIsOpen(true);
        })  
        
       
    }

    const plotDiv = (isClicked) => {
        
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
    
    const customStyles = {
        overlay: {
            background: "rgba(0, 0, 0, 0.5)",
            overflowY: "scroll",
            display:"-ms flexbox"
          },
        content: {
          top: '55%',
          left: '50%',
          right: '20%',
          bottom: '10%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          opacity: "90%",
          height:"550px", //or maxHeight
          border:" solid 1px purple", 
        },
      };

    const openModal=(url)=> {
        
        console.log("OPENMODAL; ISOPEN? ",modalIsOpen)
        setIsOpen(true)

        axios.post('http://localhost:4000/reviews_statistics',
        {
            "url":url
            }).then(res => { 
                console.log("gowaaa el submit", res.data[0]);
                setDeets(res.data[0]["details"]); 
                setData(res.data[0]); 
                console.log("deets", res.data[0]["details"]["postives"]) 
                setPos(res.data[0]["details"]["postives"]);
                setNeu(res.data[0]["details"]["neutral"]);
                setNeg(res.data[0]["details"]["negatives"]);
                setIsOpen(true);
        })
       
    }

    const afterOpenModal=()=> {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#57077c';
    }

    const closeModal=()=> {
    setIsOpen(false);
    }
    

    return (
        <div className="item">
            {
                menuItem.map((item) =>{
                    // return <Link to={item.url} target='_parent' className="item-con" key={item.id}>
                    return(

                            <div className='item-con'>
                                
                                <div 
                                className="item-container"
                                onClick={()=>openModal(item.url)}
                                >
                                    {item.image}
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    
                                </div>

                            </div>

                        
                    )
                    
                })
            }
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Product Statistics"
            closeTimeoutMS={500}
        >
            <div style={{position: "relative", paddingLeft: "95%", fontSize: "30px" ,color: "#57077c",cursor:"pointer"}}
            onClick={closeModal}>
                {<FaTimes/> }
            </div>
            <h2 style={{color:"#57077c"}} ref={(_subtitle) => (subtitle = _subtitle)}>Retrieved product statistics</h2>
            {plotDiv(modalIsOpen)}
            <Button onClick={closeModal}>close</Button>
            
        </Modal>

        </div>
    )
}

export default Menu;