import * as React from 'react';

class DiagnosisList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
    if (this.props.dxList.length) {
      return <div>{filterDx[topDxIndex].diagnosis}</div>;
    } else {
      return null;
    }
  }
}

export default DiagnosisList;
