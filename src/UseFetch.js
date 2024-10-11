import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [datas, setDatas] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const abortCont = new AbortController();
    // { signal: abortCont.signal }

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data");
        }
        return res.json();
      })
      .then((datas) => {
        setDatas(datas);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        // if (err.name === 'AbortError') {
        //     console.log("Fetch Aborted");
        // } else {
        //     setIsLoading(false);
        //     setError(err.message);
        // }
        setIsLoading(false);
        setError(err.message);
      });

    // return () => abortCont.abort();
  }, [url]);

  return { datas, isLoading, error };
};

export default UseFetch;
