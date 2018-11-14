// import { ContextProps } from "Artsy"
import { RouteConfig } from "found"
import * as React from "react"
import { graphql } from "react-relay"
import { OriginArtworkContainer as OriginArtwork } from "./Components/OriginArtwork"
import { SimilarArtworkGridContainer as SimilarArtworkGrid } from "./Components/SimilarArtworkGrid/SimilarArtworkGridQueryRenderer"

export const routes: RouteConfig[] = [
  {
    path: "/visual_similarity/:artworkID",
    Component: ({ artwork }) => (
      <>
        <OriginArtwork artwork={artwork} />
        {/* @ts-ignore */}
        <SimilarArtworkGrid artwork={artwork} />
      </>
    ),
    render: ({ Component, props }) => {
      if (Component && props) {
        return <Component {...props} />
      }
    },
    query: graphql`
      query routes_VisualSimilarityQuery($artworkID: String!) {
        artwork(id: $artworkID) {
          ...OriginArtwork_artwork
          ...SimilarArtworkGridQueryRenderer_artwork
        }
      }
    `,
  },
]
