import * as React from 'react';

class SymptomList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action="/api/symptom" method="POST">
        <select name="symptom">
          <option value="none" disabled selected>
            Choose a symptom
          </option>
          <option value="sore throat">Sore throat</option>
          <option value="itchy rash">Itchy rash</option>
          <option value="runny nose">Runny nose</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

export default SymptomList;
