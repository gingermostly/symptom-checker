import * as React from 'react';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button>YES</button>
        <button>NO</button>
      </div>
    );
  }
}

export default Confirm;
