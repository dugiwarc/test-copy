import React from 'react';
import uuid from 'uuid/v4';

interface AppProps {
  currentPlayer: number;
  isDisabledMenu: boolean;
  selectPawn: Function;
}

class ButtonMenu extends React.Component<AppProps> {
  render() {
    let i = 1;
    let pawns: number[] = [];
    const { currentPlayer, isDisabledMenu, selectPawn } = this.props;
    currentPlayer === 1
      ? (i = 1)
      : currentPlayer === 2
      ? (i = 5)
      : currentPlayer === 3
      ? (i = 9)
      : currentPlayer === 4 && (i = 13);
    for (let j = i; j < i + 4; j++) {
      pawns.push(j);
    }

    const handleClick = (evt: any) => {
      selectPawn(evt.target.innerText);
    };
    return (
      <div>
        {pawns.map(pawn => (
          <button
            key={uuid()}
            disabled={isDisabledMenu}
            onClick={handleClick}
            // style={!isDisabledMenu ? boxShadow : dummy}
            className={!isDisabledMenu ? 'box-shadow' : 'dummy'}
          >
            {pawn}
          </button>
        ))}
      </div>
    );
  }
}

export default ButtonMenu;
