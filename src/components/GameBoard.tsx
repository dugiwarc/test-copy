import React from 'react';
import Pawn from './Pawn';
import Tile from './Tile';
import EmptyTile from './EmptyTile';
import GameStats from './GameStats';
import GameLog from './GameLog';
import Buttons from './Buttons';
import ButtonMenu from './ButtonMenu';
import DiceSpinner from './DiceSpinner';
import uuid from 'uuid/v4';
import { walkingTiles } from './../components/coordinates/walkingTiles';

interface AppProps {
  startGame: Function;
  gameMessage: string;
  isDisabledStart: boolean;
  isDisabledRoll: boolean;
  isDisabledMenu: boolean;
  rollTheDice: Function;
  currentDiceRoll: number;
  currentPlayer: number;
  roundsPlayed: number;
  rollDiceForMove: Function;
  selectPawn: Function;
  selectedPawn: number;
  isDisabledRollForMoves: boolean;
  gameStarted: boolean;
  selectingPhase: boolean;
  setGameMessage: Function;
}

class GameBoard extends React.Component<AppProps> {
  render() {
    const {
      startGame,
      gameMessage,
      isDisabledStart,
      isDisabledRoll,
      isDisabledMenu,
      rollTheDice,
      currentDiceRoll,
      currentPlayer,
      roundsPlayed,
      rollDiceForMove,
      selectPawn,
      selectedPawn,
      isDisabledRollForMoves,
      gameStarted,
      selectingPhase,
      setGameMessage
    } = this.props;

    return (
      <div className='mother'>
        <div className='ludo'>
          <GameStats
            gameMessage={gameMessage}
            currentDiceRoll={currentDiceRoll}
            currentPlayer={currentPlayer}
            roundsPlayed={roundsPlayed}
            selectedPawn={selectedPawn}
          />
          <div className='mainboard'>
            {walkingTiles.map(row => (
              <div key={uuid()} className='horizontal-line'>
                {row.map(tile => {
                  if (tile > 0) {
                    return <Pawn identifier={tile} key={uuid()} />;
                  } else if (tile === 0) {
                    return <EmptyTile key={uuid()} />;
                  } else {
                    return <Tile key={uuid()} type={tile} />;
                  }
                })}
              </div>
            ))}
          </div>
          <GameLog
            gameMessage={gameMessage}
            currentDiceRoll={currentDiceRoll}
          />
        </div>
        <DiceSpinner
          isDisabledRoll={isDisabledRoll}
          gameStarted={gameStarted}
          currentDiceRoll={currentDiceRoll}
          selectingPhase={selectingPhase}
        />
        {/* Pawn Menu */}
        <ButtonMenu
          currentPlayer={currentPlayer}
          isDisabledMenu={isDisabledMenu}
          selectPawn={selectPawn}
        />
        <Buttons
          startGame={startGame}
          isDisabledStart={isDisabledStart}
          isDisabledRoll={isDisabledRoll}
          rollTheDice={rollTheDice}
          rollDiceForMove={rollDiceForMove}
          isDisabledRollForMoves={isDisabledRollForMoves}
          setGameMessage={setGameMessage}
        />
      </div>
    );
  }
}

export default GameBoard;
