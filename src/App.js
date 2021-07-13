import React, { Suspense, lazy } from 'react'
import './App.css';

//const Game= React.lazy(() => import('./component/GameDetails'));
import Container from 'react-bootstrap/Container';
import {
  Switch,
  Route
} from "react-router-dom";

import Navbar from './component/Navbar'
const Home = lazy(() => import('./component/Home'));
const Game= lazy(() => import('./component/GameDetails'));

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
    <Container  fluid className="App ">
      <Navbar />
      <Switch>
         
         <Route  exact path="/">
            <Home />
         </Route>
         
         <Route  exact path="/game/:id">
            <Game />
         </Route>
         
       </Switch>
      
    </Container>
    </Suspense>
  );
}

export default App;
