import larmf from './images/6210.png';
import { useState } from 'react';
import './App.css';
import { dealCards } from './baccarat';

function App() {

  const [playerHand, setPlayerHand] = useState([]);
  const [bankerHand, setBankerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(null);
  const [bankerScore, setBankerScore] = useState(null);
  const [winner, setWinner] = useState(null);

  // deal cards and calculate score
  const handleDealClick = () => {
    const { playerHand, bankerHand, playerScore, bankerScore, winner } = dealCards();
    setPlayerHand(playerHand);
    setBankerHand(bankerHand);
    setPlayerScore(playerScore);
    setBankerScore(bankerScore);
    setWinner(winner);
  };


  return (
    <div className="App">

      <h1>Baccarat</h1>
      <p>featuring Spike the dealer</p>
      <img src={larmf} className="larmf" alt="larmf" />

      <button onClick={handleDealClick}>Deal</button>
      <div id="handsDiv">

        <div className="hand">
          <h4 className="hand-title">Player</h4>

          {playerHand.map((card, index) => (
            <p key={index}>
              {card.rank} of {card.suit}
            </p>
          ))}

        </div>
        <div className="hand">
          <h4 className="hand-title">Banker</h4>

          {bankerHand.map((card, index) => (
            <p key={index}>
              {card.rank} of {card.suit}
            </p>
          ))}

        </div>
      </div>
      <div className="results">
        {playerScore !== null && (
          <>
            <p>Player Score: {playerScore}</p>
            <p>Banker Score: {bankerScore}</p>
            <p>Winner: {winner}</p>
          </>
        )}
      </div>


    </div>
  );
}

export default App;
