import { Flex, Serif, Spacer } from "@artsy/palette"
import { sortBy, take, toPairs } from "lodash"
import React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import * as sharify from "sharify"

const GRAVITY_ENDPOINT = "https://stagingapi.artsy.net/api"

class Header extends React.Component {
  state = { genes: null }

  componentDidMount() {
    const {
      artwork: { id },
      user,
    } = this.props
    console.log(sharify.data)
    fetch(`${GRAVITY_ENDPOINT}/v1/artwork/${id}/genome`, {
      headers: {
        "X-XAPP-TOKEN": sharify.data.ARTSY_XAPP_TOKEN,
        "X-ACCESS-TOKEN": user.accessToken,
      },
    })
      .then(res => res.json())
      .then(data => {
        const genes = sortBy(toPairs(data.genes), ([name, score]) => score).map(
          ([name]) => name
        )
        this.setState({ genes })
      })
  }

  render() {
    const { genes } = this.state
    const {
      artwork: { title, date },
    } = this.props
    return (
      <>
        <Serif size="6">Similar to:</Serif>
        <Serif size="6">
          <em>{title}</em>, {date}
        </Serif>
        {genes && (
          <Flex flexDirection="row" mt={25}>
            {take(genes, 5).map((name, idx, arr) => {
              return (
                <React.Fragment key={name}>
                  <a href={`/gene/${name.toLowerCase().replace(" ", "-")}`}>
                    <Serif size="2">{name}</Serif>
                  </a>
                  {idx < arr.length - 1 && <Spacer width={12} />}
                </React.Fragment>
              )
            })}
          </Flex>
        )}
      </>
    )
  }
}

export const HeaderContainer = createFragmentContainer(
  Header,
  graphql`
    fragment Header_artwork on Artwork {
      id
      title
      date
    }
  `
)
