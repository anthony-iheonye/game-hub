import useGenres from "../hooks/useGenres";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error } = useGenres();

  if (error) return <Text>{error}</Text>;

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
