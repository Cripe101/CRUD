import { Link, useHistory, useParams } from "react-router-dom";
import UseFetch from "../UseFetch";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    datas: anime,
    error,
    isLoading,
  } = UseFetch("http://localhost:8000/datas/" + id);

  const handleDelete = async () => {
    await fetch("http://localhost:8000/datas/" + id, {
      method: "DELETE",
    });
    history.push("/");
  };

  return (
    <div className="py-10">
      {isLoading && <div className="text-center p-10">Loading...</div>}
      {error && <div>{error}</div>}
      {anime && (
        <div className="flex flex-col justify-end w-[450px] mx-auto bg-[#eff7f6] pt-2 py-5 px-7 rounded-xl overflow-hidden text-[#000] hover:border-[#e0fbfc] shadow-md">
          <section className="flex mb-5 mt-4 justify-end">
            <button
              onClick={handleDelete}
              className="flex justify-center rounded border-black font-bold duration-200 h-8 w-12 
                items-center hover:bg-[#c4fff9]"
            >
              <MdDelete />
            </button>
            <Link to={`/updateList/${anime.id}`}>
              <button className=" flex justify-center rounded font-bold duration-200 h-8 w-12 items-center mx-2 hover:bg-[#c4fff9]">
                <FaEdit />
              </button>
            </Link>
          </section>
          <span className="flex flex-col gap-5">
            <section className="flex gap-5 items-start">
              <img
                src={anime.src}
                alt="Img"
                className="w-[200px] h-[100%] object-fit rounded-xl"
              />
              <section className="flex flex-col ">
                <h2 className="font-bold my-3">{anime.title}</h2>
                <p className="text-[16px]">Episodes : {anime.episodes}</p>
              </section>
            </section>
            <section>
              <br />
              <p className="text-base">{anime.description}</p>
            </section>
          </span>
        </div>
      )}
    </div>
  );
};

export default Details;
