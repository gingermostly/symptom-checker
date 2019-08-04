import * as React from 'react';

class SymptomList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <select>
        <option value="none" disabled selected>
          Choose a symptom
        </option>
        <option value="sore throat">Sore throat</option>
        <option value="itchy rash">Itchy rash</option>
        <option value="runny nose">Runny nose</option>
      </select>
    );
  }
}

export default SymptomList;
