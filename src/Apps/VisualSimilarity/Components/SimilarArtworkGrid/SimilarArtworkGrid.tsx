import { Box } from "@artsy/palette"
import { ArtworkGrid } from "Components/ArtworkGrid"
import { tail } from "lodash"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import styled from "styled-components"

const GridContainer = styled(Box)`
  overflow-y: scroll;
`

const SimilarArtworkGrid = ({ artworks }) => {
  const artworksConnection = {
    edges: tail(artworks).map(artwork => ({ node: artwork })),
  }
  return (
    <GridContainer>
      <ArtworkGrid artworks={artworksConnection} columnCount={2} />
    </GridContainer>
  )
}

export const SimilarArtworkGridContainer = createFragmentContainer(
  SimilarArtworkGrid,
  graphql`
    fragment SimilarArtworkGrid_artworks on Artwork @relay(plural: true) {
      id
      __id
      image {
        aspect_ratio
      }
      ...GridItem_artwork
    }
  `
)
