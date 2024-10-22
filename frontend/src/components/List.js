import { Link } from "react-router-dom";

const List = (props) => {
  const { datas: anime, title } = props;

  return (
    <div className="m-10 text-black">
      <h2 className="text-center font-bold pb-2 pl-3">{title}</h2>
      <section className="flex flex-wrap gap-3 justify-start">
        {anime.map((anime) => (
          <Link to={`/datas/${anime.id}`}>
            <div className="flex flex-col-reverse p-2 group" key={anime.id}>
              <div className="bg-[#68d8d6] w-[0px] h-[5px] group-hover:w-[450px] group-hover:rounded-b-xl duration-200"></div>
              <div
                className="mt-5 py-6 px-5 bg-[#eff7f6] group-hover:bg-[#9ceaef] text-wrap 
                w-[450px] rounded-t-md duration-200 flex justify-between shadow-md"
              >
                <section className="flex flex-col ">
                  <h2 className="text-xl font-bold">{anime.title}</h2>
                  <p className="text-sm">
                    Episodes : <b>{anime.episodes}</b>
                  </p>
                  <p className="text-sm">
                    Status : <b>{anime.status}</b>
                  </p>
                </section>
                <section className="">
                  <img
                    src={anime.src}
                    alt="Img"
                    className="w-[100px] h-[150px] object-cover drop-shadow-xl rounded-lg"
                  />
                </section>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default List;
