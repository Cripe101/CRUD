import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const UpdateList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [episodes, setEpisodes] = useState("");
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function getdata() {
      const res = await fetch("http://localhost:8000/datas/" + id);
      const data = await res.json();
      setTitle(data.title);
      setDescription(data.description);
      setEpisodes(data.episodes);
      setSrc(data.src);
    }
    getdata();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datas = { description, title, episodes, src };
    setIsLoading(true);

    const res = await fetch("http://localhost:8000/datas/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datas),
    });

    setIsLoading(false);

    if (res.ok) {
      history.push("/");
    } else {
      alert(`error${res.status}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-10 text-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[400px] p-8 rounded-md shadow-md bg-[#eff7f6]"
      >
        <h2 className="font-bold">Update List</h2>
        <section className="text-sm">
          <p>Image Source Link</p>
          <input
            type="text"
            className=" w-[100%] rounded-md text-center h-[40px] px-2"
            placeholder="Source of the Pic"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
        </section>
        <section className="text-sm">
          <label className=" font-bold">Anime Title</label>
          <input
            className=" w-[100%] rounded-md text-center h-[40px] px-2"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </section>
        <section className="text-sm">
          <label className=" font-bold">Description</label>
          <textarea
            className=" w-[100%] rounded-md text-center h-[90px] px-2"
            type="text"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </section>
        <section className="text-sm">
          <label className=" font-bold">Episodes</label>
          <input
            className=" w-[100%] rounded-md text-center h-[40px] px-2"
            type="number"
            required
            value={episodes}
            onChange={(e) => setEpisodes(Number(e.target.value))}
          ></input>
        </section>
        {!isLoading && (
          <section className="flex justify-center">
            <button
              className="font-bold text-black rounded-md bg-[#68d8d6] shadow-md
          w-[50%] hover:w-[70%] transition-all p-1"
            >
              Submit
            </button>
          </section>
        )}
        {isLoading && (
          <section className="flex justify-center">
            <button
              className="font-bold text-black rounded-md bg-[#68d8d6] shadow-md
        w-[50%] hover:w-[70%] transition-all p-1"
              disabled
            >
              Updating...
            </button>
          </section>
        )}
      </form>
    </div>
  );
};

export default UpdateList;
