import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Components/HomePageComponents/Home';
import ChampionsLeague from './Components/ChampionsLeagueComponents/ChampionsLeague';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChampionsLeague" element={<ChampionsLeague />} />
      </Routes>
    </Router>
  );
}

export default App;
