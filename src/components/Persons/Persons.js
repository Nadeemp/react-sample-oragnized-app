import React from 'react';
import Person from './Person/Person'
/*==========loop elements====*/
const persons =  (props) =>props.persons.map((person,personIndex) =>{
     
       return <Person 
       changed={(event)=>props.changed(event,person.id)} name={person.name} 
       click={()=>props.clicked(personIndex)}
       key={person.id}
       />
       });
export default persons;


