import { Spinner, Theme } from "@artsy/palette"
import { VisualSimilarityAppQuery } from "__generated__/VisualSimilarityAppQuery.graphql"
import { ContextConsumer, ContextProps } from "Artsy"
import { RouteConfig } from "found"
import * as React from "react"
import { ComponentClass, StatelessComponent } from "react"
import { graphql } from "react-relay"
import { VisualSimilarity } from "./VisualSimilarityApp"

interface Props extends ContextProps {
  artworkID: string
}

const SIMILARITY_URL = "http://localhost:8000"

export class VisualSimilarityApp extends Component<Props> {
  state = { similarArtworkIDs: [] }

  componentDidMount() {
    const { artworkID } = this.props
    fetch(`${SIMILARITY_URL}/similarity-by-artwork-id/${artworkID}.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          similarArtworkIDs: data.map(({ filename }) => filename),
        })
      })
  }

  renderSpinner() {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    )
  }

  renderEmptyState() {
    // TODO: implement in cases where we have not indexed artwork
    return null
  }

  render() {
    const { artworkID } = this.props
    const { similarArtworkIDs } = this.state

    if (!similarArtworkIDs) {
      return this.renderSpinner()
    } else if (similarArtworkIDs.length === 0) {
      return this.renderEmptyState()
    } else {
      return (
        <Theme>
          <ContextConsumer>
            {({ relayEnvironment }) => {
              return (
                <QueryRenderer<VisualSimilarityAppQuery>
                  environment={relayEnvironment}
                  query={graphql`
                    query VisualSimilarityAppQuery($artworkIDs: [String]) {
                      artworks(slugs: $artworkIDs) {
                        id
                        images {
                          image_url
                        }
                      }
                    }
                  `}
                  variables={{ artworkIDs: similarArtworkIDs }}
                  render={({ props }) => {
                    if (!props) {
                      return this.renderSpinner()
                    } else {
                      console.log("loaded", props)
                      return this.renderSpinner()
                    }
                  }}
                />
              )
            }}
          </ContextConsumer>
        </Theme>
      )
    }
  }
}
