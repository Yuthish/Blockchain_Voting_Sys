import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Voterhome from './Sections/Voterhome/Voterhome';
import Parties from './Sections/Parties/Parties';
import Finalverification from './Sections/Finalverification/Finalverification';
import Votings from './Sections/Votings/Votings';
import Mykeys from './Sections/Mykeys/Mykeys';
function App() {
  return (
    <div className="App">

    <Router>
    <Switch>
      <Route exact path='/voterhome/:id' render={ (props) => <Voterhome {...props} />}/>
      <Route exact path='/parties/:id' render={ (props) => <Parties   {...props}/>}/>
      <Route exact path='/finalverification/:id/:partyname' render={ (props) => <Finalverification {...props}/>}/>
      <Route exact path='/votings' render={ (props) => <Votings></Votings>}/>
      <Route exact path='/mykeys' render={ (props) => <Mykeys></Mykeys>}/>

    </Switch>

    </Router>
    
     
    </div>
  );
}

export default App;
