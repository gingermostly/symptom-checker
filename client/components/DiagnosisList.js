import * as React from 'react';
import Confirm from './Confirm.js';

class DiagnosisList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      topItem: null,
      remainingDx: [],
    };
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
  }
  componentDidMount() {
    // sort list of diagnoses in descending order
    let sortedDx = this.props.dxList.slice(0).sort((a, b) => {
      if (a.reported < b.reported) {
        return 1;
      } else if (a.reported > b.reported) {
        return -1;
      } else {
        return 0;
      }
    });
    // filter list of diagnoses to only include most frequent diagnosis or diagnoses
    let filterDx = sortedDx.filter(item => {
      return item.reported === sortedDx[0].reported;
    });
    // pick random index from list of diagnoses if multiple of equal frequency
    let topDxIndex =
      filterDx.length > 1 ? Math.floor(Math.random() * filterDx.length) : 0;
    console.log('topDxIndex', topDxIndex, sortedDx[topDxIndex]);
    this.setState({
      topItem: filterDx[topDxIndex],
      remainingDx: sortedDx.filter((item, index) => index !== topDxIndex),
    });
  }
  handleYesClick() {
    console.log('yes');
  }
  handleNoClick() {
    this.setState({
      showAll: true,
    });
  }
  render() {
    console.log(this.topItem);
    if (this.props.dxList.length) {
      return (
        <div>
          {!this.state.showAll && this.state.topItem ? (
            <React.Fragment>
              <h1>Is this diagnosis accurate?</h1>
              <div>
                {this.state.topItem.diagnosis}
                <Confirm
                  onYes={this.handleYesClick}
                  onNo={this.handleNoClick}
                />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {this.state.remainingDx &&
                this.state.remainingDx.map(item => {
                  return <div>{item.diagnosis}</div>;
                })}
            </React.Fragment>
          )}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DiagnosisList;
