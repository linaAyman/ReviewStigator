import React from 'react'
import './Grid.css'
import {Link} from 'react-router-dom'

function Grid() {
    return (
        <>
            <div class="row">
                <div class="column">
                    
                    <Link  to={'//www.leco.com/product/836-series'} target='_parent' class="container">
                        <img src="images/Leco-1.png" alt="LECO" class="image"/>
                        <div class="middle">
                            <div class="text">
                                    Go to LECO's website
                            </div>
                        </div>
                    </Link>

                    <Link to={'//www.ixrfsystems.com/'} target='_parent' class="container">
                        <img src="images/IXRF-1.png" alt="IXRF" class="image"/>
                        <div class="middle">
                            <div class="text">
                                    Go to IXRF's website
                            </div>
                        </div>
                    </Link>

                </div>

                <div class="column">
                    <Link  to={'//www.leco.com/product/836-series'} target='_parent' class="container">
                            <img src="images/Leco-1.png" alt="LECO" class="image"/>
                            <div class="middle">
                                <div class="text">
                                        Go to LECO's website
                                </div>
                            </div>
                        </Link>

                        <Link to={'//www.ixrfsystems.com/'} target='_parent' class="container">
                            <img src="images/IXRF-1.png" alt="IXRF" class="image"/>
                            <div class="middle">
                                <div class="text">
                                        Go to IXRF's website
                                </div>
                            </div>
                        </Link>
                </div>
            </div>
        </>
    )
}

export default Grid
