import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controller = new AbortController();

  useEffect(() => {
    apiClient
      .get<FetchGenreResponse>("/genres")
      .then((res) => setGenres(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);

  return { genres, error };
};

export default useGenres;
