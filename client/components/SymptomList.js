import * as React from 'react';
import DiagnosisList from './DiagnosisList.js';

class SymptomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptom: '',
      diagnoses: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch('http://127.0.0.1:3000/api/symptom', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ symptom: this.state.symptom }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        console.log(res);
        this.setState({
          diagnoses: res,
        });
      });
  }
  handleChange(e) {
    this.setState({
      symptom: e.target.value,
    });
  }
  render() {
    // Display diagnosis list if symptom has been submitted
    if (this.state.diagnoses.length) {
      return (
        <div>
          <DiagnosisList dxList={this.state.diagnoses} />
        </div>
      );
    } else {
      // if symptom not yet selected display selection form
      return (
        <div>
          <h1>What are your symptoms?</h1>
          <form
            action="/api/symptom"
            method="POST"
            onSubmit={this.handleSubmit}
          >
            <select name="symptom" onChange={this.handleChange}>
              <option value="none" disabled selected>
                Choose a symptom
              </option>
              <option value="sore throat">Sore throat</option>
              <option value="itchy rash">Itchy rash</option>
              <option value="runny nose">Runny nose</option>
            </select>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      );
    }
  }
}

export default SymptomList;
