import { Box } from "@artsy/palette"
import ArtworkGridItem from "Components/Artwork/GridItem"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import styled from "styled-components"

const GridItemContainer = styled(Box)`
  flex-shrink: 0;
`

const OriginArtwork = ({ artwork }) => {
  return (
    <GridItemContainer width={380}>
      <ArtworkGridItem artwork={artwork} useRelay />
    </GridItemContainer>
  )
}

export const OriginArtworkContainer = createFragmentContainer(
  OriginArtwork,
  graphql`
    fragment OriginArtwork_artwork on Artwork {
      ...GridItem_artwork
    }
  `
)
