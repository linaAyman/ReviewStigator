import React from 'react'
import { useState,useEffect } from 'react'
import Menu from '../../Menu'
import FilterButton from '../../FilterButton'
import {agencies, categories} from './AgenciesData'
import { useHistory, useLocation } from 'react-router'

const allCategories = ['All', ...new Set(agencies.map(agency => agency.category))];
const defaultSub = [];



const Agencies = (props=null) =>
{
    
    const history = useHistory;
    
    // console.log(props.location.state.category);
    // console.log(props.location.state.subCategory);

    const [menuItem, setMenuItem] = useState(agencies);
    const [buttons, setButtons] = useState(allCategories);
    const [subButtons, setSubButtons] = useState(defaultSub);
    
    

    useEffect(() =>{
        console.log(props);
        if(props.location.state){
            const subCategories=categories.filter(c => c.category === props.location.state.category).map(sc => sc.subCategories.split(",")).flat(1);
            setSubButtons([ ...new Set(subCategories)]);
        

            if(props.location.state.subCategory !== 'none'){
                const filteredData = agencies.filter(agency => agency.subCategory.includes(props.location.state.subCategory));
            setMenuItem(filteredData);
            }
        }
    }, [props])

    
    //Filter Function
    //handling footer links
    // if(props.location.state){
    //     const sentCategory = props.location.state.category;
    //     const sentSubCategory = props.location.state.subCategory;
    //     filterLink(sentCategory,sentSubCategory);
    // }
    
    const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(agencies);
      setButtons(allCategories);
      setSubButtons(defaultSub);
      return;
    }else if(button ==='Non-Electronics' || button ==='Electronics'){
      setButtons(allCategories);
      const subCategories=categories.filter(c => c.category === button).map(sc => sc.subCategories.split(",")).flat(1);
      setSubButtons([ ...new Set(subCategories)]);
      return;
    }

    //const filteredData = agencies.filter(agency => agency.category ===  button);
   
    const filteredData = agencies.filter(agency => agency.subCategory.includes(button));
    setMenuItem(filteredData);
  
  }
  

    return(
        <div>
            <FilterButton button={buttons} filter={filter} />
            <FilterButton button={subButtons} filter={filter} />
            <Menu menuItem={menuItem}/>
        </div>
    );
}

export default Agencies;
