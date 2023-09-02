import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Components/HomePageComponents/Home';
import EuropeLeagues from './Components/EuropeLeaguesComponents/EuropeLeagues';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/europe" element={<EuropeLeagues />} />
      </Routes>
    </Router>
  );
}

export default App;
