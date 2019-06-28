import React from 'react';
import InfoComp from './InfoComp';

interface AppProps {
  gameMessage: string;
  currentDiceRoll: number;
  currentPlayer: number;
  roundsPlayed: number;
  selectedPawn: number;
}

class GameStats extends React.Component<AppProps> {
  render() {
    const {
      gameMessage,
      currentDiceRoll,
      currentPlayer,
      roundsPlayed,
      selectedPawn
    } = this.props;
    return (
      <div className='game-stats'>
        <h1>GAME STATS</h1>
        <div className='game-stats-info'>
          <InfoComp title={`Game message: `} output={gameMessage} />
          <InfoComp
            title={`Current roll: `}
            output={currentDiceRoll && currentDiceRoll}
          />
          <InfoComp title={`Current player: `} output={currentPlayer} />
          <InfoComp title={`Rounds: `} output={roundsPlayed} />
          <InfoComp title={`Selected pawn: `} output={selectedPawn} />
          <InfoComp title={`Steps to be made: `} output={selectedPawn} />
        </div>
      </div>
    );
  }
}

export default GameStats;
