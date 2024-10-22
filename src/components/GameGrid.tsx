import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

interface Game {
  id: number;
  slug: string;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/fgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  if (error) return <Text>{error}</Text>;

  return (
    <UnorderedList>
      {games.map((game) => (
        <ListItem>{game.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GameGrid;
