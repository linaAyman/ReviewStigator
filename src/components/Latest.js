import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { FaFire } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import './Latest.css'

function Latest() {
    return (
        <IconContext.Provider value={{color:'#fff',size:64}}>
            

            <div>
                <div className="latest__section">
                    <div className="latest__wrapper">
                        <div className="latest__container">
                            <Link to="/agencies"
                            className='latest__container-card'>
                                <div className="latest__container-cardInfo">
                                    <div className="icon">
                                    <img src="images/Leco-1.png" alt="LECO" class="image"/>
                                    </div>
                                    <ul className="latest__container-agencies">
                                        <li>LECO</li>
                                        <li>IXRF Systems</li>
                                        <li>ROCKLABS</li>
                                    </ul>
                                    <Button buttonSize='btn-wide' buttonColor='blue'>Visit Company Website</Button>
                                </div>
                            </Link>
                        </div>

                        <div className="latest__container">
                            <Link to="/agencies"
                            className='latest__container-card'>
                                <div className="latest__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <ul className="latest__container-agencies">
                                        <li>LECO</li>
                                        <li>IXRF Systems</li>
                                        <li>ROCKLABS</li>
                                    </ul>
                                    <Button buttonSize='btn-wide' buttonColor='blue'>Visit Company Website</Button>
                                </div>
                            </Link>
                        </div>

                        <div className="latest__container">
                            <Link to="/agencies"
                            className='latest__container-card'>
                                <div className="latest__container-cardInfo">
                                    <div className="icon">
                                    <img src="images/Leco-1.png" alt="LECO" class="image"/>
                                    </div>
                                    <ul className="latest__container-agencies">
                                        <li>LECO</li>
                                        <li>IXRF Systems</li>
                                        <li>ROCKLABS</li>
                                    </ul>
                                    <Button buttonSize='btn-wide' buttonColor='blue'>Visit Company Website</Button>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Latest