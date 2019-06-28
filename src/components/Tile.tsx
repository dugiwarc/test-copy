import React, { Component } from 'react';

interface AppProps {
  type: number;
}

export default class Tile extends Component<AppProps> {
  render() {
    const { type } = this.props;
    return (
      <div
        className={
          type === -3 ? 'ludo-tile' : type === -8 ? 'safe-ludo-tile' : 'tile'
        }
      />
    );
  }
}
