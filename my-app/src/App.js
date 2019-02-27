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

// function App() {
//   return (
//     <div>
//   <Score/>
//     <Wrapper>
//       <CharacterCard
//         image={characters[0].image}
//       />
//       <CharacterCard
//         image={characters[1].image}
//       />
//       <CharacterCard
//         image={characters[2].image}
//       />
//       <CharacterCard
//         image={characters[3].image}
//       />
//       <CharacterCard
//         image={characters[4].image}
//       />
//       <CharacterCard
//         image={characters[5].image}
//       />
//       <CharacterCard
//         image={characters[6].image}
//       />
//       <CharacterCard
//         image={characters[7].image}
//       />
//       <CharacterCard
//         image={characters[8].image}
//       />
//       <CharacterCard
//         image={characters[9].image}
//       />
//       <CharacterCard
//         image={characters[10].image}
//       />
//       <CharacterCard
//         image={characters[11].image}
//       />
//       <CharacterCard
//         image={characters[12].image}
//       />
//       <CharacterCard
//         image={characters[13].image}
//       />
//       <CharacterCard
//         image={characters[14].image}
//       />
//       <CharacterCard
//         image={characters[15].image}
//       />
//     </Wrapper>
//     <Footer/>
//     </div>
//   );
// }

export default App;

