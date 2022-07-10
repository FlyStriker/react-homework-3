const CharacterEpisodes = ({ episode: { name, air_date } }) => {
  return (
    <li>
      <span>
        {" "}
        Episode: <strong>{name}</strong>
      </span>
      <p>Date: {air_date}</p>
    </li>
  );
};

export default CharacterEpisodes;
