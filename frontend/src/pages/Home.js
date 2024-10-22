import UseFetch from "../UseFetch";
import List from "../components/List";

const Home = () => {
  const {
    datas: anime,
    isLoading,
    error,
  } = UseFetch("http://localhost:8000/datas");

  return (
    <div className="flex flex-col items-center">
      {error && <div>{error}</div>}
      {isLoading && <div className="text-center p-20">Loading...</div>}
      {anime && <List datas={anime} title="All List" />}
    </div>
  );
};
export default Home;
