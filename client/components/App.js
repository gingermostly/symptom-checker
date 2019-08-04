import * as React from 'react';
import SymptomList from './SymptomList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Please choose a symptom: </h1>
        <SymptomList />
      </div>
    );
  }
}

export default App;
