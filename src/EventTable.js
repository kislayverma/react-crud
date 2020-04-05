import React from 'react';
import Event from "./event";

class EventTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedState : Array(this.props.events.length).fill('white'),
    };
  }

  rowClickHandler(id) {
    const events = this.state.clickedState.slice();
    if (events[id] === 'white') {
      events[id] = 'blue';
    } else {
      events[id] = 'white';
    }
    this.setState({clickedState: events});
  }

  renderEvent(id, title, desc) {
    return <Event
      id={id}
      title= {title}
      description={desc}
      bgColor={this.state.clickedState[id]}
      onClick={() => this.rowClickHandler(id)} />
  }

  render() {
    return (
      <table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.events.map((event) =>
            this.renderEvent(event.id, event.name, event.username)
          )}
        </tbody>
      </table>
    );
  }
}

export default EventTable;
