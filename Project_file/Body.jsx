import { Episode_list } from "../data/Episode_list";
import Episode from "./ShowEpisode";
import { keyGen } from "./SelectCharacter";

const ShowBody = () => {
  return (
    <section className="Main">
      <ul className="Maine-List">
        {Episode_list.map((episode) => (
          <Episode episode={episode} key={keyGen()} />
        ))}
      </ul>
    </section>
  );
};

export default ShowBody;
