import './';
import React from 'react';
import Header from './components/header';


// main component done as a class
// App component that shows all other components
class App extends React.Component {
  
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      helloWorld: "hello world",
      userData: "",

    }

    // bind methods ( allow to use setState() | for render() -> noneed to bind )
    this.onClick = this.onClick.bind(this);
  }

  


  // html
  render() {
    return (
      <>
        <Header title={this.state.helloWorld === "goodbye world" ? "hello world" : "goodbye world"} />
        
        <div>
          <input
            // change userData state
            onChange={event => this.setState({userData: event.target.value})}

            // methods
            onClick={this.onClick} 
            onMouseOver={this.onMouseOver} 

            placeholder={this.state.helloWorld === "hello world" ? "hello world" : "goodbye world"}>     
          </input>


          {/* working in realtime cause the event is onChange */} 
          <h2> UserData testing </h2>
          <p> {this.state.userData === "y" ? "Y" : "N"} </p>
        </div>
      </>
    );
  }


  // methods 

  onClick() {

    // changing helloWorld state
    this.setState({helloWorld: "goodbye world"});
    console.log("input clicked");
  }

  onMouseOver() {
    console.log("mouse over");
  }
}


export default App;
