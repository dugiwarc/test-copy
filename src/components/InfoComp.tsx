import React from 'react';

interface AppProps {
  title: string;
  output: string | number;
}

class InfoComp extends React.Component<AppProps> {
  render() {
    const { title, output } = this.props;
    return (
      <div>
        {title}
        <span className='status'>{output}</span>
      </div>
    );
  }
}

export default InfoComp;
