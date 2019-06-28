import React from 'react';

interface AppProps {
  startGame: Function;
  isDisabledStart: boolean;
  isDisabledRoll: boolean;
  rollDiceForMove: Function;
  rollTheDice: Function;
  isDisabledRollForMoves: boolean;
  setGameMessage: Function;
}

class Buttons extends React.Component<AppProps> {
  render() {
    const {
      startGame,
      isDisabledStart,
      rollTheDice,
      isDisabledRoll,
      rollDiceForMove,
      isDisabledRollForMoves,
      setGameMessage
    } = this.props;

    const rollForMoves = (): void => {
      console.log('Rolling a number of moves');
      setTimeout(() => {
        const roll = Math.floor(Math.random() * 6 + 1);
        console.log(`Player has rolled a ${roll}`);
        const textOutput: string = roll === 1 ? 'move' : 'moves';
        setGameMessage(`You have won ${roll} ${textOutput}`);
        rollDiceForMove(roll);
      }, 1500);
    };
    return (
      <div>
        <button
          onClick={() => startGame()}
          className={!isDisabledStart ? 'box-shadow' : 'dummy'}
          disabled={isDisabledStart}
        >
          Start Game
        </button>
        <button
          onClick={() => rollTheDice()}
          disabled={isDisabledRoll}
          className={!isDisabledRoll ? 'box-shadow' : 'dummy'}
        >
          Roll
        </button>
        <button
          onClick={rollForMoves}
          disabled={isDisabledRollForMoves}
          className={!isDisabledRollForMoves ? 'box-shadow' : 'dummy'}
        >
          Roll for moves
        </button>
      </div>
    );
  }
}

export default Buttons;
