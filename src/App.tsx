import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import Emoji from "./components/Emoji";


export interface gameQuery{
  genre : Genre | null;
  platform: Platform | null;
  sortOrder : string;
  searchText : string;
}

function App() {
  const [gameQuery, setgameQuery] = useState<gameQuery>({} as gameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(searchText)=> setgameQuery({...gameQuery, searchText}) } />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="16px">
          <GenreList selectedGenre = {gameQuery.genre} onSelectedGenre={(genre) => setgameQuery({...gameQuery, genre}) } />
        </GridItem>
      </Show>
      <GridItem area="main">
      <Box paddingLeft ={2}>
        <GameHeading GameQuery={gameQuery}/>
        <Flex  marginBottom={5}>
        <Box marginRight={2}>
          <PlatformSelector  selectedPlatform ={gameQuery.platform} onSelectedPlatform={(platform) =>setgameQuery({...gameQuery, platform})}/>
      
           </Box>
           <SortSelector sortOrder ={gameQuery.sortOrder} onSelectSort={(sortOrder) => setgameQuery({...gameQuery, sortOrder}) }/>
          </Flex>
      </Box>
        <GameGrid GameQuery={gameQuery} /> 
      </GridItem>
    </Grid>
  );
}

export default App;
