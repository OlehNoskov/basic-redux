import React from 'react';
import './App.css';
import {UserComponent} from "./components/UserComponent";
import {PostComponent} from "./components/PostComponent";

function App() {

  return (
    <div className="App" style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', width: '300px'}}>
      {/*<UserComponent/>*/}
      <PostComponent/>
    </div>
  );
}

export default App;
