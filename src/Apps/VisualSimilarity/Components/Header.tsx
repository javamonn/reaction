import { Serif } from "@artsy/palette"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"

const Header = ({ artwork: { title, date } }) => (
  <>
    <Serif size="6">Similar to:</Serif>
    <Serif size="6">
      <em>{title}</em>, {date}
    </Serif>
  </>
)

export const HeaderContainer = createFragmentContainer(
  Header,
  graphql`
    fragment Header_artwork on Artwork {
      title
      date
    }
  `
)
