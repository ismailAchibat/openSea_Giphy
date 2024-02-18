import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import GIFCardContainer from "./GIFCardContainer";
import GIFCard from "./GIFCard";

export interface GIF {
  id: string;
  title: string;
  url: string;
  embed_url: string;
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
        `/gifs/trending?api_key=${import.meta.env.VITE_GIPHY_KEY}&limit=10 `
      )
      .then((res) => setGIFs(res.data.data))
      .catch((err) => setError(err.message));
  }, [apiClient, setError, setGIFs]);

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
      padding={10}
      spacing={3}
    >
      {GIFs.map((gif) => (
        <GIFCardContainer key={gif.id}>
          <GIFCard GIF={gif} />
        </GIFCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GIFGrid;
