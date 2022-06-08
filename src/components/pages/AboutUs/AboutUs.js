import React from 'react'
import HeroSection from '../../HeroSection'
import { aboutUsObjOne } from './Data'

const AboutUs = () => {
    return (
        <>
        <HeroSection {...aboutUsObjOne} /> {/*passing the home properties to data.js*/}
        </>
    )
}

export default AboutUs
