import { Link } from "react-router-dom";

const List = (props) => {
  const { datas, title } = props;

  return (
    <div className="p-10">
      <h2 className="text-center pb-2">{title}</h2>
      {datas.map((anime) => (
        <div className="border p-20" key={anime.id}>
          <Link to={`/datas/${anime.id}`}>
            <h2 className="font-bold">Title : {anime.title}</h2>
            <p>Type : {anime.description}</p>
            <p> Episodes : {anime.episodes}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default List;
