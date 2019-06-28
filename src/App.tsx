import React from 'react';
import Title from './components/Title';
import store from './store';
import { connect } from 'react-redux';
import { StoreState } from './reducers/index';
import { walkingTiles } from './components/coordinates/walkingTiles';
import {
  GameState,
  nextPlayer,
  setGameMessage,
  rollTheDice,
  newRound,
  selectPawn,
  updatePawn,
  validatePawn,
  // switchState,
  grantSafetyStatus,
  removeSafetyStatus,
  addPosition
} from './actions';

import GameBoard from './components/GameBoard';
import {
  coordinates,
  coordinatesP2,
  coordinatesP3,
  coordinatesP4
} from './components/coordinates/coordinates';
const sound: any = require('./assets/sounds/ludo.mp3');
export interface AppState {
  isDisabledStart: boolean;
  isDisabledRoll: boolean;
  isDisabledMenu: boolean;
  isDisabledRollForMoves: boolean;
  gameMessage: string;
  gameStarted: boolean;
  currentDiceRoll: number;
  currentPlayer: number;
  roundsPlayed: number;
  selectedPawn: number;
  pawnID1Moves: number;
  requestMove: boolean;
  requestToMoveID: number;
  p1Completed: number;
  p1CompletedStatus: boolean;
  p2Completed: number;
  p2CompletedStatus: boolean;
  p3CompletedStatus: boolean;
  p4CompletedStatus: boolean;
  selectingPhase: boolean;
  p3Completed: number;
  p4Completed: number;
  play: boolean;
  rollForMHasBeenClicked: boolean;
  strikeCounter: number[];
  diceIsRolling: boolean;
  selectingPhaseStatus: boolean;
  p1PreviousPosition: number[];
  occupiedTiles: number[];
  pawn_1INIT: number[];
  pawn_2INIT: number[];
  pawn_3INIT: number[];
  pawn_4INIT: number[];
  pawn_5INIT: number[];
  pawn_6INIT: number[];
  pawn_7INIT: number[];
  pawn_8INIT: number[];
  pawn_9INIT: number[];
  pawn_10INIT: number[];
  pawn_11INIT: number[];
  pawn_12INIT: number[];
  pawn_13INIT: number[];
  pawn_14INIT: number[];
  pawn_15INIT: number[];
  pawn_16INIT: number[];
}

export interface AppProps {
  nextPlayer: typeof nextPlayer;
  setGameMessage: typeof setGameMessage;
  rollTheDice: typeof rollTheDice;
  newRound: typeof newRound;
  selectPawn: typeof selectPawn;
  updatePawn: typeof updatePawn;
  validatePawn: typeof validatePawn;
  grantSafetyStatus: typeof grantSafetyStatus;
  removeSafetyStatus: typeof removeSafetyStatus;
  addPosition: typeof addPosition;

  // switchState: typeof switchState;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isDisabledStart: false,
      isDisabledRoll: false,
      isDisabledMenu: true,
      isDisabledRollForMoves: true,
      gameMessage: '',
      gameStarted: true,
      currentDiceRoll: 0,
      currentPlayer: 1,
      roundsPlayed: 0,
      selectedPawn: 0,
      pawnID1Moves: 0,
      requestMove: false,
      requestToMoveID: 0,
      p1Completed: 0,
      p1CompletedStatus: false,
      p2CompletedStatus: false,
      p3CompletedStatus: false,
      p4CompletedStatus: false,
      selectingPhase: false,
      p2Completed: 0,
      p3Completed: 0,
      p4Completed: 0,
      play: false,
      rollForMHasBeenClicked: false,
      strikeCounter: [],
      diceIsRolling: false,
      selectingPhaseStatus: false,
      occupiedTiles: [],
      p1PreviousPosition: [],
      pawn_1INIT: [1, 1],
      pawn_2INIT: [3, 2],
      pawn_3INIT: [1, 3],
      pawn_4INIT: [3, 3],
      pawn_5INIT: [11, 1],
      pawn_6INIT: [13, 1],
      pawn_7INIT: [11, 3],
      pawn_8INIT: [13, 3],
      pawn_9INIT: [1, 11],
      pawn_10INIT: [3, 11],
      pawn_11INIT: [1, 13],
      pawn_12INIT: [3, 13],
      pawn_13INIT: [11, 11],
      pawn_14INIT: [13, 11],
      pawn_15INIT: [11, 13],
      pawn_16INIT: [13, 13]
    };
  }

  setWinner = (): void => {
    setGameMessage('Game Over.');
    this.setState({
      gameMessage: store.getState().gamestate.gameMessage
    });
  };

  audio = new Audio(sound);

  togglePlay = (): void => {
    this.setState({ play: !this.state.play }, () => {
      console.log('sound on');
    });
  };

  retrieveCoords = (id: string | number, moves: number): number[] => {
    store.getState().gamestate.hasWinner && this.setWinner();
    let output: any[];
    let threshold: boolean = true;
    switch (id) {
      case '1':
      case '2':
      case '3':
      case '4':
        if (moves > coordinates.length - this.state.p1Completed) {
          threshold = false;
          if (!this.state.p1CompletedStatus)
            this.setState({
              p1Completed: this.state.p1Completed + 1,
              p1CompletedStatus: true
            });
          this.props.validatePawn('1');
          setGameMessage('Select another pawn!');
          this.setState({
            gameMessage: store.getState().gamestate.gameMessage
          });
          return coordinates[56 - this.state.p1Completed];
        }
        if (threshold) {
          output = coordinates.filter((coord, i) => i + 1 === moves);
          return output[0];
        }
        return coordinates[56 - this.state.p1Completed];

      case '5':
      case '6':
      case '7':
      case '8':
        if (moves > coordinatesP2.length - this.state.p2Completed) {
          threshold = false;
          return coordinatesP2[56 - this.state.p2Completed];
        }
        if (threshold) {
          this.setState({
            p2Completed: this.state.p2Completed + 1,
            p2CompletedStatus: true
          });
          setGameMessage('Select another pawn!');
          this.setState({
            gameMessage: store.getState().gamestate.gameMessage
          });
          output = coordinatesP2.filter((coord, i) => i + 1 === moves);
          return output[0];
        }
        return coordinatesP2[56 - this.state.p2Completed];

      case '9':
      case '10':
      case '11':
      case '12':
        if (moves > coordinatesP3.length - this.state.p3Completed) {
          threshold = false;
          return coordinatesP3[56 - this.state.p3Completed];
        }
        if (threshold) {
          this.setState({
            p3Completed: this.state.p3Completed + 1,
            p3CompletedStatus: true
          });
          setGameMessage('Select another pawn!');
          this.setState({
            gameMessage: store.getState().gamestate.gameMessage
          });
          output = coordinatesP3.filter((coord, i) => i + 1 === moves);
          return output[0];
        }
        return coordinatesP3[56];

      case '13':
      case '14':
      case '15':
      case '16':
        if (moves > coordinatesP4.length - this.state.p4Completed) {
          threshold = false;
          return coordinatesP4[56 - this.state.p4Completed];
        }
        if (threshold) {
          this.setState({
            p4Completed: this.state.p4Completed + 1,
            p4CompletedStatus: true
          });
          setGameMessage('Select another pawn!');
          this.setState({
            gameMessage: store.getState().gamestate.gameMessage
          });
          output = coordinatesP4.filter((coord, i) => i + 1 === moves);
          return output[0];
        }
        return coordinatesP4[56];
      default:
        console.log('no such id');
        return [0, 0];
    }
  };

  componentDidUpdate(prevProps: {}, prevState: {}): void {
    if (
      !this.state.gameStarted &&
      (this.state.p1Completed === 4 ||
        this.state.p2Completed === 4 ||
        this.state.p3Completed === 4 ||
        this.state.p4Completed === 4)
    ) {
      this.props.setGameMessage('Game over');
      this.setState({
        gameStarted: true,
        gameMessage: store.getState().gamestate.gameMessage
      });
    }

    if (!this.state.rollForMHasBeenClicked) {
      console.log('rollForMHasBeenClicked');
      this.setState({
        isDisabledMenu: true,
        isDisabledRollForMoves: true,
        rollForMHasBeenClicked: true,
        gameMessage: store.getState().gamestate.gameMessage
      });
    }
    if (this.state.gameStarted) {
      this.togglePlay();
      this.setState({
        gameStarted: false
      });
    }
    if (this.state.requestMove) {
      console.log('Proceeding with the modification of the stored array');
      const coords = this.retrieveCoords(
        store.getState().gamestate.selectedPawn,
        store.getState().gamestate.pawnMoves
      );

      // Had to declare two levels of abstraction because of the weird nature of store' behavior :)
      const pawnIndex = store.getState().gamestate.selectedPawn.toString();
      const pawnIndexToInt = parseInt(pawnIndex);

      console.log(
        "Store' selected pawn",
        store.getState().gamestate.selectedPawn,
        "Pawn's index",
        pawnIndexToInt
      );
      let previousCoords: number[] = [];
      walkingTiles.forEach((row, x) => {
        row.forEach((tile, y) => {
          if (tile === pawnIndexToInt) {
            previousCoords.push(x);
            previousCoords.push(y);
          }
        });
      });

      const valueToKeep = walkingTiles[coords[0]][coords[1]];

      const safeTiles = '[6,2], [8,2], [12,8], [6,12]';

      if (safeTiles.includes(coords.toString())) {
        this.props.grantSafetyStatus();
      } else {
        this.props.removeSafetyStatus();
      }

      console.log('Previous position coords for selected pawn', previousCoords);
      console.log('Future position coords for selected pawn', coords);
      this.props.addPosition(coords.toString());

      let targetID: number;

      if (walkingTiles[coords[0]][coords[1]] > 0) {
        for (let pawn of store.getState().gamestate.pawns) {
          if (!pawn.isSafe) targetID = pawn.pawnID;
        }
      }

      walkingTiles.forEach((row, x) => {
        row.forEach((tile, y) => {
          if (walkingTiles[x][y] === targetID) {
            // this.state[`pawn_${5}INIT`]
            walkingTiles[x][y] = -2;
            switch (targetID) {
              case 1:
                walkingTiles[this.state.pawn_1INIT[0]][
                  this.state.pawn_1INIT[1]
                ] = 1;
                break;
              case 2:
                walkingTiles[this.state.pawn_2INIT[0]][
                  this.state.pawn_2INIT[1]
                ] = 2;
                break;
              case 3:
                walkingTiles[this.state.pawn_3INIT[0]][
                  this.state.pawn_3INIT[1]
                ] = 3;
                break;
              case 4:
                walkingTiles[this.state.pawn_4INIT[0]][
                  this.state.pawn_4INIT[1]
                ] = 4;
                break;
              case 5:
                walkingTiles[this.state.pawn_5INIT[0]][
                  this.state.pawn_5INIT[1]
                ] = 5;
                break;
              case 6:
                walkingTiles[this.state.pawn_6INIT[0]][
                  this.state.pawn_6INIT[1]
                ] = 6;
                break;
              case 7:
                walkingTiles[this.state.pawn_7INIT[0]][
                  this.state.pawn_7INIT[1]
                ] = 7;
                break;
              case 8:
                walkingTiles[this.state.pawn_8INIT[0]][
                  this.state.pawn_8INIT[1]
                ] = 8;
                break;
              case 9:
                walkingTiles[this.state.pawn_9INIT[0]][
                  this.state.pawn_9INIT[1]
                ] = 9;
                break;
              case 10:
                walkingTiles[this.state.pawn_10INIT[0]][
                  this.state.pawn_10INIT[1]
                ] = 10;
                break;
              case 11:
                walkingTiles[this.state.pawn_11INIT[0]][
                  this.state.pawn_11INIT[1]
                ] = 11;
                break;
              case 12:
                walkingTiles[this.state.pawn_12INIT[0]][
                  this.state.pawn_12INIT[1]
                ] = 12;
                break;
              case 13:
                walkingTiles[this.state.pawn_13INIT[0]][
                  this.state.pawn_13INIT[1]
                ] = 13;
                break;
              case 14:
                walkingTiles[this.state.pawn_14INIT[0]][
                  this.state.pawn_14INIT[1]
                ] = 14;
                break;
              case 15:
                walkingTiles[this.state.pawn_15INIT[0]][
                  this.state.pawn_15INIT[1]
                ] = 15;
                break;
              case 16:
                walkingTiles[this.state.pawn_16INIT[0]][
                  this.state.pawn_16INIT[1]
                ] = 16;
                break;
              default:
                break;
            }
          }
        });
      });

      walkingTiles.forEach((row, x) => {
        row.forEach((tile, y) => {
          if (
            tile.toString() ===
            store.getState().gamestate.selectedPawn.toString()
          ) {
            walkingTiles[x][y] = 0;
            walkingTiles[coords[0]][coords[1]] = tile;
            walkingTiles[previousCoords[0]][previousCoords[1]] = valueToKeep;
          }
        });
      });
      previousCoords = [];

      this.setState({
        requestMove: false
      });
    }
  }

  render() {
    const {
      setGameMessage,
      rollTheDice,
      nextPlayer,
      newRound,
      selectPawn,
      updatePawn
      // switchState
    } = this.props;
    const {
      gameMessage,
      isDisabledStart,
      isDisabledRoll,
      isDisabledMenu,
      currentDiceRoll,
      currentPlayer,
      roundsPlayed,
      gameStarted,
      selectedPawn,
      isDisabledRollForMoves,
      selectingPhase
      // diceIsRolling
    } = this.state;

    const startGame = (): void => {
      setGameMessage('Game started');
      this.setState(
        {
          gameMessage: store.getState().gamestate.gameMessage,
          isDisabledStart: true
        },
        () => console.log('isDisabledStart started')
      );
    };

    const rollDiceForMove = (moves: number) => {
      this.setState({
        gameMessage: store.getState().gamestate.gameMessage
      });

      setTimeout(() => {
        this.setState(
          {
            selectingPhase: false
          },
          () =>
            console.log(
              "selectingPhase stopped\nUpdate store with current selected pawn's moves"
            )
        );

        updatePawn(moves);
        setGameMessage('Great! Have another try at rolling the dice');
        this.setState(
          {
            rollForMHasBeenClicked: false,
            isDisabledRollForMoves: true,
            isDisabledRoll: false,
            requestMove: true,
            gameMessage: store.getState().gamestate.gameMessage,
            requestToMoveID: store.getState().gamestate.selectedPawn
          },
          () =>
            console.log(
              'isDisabledRollForMoves started\nisDisabledRoll stopped'
            )
        );
      }, 1000);
    };

    const selectPawnAction = (pawn: number) => {
      // Will register selection in state
      selectPawn(pawn);
      setGameMessage(
        `Player ${
          store.getState().gamestate.currentActivePlayer
        } has selected: ${pawn}`
      );
      this.setState(
        {
          selectedPawn: store.getState().gamestate.selectedPawn,
          gameMessage: store.getState().gamestate.gameMessage,
          isDisabledRollForMoves: false
        },
        () =>
          console.log('selectedPawn assigned\nisDisabledRollForMoves stopped')
      );
      setGameMessage(`Please roll for moves or pick another pawn`);
      this.setState(
        {
          gameMessage: store.getState().gamestate.gameMessage
        },
        () => console.log('await player click')
      );
    };

    const rollDice = (): void => {
      setGameMessage(
        `Player ${store.getState().gamestate.currentActivePlayer} is rolling...`
      );
      this.setState(
        {
          gameMessage: store.getState().gamestate.gameMessage,
          isDisabledRoll: true
        },
        () => console.log('dice is rolling')
      );
      setTimeout(() => {
        rollTheDice();
        this.setState(
          {
            currentDiceRoll: store.getState().gamestate.currentDiceRoll
          },
          () => console.log('dice stopped rolling')
        );
        setGameMessage(
          `Player ${
            store.getState().gamestate.currentActivePlayer
          } has rolled a ${store.getState().gamestate.currentDiceRoll}`
        );
        this.setState({
          gameMessage: store.getState().gamestate.gameMessage
        });
      }, 1500);

      setTimeout(() => {
        // If player hasn't rolled a 6 and is the last player to roll => start a new round and trigger nextPlayer()
        // Else prompt a success message and the select pawn menu, and decrement strikes by one
        if (store.getState().gamestate.currentDiceRoll !== 6) {
          if (store.getState().gamestate.currentActivePlayer === 4) {
            newRound();
            this.setState({
              roundsPlayed: store.getState().gamestate.roundsPlayed
            });
          } else {
            nextPlayer();
            this.setState(
              {
                currentPlayer: store.getState().gamestate.currentActivePlayer
              },
              () => console.log('currentPlayer update')
            );
            setGameMessage(
              `Awaiting Player ${
                store.getState().gamestate.currentActivePlayer
              } to roll the dice...`
            );
            this.setState({
              gameMessage: store.getState().gamestate.gameMessage
            });
          }
          this.setState({
            isDisabledRoll: false
          });
        } else {
          // Initialize strike count
          this.setState(
            {
              strikeCounter: [
                ...this.state.strikeCounter,
                this.state.currentPlayer
              ]
            },
            () => {
              console.log('strikeCounter', this.state.strikeCounter);
              // Reduce players to their strike count
              const counter = this.state.strikeCounter.reduce(function(
                obj: any,
                item: any
              ) {
                if (!obj[item]) {
                  obj[item] = 0;
                }
                obj[item]++;
                return obj;
              },
              {});
              if (counter[this.state.currentPlayer] >= 3) {
                setGameMessage(
                  `Bad luck! ${
                    store.getState().gamestate.selectedPawn
                  } won't make any moves`
                );
                this.setState(
                  {
                    gameMessage: store.getState().gamestate.gameMessage
                  },
                  () => {
                    nextPlayer();
                    this.setState(
                      {
                        currentPlayer: store.getState().gamestate
                          .currentActivePlayer,
                        isDisabledRoll: false
                      },
                      () => console.log('currentPlayer update')
                    );
                  }
                );
              } else {
                setGameMessage('You have rolled a 6! Select a pawn please');
                this.setState(
                  {
                    isDisabledMenu: false,
                    gameMessage: store.getState().gamestate.gameMessage,
                    isDisabledRollForMoves: true,
                    selectingPhase: true
                  },
                  () => {
                    // @TODO create a selectPhase() session
                    console.log('...');
                  }
                );
              }
            }
          );
        }
      }, 2000);
    };

    return (
      <div className='app'>
        <Title />
        <GameBoard
          startGame={startGame}
          rollTheDice={rollDice}
          gameMessage={gameMessage}
          isDisabledStart={isDisabledStart}
          isDisabledRoll={gameStarted ? true : isDisabledRoll}
          isDisabledMenu={isDisabledMenu}
          currentDiceRoll={currentDiceRoll}
          currentPlayer={currentPlayer}
          roundsPlayed={roundsPlayed}
          selectPawn={selectPawnAction}
          rollDiceForMove={rollDiceForMove}
          selectedPawn={selectedPawn}
          isDisabledRollForMoves={isDisabledRollForMoves}
          gameStarted={gameStarted}
          selectingPhase={selectingPhase}
          setGameMessage={setGameMessage}
          // diceIsRolling={diceIsRolling}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { gamestate: GameState } => {
  return { gamestate: state.gamestate };
};

export default connect(
  mapStateToProps,
  {
    nextPlayer,
    setGameMessage,
    rollTheDice,
    newRound,
    selectPawn,
    updatePawn,
    validatePawn,
    // switchState,
    grantSafetyStatus,
    addPosition,
    removeSafetyStatus
  }
)(App);
