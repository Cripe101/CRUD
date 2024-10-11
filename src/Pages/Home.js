import UseFetch from "../UseFetch";
import List from "../Components/List";

const Home = () => {
  const {
    datas: anime,
    isLoading,
    error,
  } = UseFetch("http://localhost:8000/datas");

  return (
    <div className="flex flex-col items-center p-20">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {anime && <List datas={anime} title="All Anime" />}
    </div>
  );
};
export default Home;
