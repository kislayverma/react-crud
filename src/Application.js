import React from 'react';
import EventTable from "./EventTable";

class Application extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "events" : [],
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ events: data })
      })
      .catch(alert)
  }

  renderEventTable() {
    return <EventTable events={this.state.events} />;
  }

  render() {
    return (
        <center>
          <h1>{this.state.events.length} Records Found</h1>
          {this.renderEventTable()}
        </center>
    );
  }
}

export default Application;
