import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import EventTable from './components';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

//=======================================
class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor : 'white',
    };
  }

  clickHandler() {
    if (this.state.bgColor == 'white') {
      this.setState({"bgColor": 'blue'});
    } else {
      this.setState({"bgColor":'white'});
    }
    // alert(this.state.bgColor);
  }

  render() {
    return (
      <tr style={{'backgroundColor': this.state.bgColor}} onClick={() => this.clickHandler()}>
          <td>{this.props.id}</td><td>{this.props.title}</td><td>{this.props.description}</td>
      </tr>
    );
  }
}

class EventTable extends React.Component {
  renderEvent(id, title, desc) {
    return <Event id={id} title={title} description={desc} />
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
          {this.renderEvent(1, "Tiltle 1", "Desc 1")}
          {this.renderEvent(2, "Tiltle 2", "Desc 2")}
        </tbody>
      </table>
    );
  }
}

// ========================================

ReactDOM.render(
  <EventTable />,
  document.getElementById('root')
);
