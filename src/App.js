import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/HomePageComponents/Home';
import ChampionsLeague from './Components/ChampionsLeagueComponents/ChampionsLeague';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ChampionsLeague" component={ChampionsLeague} />
      </Switch>
    </Router>
  );
}

export default App;
