import React from "react";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import Score from "./components/Score";
import characters from "./characters.json";
// import FadeIn from "./components/Transitions";

let score = 0

class App extends React.Component {

 
  state = {
    characters,
    clickedCharacters: [],
    score: score
  }
   

  isClicked = id => {
   if (this.state.clickedCharacters.includes(id)) {
     score=0
     this.setState({score: score})
     this.setState({clickedCharacters: []})
   } else {
     const clickedCharacters = this.state.clickedCharacters
     clickedCharacters.push(id)
     score++
     this.setState({clickedCharacters: clickedCharacters })
     this.setState({score: score})
    console.log("Clicked Characters:", this.state.clickedCharacters) 
    console.log("Score:", score)
   }
   

  }

  // notClicked = id => {
  //   const notClickedCharacters = this.state.notClickedCharacters
  //   notClickedCharacters.push(id)
  //   this.setState({notClickedCharacters: notClickedCharacters(id)})
  // }

  shuffleCharacter = arr => {
    // console.log("shuffling")
    // //create a variable to temporarily hold some element
    let temp;

    // //loop through the array we would like to shuffle (which was passed in as an argument)
    // //We are starting at the end of the array for simplicity
    for (let i = arr.length-1; i > 0; i--){

    //     //grab any element between the beginning of the array and the current position we are 'shuffling'
        let randomElement = Math.floor(Math.random() * i)

    //     // This is the 'tricky' part
    //     // store the current element being shuffled into our temp variable
        temp = arr[i];

    //     // reassign the randomElement to our current index being shuffled
        arr[i] = arr[randomElement];

    //     // assign our temp value to the random element's index
        arr[randomElement] = temp; 

    //     //this may have sounded complicated; however, all we have did... was 'swap' two array indexes.
    }
    // console.log(arr)
    this.setState({
      characters: arr
    });
  }

  render() {
    return (
      <div>
        <Score score={this.state.score} />
          <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
            key={character.id} 
            id={character.id}
            image={character.image}
            shuffleCharacter={this.shuffleCharacter}
            characters={this.state.characters}
            isClicked={this.isClicked}
             />
          ))}
          </Wrapper>
        <Footer />
      </div>
    );
  }
}


export default App;
