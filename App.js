import React, { Suspense } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Error404 from './components/Error404';
import Header from './components/Header';
import HeaderWithSelection from './components/HeaderWithSelection';
import HeaderWithSearch from './components/HeaderWithSearch';
import TodoList from './components/TodoList';
import TodoListWithLinks from './components/TodoListWithLinks';
import TodoDetails from './components/TodoDetails';



const Setting = React.lazy( function() {
  return import('./components/Setting');
})

function App() {
  return (
    <div className="App">
      <HeaderWithSearch/>
      <div className="mb-5">
        <Suspense fallback={<div>Loading..</div>} >
          <Switch>
            <Route exact component={Home} path="/" />
            <Route component={About} path="/about" />
            <Route component={TodoDetails} path="/todo/:pk/:slug" />
            <Route component={TodoListWithLinks} path="/todo" />
            <Route component={Error404} /> 
            <Route component={Setting} path="/settings"/> 
          </Switch>
        </Suspense>        

      </div>
    </div>
  );
}

export default App;
