import React from 'react';
import uuid from 'uuid/v4';

interface AppProps {
  gameMessage: string;
  currentDiceRoll: number;
}

interface AppState {
  messages: string[];
}

class GameLog extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillReceiveProps(prevProps: any, prevState: any) {
    if (this.props.gameMessage !== prevProps.gameMessage) {
      this.setState({
        messages: [...this.state.messages, this.props.gameMessage]
      });
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {}

  render() {
    const { gameMessage } = this.props;
    return (
      <div className='game-log'>
        <h1>GAME LOG</h1>
        <div className='game-log-info'>
          {this.state.messages.map(
            (message, i) => i !== 1 && <div key={uuid()}>{message}</div>
          )}
          {gameMessage}
        </div>
      </div>
    );
  }
}

export default GameLog;
