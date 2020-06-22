import React, { Component } from 'react';
//import logo from './logo.svg';
//import Radium,{StyleRoot} from 'radium';
//import styled from "styled-components"
import classes from './App.css';
import '../components/Persons/Person/Person.css'
import Persons from'../components/Persons/Persons';
import Cockpit from'../components/Cockpit/Cockpit';
class App extends Component {
  state = {
  
    persons :[
      {name:"nadeemphmmbvv",age:"30",id:"jjj"},
      {name:"shana",age:"30",id:"jj1"},
      {name:"aman",age:"2",id:"jj2"},
    ],
    isVisible : true

  }

 switchNameHandler = (newName) => {

  console.log("clicked!==");
  this.setState({
persons :[
      {name:newName,age:"30"},
      {name:"shana",age:"30"},
    ]

  }

  );
  //alert("clciked");
 }
deleteNameHandler = (personIndex) =>{

  const person = [...this.state.persons];
  person.splice(personIndex,1);
  this.setState({persons:person});


}
nameChnagedHandler = (event,id) => {

    const personindex = this.state.persons.findIndex(p=>{

     return p.id === id;

    });

    const person = {...this.state.persons[personindex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personindex] = person;
    this.setState({persons:persons});


}

togglePersonHandler = () => {
const changeVal = this.state.isVisible;
  this.setState({isVisible: !changeVal});
}

  
  render() {
  const style= {
        backgroundColor: 'green',
        font:'inherit',
        padding:'8px',
        ':hover':{
          backgroundColor: 'lightgreen'
        }

  }

  let persons = null;
  if(this.state.isVisible){
     persons = (
       <div> <Persons persons={this.state.persons} 
       clicked = {this.deleteNameHandler}
       changed = {this.nameChnagedHandler}
       /></div>
       
      );
      style[':hover'] = {
          backgroundColor: 'lightgreen'
        }
  }
    return (
      
      <div className={classes.App}>
        <Cockpit clicked={this.togglePersonHandler}/>
        {persons}
        
        
      </div>
      
    );
  }
}

//export default Radium(App);//injjecting components
export default App;
