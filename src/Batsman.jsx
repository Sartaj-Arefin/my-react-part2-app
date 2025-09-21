import { useState } from 'react';

export default function Batsman() {
  let [runs, setScore] = useState(0);
  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setScore(updatedRuns);
  };
  const handleFour = () => {
    const updatedRuns = runs + 4;
    setScore(updatedRuns);
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    setScore(updatedRuns);
  };

  const batsmanStyle = {
    border: '2px solid green',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '15px',
  };
  const congratsStyle = {
    fontSize: 'extraBold',
    color: 'red',
  };
  return (
    <div style={batsmanStyle}>
      <h2>Batsman:T.Tamim</h2>
      {runs >= 50 && (
        <p>
          <span style={congratsStyle}>CONGRATS</span> <br /> You Scored HALF
          CENTURY
        </p>
      )}
      <h3>Runs: {runs}</h3>
      <button onClick={handleSingle}>SINGLE</button>
      <button onClick={handleFour}>FOUR</button>
      <button onClick={handleSix}>SIX</button>
    </div>
  );
}
