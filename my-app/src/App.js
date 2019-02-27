import React from "react";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/footer";
import Score from "./components/Score";
import characters from "./characters.json";

class App extends React.Component {
  render() {
    return (
        <div>
  <Score/>
    <Wrapper>
        {characters.map(character => (
          <CharacterCard
        image={character.image}
      />
        ))}
      </Wrapper>
      <Footer/>
      </div>
    );
  }
}


export default App;

