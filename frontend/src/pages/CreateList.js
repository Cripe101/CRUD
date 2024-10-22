import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateList = () => {
  const [src, setSrc] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datas = { description, title, episodes, src, status };
    setIsLoading(true);

    const res = await fetch("http://localhost:8000/datas", {
      method: "POST",
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
    <div className="flex flex-col items-center p-20 text-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-12 rounded-md shadow-xl bg-[#eff7f6] w-[450px]"
      >
        <h2 className="font-bold">Create List</h2>
        <input
          type="text"
          className=" w-[100%] h-[40px] rounded-md text-center text-black "
          required
          placeholder="Image Source Link"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        />
        <input
          className=" w-[100%] h-[40px] rounded-md text-center text-black "
          required
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          className=" w-[100%] h-[90px] rounded-md text-center text-black "
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          className=" w-[100%] h-[40px] rounded-md text-center text-black "
          type="number"
          placeholder="Episodes"
          required
          value={episodes}
          onChange={(e) => setEpisodes(Number(e.target.value))}
        ></input>
        <select
          className=" w-[100%] rounded-md text-center h-[40px] px-2 outline-none"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Watching</option>
          <option>Finished</option>
          <option>Waiting</option>
        </select>
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
              Adding...
            </button>
          </section>
        )}
      </form>
    </div>
  );
};

export default CreateList;
