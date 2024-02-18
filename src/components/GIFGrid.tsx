import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface images {
  url: string;
  width: string;
  height: string;
}

interface GIF {
  id: string;
  title: string;
  images: images;
}

interface FetchGIFResponse {
  data: GIF[];
}

const GIFGrid = () => {
  const [GIFs, setGIFs] = useState<GIF[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGIFResponse>(
        `/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_KEY}&limit=${10}`
      )
      .then((res) => setGIFs(res.data.data))
      .catch((err) => setError(err.message));
  },[]);
  return (
    <ul>
      {GIFs.map((gif) => (
        <li key={gif.id}>{gif.title}</li>
      ))}
    </ul>
  );
};

export default GIFGrid;
