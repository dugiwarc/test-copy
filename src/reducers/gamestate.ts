import { GameState, Action, ActionTypes } from '../actions';

const initState = {
  currentActivePlayer: 1,
  hasWinner: false,
  currentDiceRoll: 0,
  isExceeded: false,
  roundsPlayed: 0,
  gameMessage: '',
  selectedPawn: 0,
  pawnMoves: 0,
  pawns: [
    {
      pawnID: 0,
      moves: 0,
      hasReachedTheEnd: false,
      hasSmashedIt: false,
      isSafe: false
    }
  ],
  players: [
    {
      playerID: 0,
      hasReached: 0,
      isWinner: false
    }
  ],
  validatedPawns: [],
  occupiedTiles: ''
};

export const gamestateReducer = (
  state: GameState = initState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.switchState:
      state.isExceeded = !state.isExceeded;
      return state;

    case ActionTypes.addPosition:
      let newString = state.occupiedTiles.concat(`[${action.payload}]`);
      state.occupiedTiles = newString;
      return state;

    case ActionTypes.validatePawn:
      state.validatedPawns.push(action.payload);
      return state;

    case ActionTypes.grantSafetyStatus:
      state.pawns.forEach(pawn => {
        if (pawn.pawnID === state.selectedPawn) {
          pawn.isSafe = true;
        }
      });
      return state;

    case ActionTypes.removeSafetyStatus:
      state.pawns.forEach(pawn => {
        if (pawn.pawnID === state.selectedPawn) {
          pawn.isSafe = false;
        }
      });
      return state;

    case ActionTypes.updatePawn:
      console.log('UPDATE_PAWN');
      state.pawnMoves = action.payload;
      console.log(`will make ${state.pawnMoves} moves`);
      const doesExist = state.pawns.some(pawn => {
        return pawn.pawnID.toString() === state.selectedPawn.toString();
      });
      !doesExist &&
        state.pawns.push({
          pawnID: state.selectedPawn,
          moves: 0,
          hasReachedTheEnd: false,
          hasSmashedIt: false,
          isSafe: false
        });
      state.pawns.map(pawn => {
        if (pawn.pawnID.toString() === state.selectedPawn.toString()) {
          pawn.moves += action.payload;
          state.pawnMoves = pawn.moves;
          return state;
        }
        return state;
      });
      return state;

    case ActionTypes.newRound:
      state.currentActivePlayer = 1;
      state.roundsPlayed++;
      return state;
    case ActionTypes.selectPawn:
      state.selectedPawn = action.payload;
      return state;
    case ActionTypes.nextPlayer:
      console.log('NEXT_PLAYER');
      state.currentActivePlayer++;
      return state;
    case ActionTypes.setGameMessage:
      state.gameMessage = action.payload;
      return state;
    case ActionTypes.rollTheDice:
      state.currentDiceRoll = action.payload;
      return state;
    default:
      return state;
  }
};
