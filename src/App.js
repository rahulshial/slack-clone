import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

/** Local Imports */
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';
import { useStateValue } from './helpers/StateProvider';

function App() {
  // const [user, setUser] = useState(null);
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
          ): (
            <>
            <Header />
            <div className='app__body'>
              <Sidebar />
              {/** React Router - Chat Screen */}
              <Switch>
                <Route path='/room/:roomId'><Chat /></Route>
                <Route path='/'><h1>Welcome</h1></Route>
              </Switch>
            </div>
            </>
        )}
      </Router>
    </div>
  );
}

export default App;
