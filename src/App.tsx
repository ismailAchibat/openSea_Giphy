import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import GIFGrid from "./components/GIFGrid";

function App() {
  return (
    <Grid
      templateAreas={`"nav" "filter" "images" "trending" "notableCollections" "topCollector"`}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="trending">
        <GIFGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
