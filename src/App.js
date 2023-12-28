import './';
import React from 'react';
import Header from './components/header';
import Users from './components/users';
import './css/main.css';
import Cards from './components/cards';


// MongoDB connection
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const uri = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to MongoDB
client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB', err);
    return;
  }
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// main component done as a class
// App component that shows all other components
class App extends React.Component {

  // html
  render() {
    return (
      <main>
        <Header title="Munchkin" />
      
        <Users />

        <Cards />
      </main>
    );
  }
}


export default App;
