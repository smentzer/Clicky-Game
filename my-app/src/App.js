import React from "react";
import Wrapper from "./components/Wrapper";
import CharacterCard from "./components/CharacterCard";
// import Score from "./components/Score";
import characters from "./characters.json";



function App() {
  return (
    <Wrapper>
      <CharacterCard
        image={characters[0].image}
      />
      <CharacterCard
        image={characters[1].image}
      />
      <CharacterCard
        image={characters[2].image}
      />
      <CharacterCard
        image={characters[3].image}
      />
      <CharacterCard
        image={characters[4].image}
      />
      <CharacterCard
        image={characters[5].image}
      />
      <CharacterCard
        image={characters[6].image}
      />
      <CharacterCard
        image={characters[7].image}
      />
      <CharacterCard
        image={characters[8].image}
      />
    </Wrapper>
  );
}

export default App;
