import React from 'react';
import './App.css';
// import firebase from './firebase';
import List from './components/list';
import EntryForm from './components/EntryForm';


function App() {
  return (
    <div className="App">
    <h1>Create Your Scedule</h1>
          <List/>

          <EntryForm/>
    </div>


  );
}

export default App;
