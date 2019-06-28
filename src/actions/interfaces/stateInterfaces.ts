export interface Pawn {
  pawnID: number;
  moves: number;
  hasReachedTheEnd: boolean;
  isSafe: boolean;
  hasSmashedIt: boolean;
}
export interface Player {
  playerID: number;
  hasReached: number;
  isWinner: boolean;
}

export interface GameState {
  hasWinner: boolean;
  currentActivePlayer: number;
  currentActivePawn?: number;
  currentDiceRoll: number;
  roundsPlayed: number;
  gameMessage: string;
  pawnMoves: number;
  selectedPawn: number;
  pawns: Pawn[];
  players: Player[];
  validatedPawns: string[];
  isExceeded: boolean;
  occupiedTiles: string;
}
