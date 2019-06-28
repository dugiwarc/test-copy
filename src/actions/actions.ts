import { ActionTypes } from './types';

import {
  IncrementMoveAction,
  SetGameMessageAction,
  NextPlayerAction,
  RollTheDiceAction,
  NewRoundAction,
  GrantMoveAccessAction,
  SelectPawnAction,
  UpdatePawnAction,
  ValidatePawnAction,
  // SwitchStateAction,
  RemoveSafetyAction,
  GrantSafetyAction,
  AddOccupiedTileAction
} from './interfaces/actionsInterfaces';

export const incrementMove = (id: number[]): IncrementMoveAction => {
  console.log(id);
  id.map(item => typeof item === 'string' && parseInt(item));
  return {
    type: ActionTypes.incrementMove,
    payload: id
  };
};

export const nextPlayer = (): NextPlayerAction => {
  return {
    type: ActionTypes.nextPlayer
  };
};

export const setGameMessage = (message: string): SetGameMessageAction => {
  return {
    type: ActionTypes.setGameMessage,
    payload: message
  };
};

export const rollTheDice = (): RollTheDiceAction => {
  const roll = Math.floor(Math.random() * 6 + 1);
  return {
    type: ActionTypes.rollTheDice,
    payload: roll
  };
};

export const newRound = (): NewRoundAction => {
  return {
    type: ActionTypes.newRound
  };
};

export const grantMoveAccess = (id: number): GrantMoveAccessAction => {
  return {
    type: ActionTypes.grantMoveAccess,
    payload: id
  };
};

export const selectPawn = (id: number): SelectPawnAction => {
  return {
    type: ActionTypes.selectPawn,
    payload: id
  };
};

export const updatePawn = (id: number): UpdatePawnAction => {
  return {
    type: ActionTypes.updatePawn,
    payload: id
  };
};

export const validatePawn = (id: string): ValidatePawnAction => {
  return {
    type: ActionTypes.validatePawn,
    payload: id
  };
};

export const grantSafetyStatus = (): GrantSafetyAction => {
  return {
    type: ActionTypes.grantSafetyStatus
  };
};

export const removeSafetyStatus = (): RemoveSafetyAction => {
  return {
    type: ActionTypes.removeSafetyStatus
  };
};

export const addPosition = (position: string): AddOccupiedTileAction => {
  return {
    type: ActionTypes.addPosition,
    payload: position
  };
};
