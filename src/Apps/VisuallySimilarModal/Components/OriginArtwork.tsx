import { Box } from "@artsy/palette"
import ArtworkGridItem from "Components/Artwork/GridItem"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import styled from "styled-components"

const GridItemContainer = styled(Box)`
  flex-shrink: 0;
  max-height: 530px;
`

const OriginArtwork = ({ artwork }) => {
  return (
    <ArtworkGridItem
      artwork={artwork}
      useRelay
      style={{ minWidth: 320, width: 320, maxHeight: 450, height: 450 }}
    />
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
