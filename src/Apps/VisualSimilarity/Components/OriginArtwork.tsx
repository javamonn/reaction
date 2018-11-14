import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

const OriginArtwork = ({ artwork }) => {
  return <div>{JSON.stringify(artwork)}</div>
}

export const OriginArtworkContainer = createFragmentContainer(
  OriginArtwork,
  graphql`
    fragment OriginArtwork_artwork on Artwork {
      id
      images {
        image_url
      }
    }
  `
)
