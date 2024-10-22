import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  if (error) return <Text>{error}</Text>;

  return (
    <UnorderedList>
      {games.map((game) => (
        <ListItem key={game.id}>{game.name}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default GameGrid;
