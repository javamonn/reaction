import { Box, Flex, Spacer, Spinner } from "@artsy/palette"
import { VisuallySimilarModalQueryRendererQuery } from "__generated__/VisuallySimilarModalQueryRendererQuery.graphql"
import { ContextConsumer } from "Artsy"
import * as React from "react"
import { graphql, QueryRenderer } from "react-relay"
import styled from "styled-components"
import { HeaderContainer as Header } from "./Components/Header"
import { OriginArtworkContainer as OriginArtwork } from "./Components/OriginArtwork"
import { SimilarArtworkGridContainer as SimilarArtworkGrid } from "./Components/SimilarArtworkGrid/SimilarArtworkGridQueryRenderer"

const SpinnerContainer = styled.div`
  height: 530px;
`

export const VisuallySimilarModalQueryRenderer = ({ artworkID }) => {
  return (
    <ContextConsumer>
      {({ relayEnvironment, user }) => {
        return (
          <QueryRenderer<VisuallySimilarModalQueryRendererQuery>
            environment={relayEnvironment}
            variables={{ artworkID }}
            query={graphql`
              query VisuallySimilarModalQueryRendererQuery(
                $artworkID: String!
              ) {
                artwork(id: $artworkID) {
                  ...Header_artwork
                  ...OriginArtwork_artwork
                  ...SimilarArtworkGridQueryRenderer_artwork
                }
              }
            `}
            render={({ props }) => {
              if (!props && true) {
                return (
                  <SpinnerContainer>
                    <Spinner />
                  </SpinnerContainer>
                )
              }
              return (
                <Flex flexDirection="column">
                  <Box ml={42} mt={35}>
                    <Header artwork={props.artwork} user={user} />
                  </Box>
                  <Spacer height={25} />
                  <Flex flexDirection="row" mx={42}>
                    <OriginArtwork artwork={props.artwork} />
                    <Spacer width={100} />
                    <SimilarArtworkGrid artwork={props.artwork} />
                  </Flex>
                </Flex>
              )
            }}
          />
        )
      }}
    </ContextConsumer>
  )
}
