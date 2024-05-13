import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './style1.css'; // Assuming you have a CSS file for styling
import humansImg from './humans.png';
import compImg from './comp.png';
import homepage from './homepage.png';

const MainPage = () => {
  return (
    // <Router>
    <>
      <div className="main-container">
        <div className="background-image"> {homepage}
        <div className="cards-container">
          <Link to="/vsHuman" className="card">
            <img src={humansImg} alt="Humans vs Humans" />
          </Link>

          <Link to="/vsComp" className="card">
            <img src={compImg} alt="Humans vs Computer" />
          </Link>
        </div>
        <div className='rules-container'>
        <h2>Rules</h2>
        <ul>
          <li>The game is played on a 3x3 grid.</li>
          <li>Two players take turns placing their symbol (X or O) on an empty square.</li>
          <li>The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.</li>
          <li>If all squares are filled and no player has won, the game is a draw.</li>
        </ul>
        </div>
        </div>
      </div>
    </> 
    // </Router>
  );
};

export default MainPage;
