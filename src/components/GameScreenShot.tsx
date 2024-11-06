import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data: files, isLoading, error } = useScreenShots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return files?.results ? (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {files.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenShot;
