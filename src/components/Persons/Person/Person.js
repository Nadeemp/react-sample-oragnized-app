import React from 'react';
//import Radium from 'radium';
import pclasses from './Person.css'
import styled from "styled-components"

const StyledDiv = styled.div`width:60%;
   margin:auto;
   border:1px solid #eee;
   box-shadow: 0px 2px 3px #ccc;
   padding:16px;
   text-align: center`;

const person = (props)=> {
 return(
        <div className={pclasses.Person}>
       
        <p onClick={props.click}>hi this is person-{props.name} </p>
        <input type="text" onChange={props.changed} value={props.name}/>
        
    </div>   
    )

}

//export default Radium(person);
export default person;