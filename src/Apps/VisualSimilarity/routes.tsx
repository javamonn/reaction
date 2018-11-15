import { Box, Flex, Spacer } from "@artsy/palette"
import { RouteConfig } from "found"
import * as React from "react"
import { graphql } from "react-relay"
import { HeaderContainer as Header } from "./Components/Header"
import { OriginArtworkContainer as OriginArtwork } from "./Components/OriginArtwork"
import { SimilarArtworkGridContainer as SimilarArtworkGrid } from "./Components/SimilarArtworkGrid/SimilarArtworkGridQueryRenderer"

export const routes: RouteConfig[] = [
  {
    path: "/visual_similarity/:artworkID",
    Component: ({ artwork }) => (
      <Flex flexDirection="column">
        <Box mx={42}>
          <Header artwork={artwork} />
        </Box>
        <Spacer height={25} />
        <Flex flexDirection="row" maxWidth={1024} mx={42}>
          <OriginArtwork artwork={artwork} />
          <Spacer width={100} />
          <SimilarArtworkGrid artwork={artwork} />
        </Flex>
      </Flex>
    ),
    render: ({ Component, props }) => {
      if (Component && props) {
        return <Component {...props} />
      }
    },
    query: graphql`
      query routes_VisualSimilarityQuery($artworkID: String!) {
        artwork(id: $artworkID) {
          ...Header_artwork
          ...OriginArtwork_artwork
          ...SimilarArtworkGridQueryRenderer_artwork
        }
      }
    `,
  },
]
