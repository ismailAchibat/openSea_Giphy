import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface NFT {
  identifier: string;
  name: string;
  image_url: string;
}

interface FetchNFTsResponse {
  nft: NFT[];
}

const NFTGrid = () => {
  const [NFTs, setNFTs] = useState<NFT[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchNFTsResponse>(
        "/chain/arbitrum/contract/address/nfts/identifier"
      )
      .then((res) => setNFTs(res.data.nft))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <ul>
      {NFTs.map((nft) => (
        <li key={nft.identifier}>{nft.name}</li>
      ))}
    </ul>
  );
};

export default NFTGrid;
