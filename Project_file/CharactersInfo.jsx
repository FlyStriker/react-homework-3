import CharacterEpisodes from "./PastLife";
import { keyGen } from "./SelectCharacter";
import rick from "../img/rick.png";

const AboutCharacters = ({ person: { image, name, gender, episode } }) => {
  return (
    <>
      {" "}
      <div className="DetailsContainer">
        <img src={image} alt={name}></img>
        <div className="Character-Details">
          <h2>Name: {name}</h2>
          <p>Gender: {gender}</p>
        </div>
        <div className="Character-Episodes">
          <ul className="Character-Episode-List">
            {episode.map((episode) => (
              <CharacterEpisodes episode={episode} key={keyGen()} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const NoCharacterInfo = () => {
  return (
    <>
      <div className="no_info_container">
        <h2>
          Unfortunately, there is no information about this character yet{" "}
        </h2>
        <img src={rick} alt="image" />
      </div>
    </>
  );
};
export { AboutCharacters, NoCharacterInfo };
