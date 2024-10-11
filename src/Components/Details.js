import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "../UseFetch";

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    datas: anime,
    error,
    isLoading,
  } = UseFetch("http://localhost:8000/datas/" + id);
  const handleDelete = async () => {
    await fetch("http://localhost:8000/datas/" + anime.id, {
      method: "DELETE",
    });
    history.push("/");
  };

  return (
    <div className="">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {anime && (
        <article>
          <h2>{anime.title}</h2>
          <p>{anime.description}</p>
          <p>Episodes : {anime.episodes}</p>
          <button onClick={handleDelete} className="border-black border">
            {" "}
            Delete{" "}
          </button>
          <Link to={`/updateList/${anime.id}`}>Edit</Link>
        </article>
      )}
    </div>
  );
};

export default Details;
