import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import Game from './component/GameDetails'
import Container from 'react-bootstrap/Container';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './component/Navbar'

function App() {
  return (
    <Container  fluid className="App ">
      <Navbar />
      <Switch>
         
         <Route  exact path="/">
            <Home />
         </Route>
         <Route path="/game/:id">
             <Game />
         </Route>

         
       </Switch>
      
    </Container>
  );
}

export default App;
