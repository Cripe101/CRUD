import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { description, title, episodes };
    setIsLoading(true);

    const res = await fetch("http://localhost:8000/datas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setIsLoading(false);

    if (res.ok) {
      history.push("/");
    } else {
      alert(`error${res.status}`);
    }
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h2>Create New List</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border p-20 rounded-xl"
      >
        <label>Anime Title</label>
        <input
          className="border-2 border-black-[.5] w-[100%] h-[100%] hover:border-black rounded-xl text-center"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Anime Description</label>
        <textarea
          className="border-2 border-black-[.5] w-[100%] hover:border-black rounded-xl text-center"
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Episodes</label>
        <input
          className="border-2 border-black-[.5] w-[100%] hover:border-black rounded-xl text-center"
          type="number"
          required
          value={episodes}
          onChange={(e) => setEpisodes(Number(e.target.value))}
        ></input>
        {!isLoading && <button>Submit</button>}
        {isLoading && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default CreateList;
