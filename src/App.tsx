import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import GIFGrid from "./components/GIFGrid";

function App() {
  useEffect(() => {
    console.log(import.meta.env.VITE_GIPHY_KEY);
  });
  return (
    <Grid
      templateAreas={`"nav" "filter" "images" "trending" "notableCollections" "topCollector"`}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="filter" bg="gold">
        Filters
      </GridItem>
      <GridItem area="images" bg="coral">
        images
      </GridItem>
      <GridItem area="trending" bg="green">
        Trending
      </GridItem>
      <GridItem area="notableCollections" bg="bleu">
        Notable collections
      </GridItem>
      <GridItem area="topCollector" bg="purple">
        <GIFGrid/>
      </GridItem>
    </Grid>
  );
}

export default App;
