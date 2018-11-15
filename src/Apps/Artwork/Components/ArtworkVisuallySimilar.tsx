import { BorderBox, Flex, Image, Sans, Spacer, Spinner } from "@artsy/palette"
import { ArtworkVisiuallySimilar_artworks } from "__generated__/ArtworkVisuallySimilar_artwork.graphql"
import { ArtworkVisuallySimilarQuery } from "__generated__/ArtworkVisuallySimilarQuery.graphql"
import { ContextConsumer } from "Artsy"
import colors from "Assets/Colors"
import Icon from "Components/Icon"
import { tail, take } from "lodash"
import React from "react"
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay"
import styled from "styled-components"

const SIMILARITY_URL = "http://localhost:8000"

const Link = styled.a`
  text-decoration: none;
`

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`

const ArtworkVisuallySimilar = ({ artworks, artworkID }) => {
  return (
    <Link href={`/visual_similarity/${artworkID}`}>
      <BorderBox hover>
        <Flex justifyContent="space-between" flexDirection="row" flexGrow={1}>
          <Flex justifyContent="center" alignItems="center" flexDirection="row">
            <Sans size="3" weight="medium" color="black">
              Visually similar
            </Sans>
            <Spacer width={16} />
            {artworks &&
              take(tail(artworks), 4).map(
                ({ image: { image_url } }, idx, arr) => (
                  <React.Fragment key={image_url}>
                    <Image
                      src={image_url.replace(":version", "small")}
                      width="30px"
                      height="30px"
                    />
                    {idx < arr.length - 1 && <Spacer width={8} />}
                  </React.Fragment>
                )
              )}
          </Flex>
          <Icon name="chevron-right" fontSize="18px" color={colors.black} />
        </Flex>
      </BorderBox>
    </Link>
  )
}

export const ArtworkVisuallySimilarContainer = createFragmentContainer(
  ArtworkVisuallySimilar,
  graphql`
    fragment ArtworkVisuallySimilar_artworks on Artwork @relay(plural: true) {
      image {
        image_url
        versions
      }
    }
  `
)

export class ArtworkVisuallySimilarQueryRenderer extends React.Component<{
  artworkID: string
}> {
  state = { similarArtworkIDs: null }

  componentDidMount() {
    const { artworkID } = this.props
    fetch(`${SIMILARITY_URL}/similarity-by-artwork-id/${artworkID}.json`)
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
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  render() {
    const { similarArtworkIDs } = this.state
    const { artworkID } = this.props
    if (!similarArtworkIDs) {
      return this.renderSpinner()
    } else if (similarArtworkIDs.length === 0) {
      // TODO: handle empty state
      return null
    } else {
      return (
        <ContextConsumer>
          {({ relayEnvironment }) => {
            console.log("relayEnvironment", relayEnvironment)
            return (
              <QueryRenderer<ArtworkVisuallySimilarQuery>
                environment={relayEnvironment}
                variables={{ artworkIDs: similarArtworkIDs }}
                query={graphql`
                  query ArtworkVisuallySimilarQuery($artworkIDs: [String]) {
                    artworks(slugs: $artworkIDs) {
                      ...ArtworkVisuallySimilar_artworks
                    }
                  }
                `}
                render={({ props }) => {
                  if (props) {
                    return (
                      <ArtworkVisuallySimilarContainer
                        {...props}
                        artworkID={artworkID}
                      />
                    )
                  } else {
                    return this.renderSpinner()
                  }
                }}
              />
            )
          }}
        </ContextConsumer>
      )
    }
  }
}
