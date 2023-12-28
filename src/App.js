import './';
import React from 'react';
import Header from './components/header';
import Users from './components/users';
import './css/main.css';

// main component done as a class
// App component that shows all other components
class App extends React.Component {

  // html
  render() {
    return (
      <main>
        <Header title="Munchkin" />
      
        <Users />
      </main>
    );
  }
}


export default App;
