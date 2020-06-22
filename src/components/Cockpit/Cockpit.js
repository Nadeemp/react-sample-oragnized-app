import React from 'react';
import classes from './Cockpit.css';
const cockpit =  (props) =>{
const style= {
        backgroundColor: 'green',
        font:'inherit',
        padding:'8px',
        ':hover':{
          backgroundColor: 'lightgreen'
        }

  }

    return(
        <div className={classes.Cockpit}>
         <header className={classes.Appheader}>
        { /* <img src={logo} className="App-logo" alt="logo" />*/}
          <h1 className="App-title">Welcome to React-Nadeem</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button key='b2' style={style} onClick={props.clicked}>Toggle</button>
      </div>
    );

}
export default cockpit;

