import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import CopyrightBar from "./components/CopyrightBar";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav"
               "main"
               "copyright"`,
        lg: `"nav nav"
             "aside main"
             "copyright copyright"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: " 200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading />
          <HStack spacing={4} marginBottom={4}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
      <GridItem area="copyright">
        <CopyrightBar />
      </GridItem>
    </Grid>
  );
}

export default App;
