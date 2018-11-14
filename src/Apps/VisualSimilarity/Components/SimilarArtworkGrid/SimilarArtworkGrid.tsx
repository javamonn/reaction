import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

export const SimilarArtworkGrid = ({ artworks }) => (
  <div>{JSON.stringify(artworks)}</div>
)

export const SimilarArtworkGridContainer = createFragmentContainer(
  SimilarArtworkGrid,
  graphql`
    fragment SimilarArtworkGrid_artworks on Artwork @relay(plural: true) {
      id
      images {
        image_url
      }
    }
  `
)
