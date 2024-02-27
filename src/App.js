import './App.css';
import React, {useState} from "react";
import Nav from "./components/Nav.js"
import Text from "./components/Text.js"
import About from './components/About.js'
// import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState(false);
  
  const toggleMode=()=>{
    if(Mode===true){
      setMode(false)
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
    else{
      setMode(true)
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
  }


  return (
    <>
      <Router>
        <Nav heading="Text Analyzer" Mode={Mode} toggleMode={toggleMode}></Nav>
        <div className='container'>
          <Switch>
            <Route path="/About"> 
            <About Mode={Mode}></About> 
            </Route>
            <Route path="/Text"> 
            <Text Mode={Mode}/> 
            </Route>
            <Route path="/"> 
            <Text Mode={Mode}></Text> 
            </Route>
          </Switch>
        </div>
      </Router>
    </>
    );
  }
  
  export default App;
              
            
              


      
              


  
  
        
    
    
      
          
          
              
      
      
              

    
