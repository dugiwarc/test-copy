import {
  IncrementMoveAction,
  NextPlayerAction,
  SetGameMessageAction,
  RollTheDiceAction,
  NewRoundAction,
  GrantMoveAccessAction,
  SelectPawnAction,
  UpdatePawnAction,
  ValidatePawnAction,
  SwitchStateAction,
  GrantSafetyAction,
  RemoveSafetyAction,
  AddOccupiedTileAction
} from './interfaces/actionsInterfaces';

export enum ActionTypes {
  incrementMove,
  nextPlayer,
  setGameMessage,
  rollTheDice,
  newRound,
  grantMoveAccess,
  switchState,
  selectPawn,
  updatePawn,
  validatePawn,
  grantSafetyStatus,
  removeSafetyStatus,
  addPosition
}

export type Action =
  | IncrementMoveAction
  | NextPlayerAction
  | SwitchStateAction
  | UpdatePawnAction
  | NewRoundAction
  | AddOccupiedTileAction
  | ValidatePawnAction
  | GrantSafetyAction
  | RemoveSafetyAction
  | SetGameMessageAction
  | SelectPawnAction
  | RollTheDiceAction
  | GrantMoveAccessAction;
