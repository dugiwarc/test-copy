import React, { Component } from 'react';
// import { pawn } from '../styles/';
import pawnImage from '../assets/graphics/pawn.png';

interface AppProps {
  identifier: number;
}

const pawn: {} = {
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
  // backgroundImage: `url(${pawnImage})`
};

const identifierStyles: {} = {
  fontSize: '12px',
  color: 'salmon',
  transform: 'translate(80px,-30px)'
};

export default class Pawn extends Component<AppProps> {
  render() {
    const { identifier } = this.props;
    return (
      <div style={pawn}>
        <div className='pawnAnimation' style={identifierStyles}>
          {identifier}
        </div>
        <img height='150px' src={pawnImage} alt='pawn' />
      </div>
    );
  }
}
