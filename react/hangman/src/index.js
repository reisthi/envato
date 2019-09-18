import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class ButtonPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: [
        ["A", "B", "C", "D"],
        ["E", "F", "G", "H"],
        ["I", "J", "K", "L"],
        ["M", "N", "0", "P"],
        ["Q", "R", "S", "T"],
        ["U", "V", "W", "X"],
        [".", "Y", "Z", "."]
      ],
      targetWord: props.targetWord,
      letterMap: {}
    };

    this.state["letterMap"] = this.mapLetters();
  }
  mapLetters() {
    let map = {};

    this.state.letters.forEach(letterRow => {
      letterRow.forEach(letter => {
        const letterInTarget =
          this.state.targetWord.toLowerCase().indexOf(letter.toLowerCase()) >
          -1;
        map[letter] = {
          clicked: false,
          cls: letterInTarget ? "found" : "missed"
        };
      });
    });
  }

  render() {
    const letterGrid = this.state.letters.map((row, index) => (
      <p key={index}>
        {row.map(letter => (
          <button key={letter}>{letter}</button>
        ))}
      </p>
    ));
    return <div>{letterGrid}</div>;
  }
}

class Letter extends React.Component {
  render() {
    return <span className="letter">{this.props.value}</span>;
  }
}

class GameBoard extends React.Component {
  render() {
    let letters = [];
    this.props.targetWord.split("").forEach((letter, index) => {
      letters.push(<Letter value={letter} key={index} />);
    });

    return (
      <div>
        {letters}
        <br />
        <div>
          <ButtonPad targetWord="homie" />
        </div>
      </div>
    );
  }
}

class Hangman extends React.Component {
  render() {
    return (
      <div>
        <h1>Hangman Clone</h1>
        <p>Wlelcome to my game!</p>
        <div>
          <GameBoard targetWord="Thiago is awesome!" />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Hangman />, document.getElementById("root"));
