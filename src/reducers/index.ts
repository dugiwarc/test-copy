import { combineReducers } from 'redux';
import { gamestateReducer } from './gamestate';
import { GameState } from '../actions';

export interface StoreState {
  gamestate: GameState;
}

export const rootReducer = combineReducers<StoreState>({
  gamestate: gamestateReducer
});
