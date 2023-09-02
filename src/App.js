import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './Components/HomePageComponents/Home';
import ChampionsLeague from './Components/ChampionsLeagueComponents/ChampionsLeague';



function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChampionsLeague" element={<ChampionsLeague />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
