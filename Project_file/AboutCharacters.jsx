import { Character_List } from "../data/Character_List";
import { AboutCharacters, NoCharacterInfo } from "./CharactersInfo";
import { keyGen } from "./SelectCharacter";

const Character = ({ name: { name } }) => {
  let info;
  const isData = () => {
    Character_List.map((item) => item.name === name && (info = item));
    return info;
  };
  return (
    <li className="Characters">
      {name}
      <div className="About-Characters hide">
        {!isData() ? (
          <NoCharacterInfo key={keyGen()} />
        ) : (
          <AboutCharacters person={info} key={keyGen()} />
        )}
      </div>
    </li>
  );
};

export default Character;
