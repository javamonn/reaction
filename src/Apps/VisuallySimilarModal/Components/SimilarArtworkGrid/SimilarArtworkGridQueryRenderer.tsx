import { Flex, Spinner } from "@artsy/palette"
import { SimilarArtworkGridQueryRendererQuery } from "__generated__/SimilarArtworkGridQueryRendererQuery.graphql"
import { ContextConsumer } from "Artsy"
import React from "react"
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay"
import { SimilarArtworkGridContainer as SimilarArtworkGrid } from "./SimilarArtworkGrid"

const SIMILARITY_URL = "http://localhost:8000"

class SimilarArtworkGridQueryRenderer extends React.Component<any> {
  state = { similarArtworkIDs: null }

  componentDidMount() {
    const { artwork } = this.props
    fetch(`${SIMILARITY_URL}/similarity-by-artwork-id/${artwork.id}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          similarArtworkIDs: data.map(({ filename }) => filename),
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({ similarArtworkIDs: [] })
      })
  }

  renderSpinner() {
    return (
      <Flex
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        flexBasis="fill"
        height={530}
        position="relative"
      >
        <Spinner />
      </Flex>
    )
  }

  render() {
    const { similarArtworkIDs } = this.state

    if (!similarArtworkIDs) {
      return this.renderSpinner()
    } else if (similarArtworkIDs.length === 0) {
      // TODO: empty state
      return null
    } else {
      return (
        <ContextConsumer>
          {({ relayEnvironment }) => (
            <QueryRenderer<SimilarArtworkGridQueryRendererQuery>
              environment={relayEnvironment}
              query={graphql`
                query SimilarArtworkGridQueryRendererQuery(
                  $artworkIDs: [String]
                ) {
                  artworks(slugs: $artworkIDs) {
                    ...SimilarArtworkGrid_artworks
                  }
                }
              `}
              variables={{ artworkIDs: similarArtworkIDs }}
              render={({ props }) => {
                if (props) {
                  return <SimilarArtworkGrid artworks={props.artworks} />
                } else {
                  return this.renderSpinner()
                }
              }}
            />
          )}
        </ContextConsumer>
      )
    }
  }
}

export const SimilarArtworkGridContainer = createFragmentContainer(
  SimilarArtworkGridQueryRenderer,
  graphql`
    fragment SimilarArtworkGridQueryRenderer_artwork on Artwork {
      id
    }
  `
)
