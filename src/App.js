import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home'; 
import ReviewTest from './components/pages/ReviewTest/ReviewTest';
import Agencies from './components/pages/Agencies/Agencies'; 
import ScrollToTop from './components/ScrollToTop';
import ContactForm from './components/ContactForm';
import Compare from './components/pages/Compare/Compare';

import Data from "./MOCK_DATA.json"
import {useState} from "react"

function App() {

  return (
    
    <div>
    <Router>
      
      <ScrollToTop />
      <Navbar />
      <Switch>
        
        <Route path='/' exact component={Home}/>
        <Route path='/reviewtest'exact component={ReviewTest}/>
        <Route path='/agencies'exact component={Agencies}/>
        {/* <Route path='/contactus'exact component={ContactForm}/> */}
        <Route path='/compare' exact component={Compare}/>
      
      </Switch>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
