import * as React from 'react';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onYes}>YES</button>
        <button onClick={this.props.onNo}>NO</button>
      </div>
    );
  }
}

export default Confirm;
