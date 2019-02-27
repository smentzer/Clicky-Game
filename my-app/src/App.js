import React from "react";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/footer";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends React.Component {

  state = {
    characters,
    // clickedCharacters: [],
    // score: 0
  }

  shuffleCharacter = arr => {
    console.log("shuffling")
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
        <Score />
        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard 
            id={character.id}
            image={character.image}
            shuffleCharacter={this.shuffleCharacter}
            characters={this.state.characters}
             />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
