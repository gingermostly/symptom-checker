import * as React from 'react';
import SymptomList from './SymptomList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <SymptomList />
      </div>
    );
  }
}

export default App;
