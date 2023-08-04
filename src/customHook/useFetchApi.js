import { useEffect, useState } from "react";

const useFetchApi = (url, callback) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const dataSheet = await res.json();

      if (callback) {
        setData(callback(dataSheet));
      } else {
        setData(dataSheet);
      }

      setError("");
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
  };
};

export default useFetchApi;
