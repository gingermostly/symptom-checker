import * as React from 'react';

class DiagnosisList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch('http://127.0.0.1:3000/api/dx').then(res => {
      console.log(res.json);
    });
  }
  render() {}
}
