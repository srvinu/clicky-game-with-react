import React, { Component } from "react";
import NavBars from "./components/NavBars";
import Jumbo from "./components/Jumbo";
import ImageAvatars from "./components/ImageAvatars";
import Shuffle from "shuffle-array";
import Images from "./components/image.json";

console.log(Shuffle(Images));
class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    gameOver: false,
    imgClick: [],
    Images,
    status: ""
  };

  checkDuplicate = id => {
    console.log(`Ur clicked Pic:  ${id}`);
    if (this.state.imgClick.includes(id)) {
      this.resetGame();
    } else {
      this.addPoints();
      this.state.imgClick.push(id);
      this.setState({ gameOver: false });
    }
  };
  resetGame = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      gameOver: true,
      imgClick: [],
      Images: Shuffle(Images),
      status: "You Lost Try Again!"
    });
  };
  addPoints = () => {
    let newScore = parseInt(this.state.score) + 1;
    console.log(newScore);
    if (newScore === this.state.Images.length) {
      this.setState({
        score: newScore,
        topScore: newScore,
        imgClick: [],
        status: "You Win !",
        Images,
        gameOver: false
      });
    } else if (newScore > this.state.topScore) {
      this.setState({
        score: newScore,
        topScore: newScore,
        status: "You Guessed Correctly !",
        Images,
        gameOver: false
      });
    } else {
      this.setState({
        score: newScore,
        status: "You Guessed Correctly !"
      });
    }
    this.setState({ Images: Shuffle(Images) });
  };

  render() {
    return (
      <>
        <NavBars
          score={this.state.score}
          topScore={this.state.topScore}
          status={this.state.status}
        />
        <Jumbo />

        {this.state.Images.map(img => (
          <ImageAvatars
            id={img.id}
            images={img.image}
            checkDuplicate={this.checkDuplicate}
          />
        ))}
      </>
    );
  }
}

export default App;
