import React from 'react';
import face_1 from '../assets/graphics/1.png';
import face_2 from '../assets/graphics/2.png';
import face_3 from '../assets/graphics/3.png';
import face_4 from '../assets/graphics/4.png';
import face_5 from '../assets/graphics/5.png';
import face_6 from '../assets/graphics/6.png';

interface AppProps {
  isDisabledRoll: boolean;
  gameStarted: boolean;
  currentDiceRoll: number;
  selectingPhase: boolean;
}

export default class DiceSpinner extends React.Component<AppProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      roll: 1
    };
  }

  render() {
    let outputImage;
    const {
      currentDiceRoll,
      isDisabledRoll,
      gameStarted,
      selectingPhase
    } = this.props;
    currentDiceRoll === 1
      ? (outputImage = face_1)
      : currentDiceRoll === 2
      ? (outputImage = face_2)
      : currentDiceRoll === 3
      ? (outputImage = face_3)
      : currentDiceRoll === 4
      ? (outputImage = face_4)
      : currentDiceRoll === 5
      ? (outputImage = face_5)
      : (outputImage = face_6);
    return (
      <div>
        {isDisabledRoll && !gameStarted && !selectingPhase ? (
          <div className='spinner' />
        ) : (
          <img src={outputImage} alt='dice' height='50px' />
        )}
      </div>
    );
  }
}
