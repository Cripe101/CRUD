import { Link } from "react-router-dom";

const List = (props) => {
  const { datas, title } = props;

  return (
    <div>
      <div className="m-10 text-black">
        <h2 className="text-start font-bold pb-2 pl-3">{title}</h2>
        {datas.map((anime) => (
          <Link to={`/datas/${anime.id}`}>
            <div className="flex flex-col-reverse p-2 group " key={anime.id}>
              <div className="bg-[#68d8d6] w-[0px] h-[5px] group-hover:w-[450px] group-hover:rounded-b-xl duration-200"></div>
              <div
                className="mt-5 py-6 pr-14 pl-5 bg-[#eff7f6] group-hover:bg-[#9ceaef] text-wrap 
                w-[450px] rounded-t-md duration-200 flex justify-between shadow-md"
              >
                <section className="">
                  <h2 className="text-xl font-bold">{anime.title}</h2>
                  <p className="text-md"> Episodes : {anime.episodes}</p>
                </section>
                <section className="pl-20 ">
                  <img
                    src={anime.src}
                    alt="Img"
                    className="w-[150px] h-[150px] rounded-lg object-contain "
                  />
                </section>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default List;
