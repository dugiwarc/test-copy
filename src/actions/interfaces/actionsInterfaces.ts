import { ActionTypes } from '../types';

export interface IncrementMoveAction {
  type: ActionTypes.incrementMove;
  payload: number[];
}

export interface SetGameMessageAction {
  type: ActionTypes.setGameMessage;
  payload: string;
}

export interface NextPlayerAction {
  type: ActionTypes.nextPlayer;
}

export interface RollTheDiceAction {
  type: ActionTypes.rollTheDice;
  payload: number;
}

export interface NewRoundAction {
  type: ActionTypes.newRound;
}

export interface GrantMoveAccessAction {
  type: ActionTypes.grantMoveAccess;
  payload: number;
}

export interface SelectPawnAction {
  type: ActionTypes.selectPawn;
  payload: number;
}

export interface UpdatePawnAction {
  type: ActionTypes.updatePawn;
  payload: number;
}

export interface ValidatePawnAction {
  type: ActionTypes.validatePawn;
  payload: string;
}

export interface SwitchStateAction {
  type: ActionTypes.switchState;
}

export interface GrantSafetyAction {
  type: ActionTypes.grantSafetyStatus;
}

export interface RemoveSafetyAction {
  type: ActionTypes.removeSafetyStatus;
}

export interface AddOccupiedTileAction {
  type: ActionTypes.addPosition;
  payload: string;
}
