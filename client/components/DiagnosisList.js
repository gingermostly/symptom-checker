import * as React from 'react';

class DiagnosisList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.dxList.map(item => {
          return <div>{item.diagnosis}</div>;
        })}
      </div>
    );
  }
}

export default DiagnosisList;
