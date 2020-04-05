import React from 'react';

class Event extends React.Component {
  render() {
    return (
      <tr style={{'backgroundColor': this.props.bgColor}} onClick={() => this.props.onClick()}>
          <td>{this.props.id}</td><td>{this.props.title}</td><td>{this.props.description}</td>
      </tr>
    );
  }
}

export default Event;
