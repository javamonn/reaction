import { Button } from "@artsy/palette"
import { Input } from "Components/Input"
import { ErrorModal, ModalButton } from "Components/Modal/ErrorModal"
import { MockBoot } from "DevTools"
import { mount } from "enzyme"
import React from "react"
import { RelayProp } from "react-relay"
import { commitMutation as _commitMutation } from "react-relay"
import { UntouchedOfferOrder } from "../../../__tests__/Fixtures/Order"
import { TransactionSummary } from "../../Components/TransactionSummary"
import {
  initialOfferFailedCannotOffer,
  initialOfferSuccess,
} from "../__fixtures__/MutationResults"
import { OfferFragmentContainer as OfferRoute } from "../Offer"

const commitMutation = _commitMutation as any

jest.mock("react-relay", () => ({
  commitMutation: jest.fn(),
  createFragmentContainer: component => component,
}))

describe("Offer InitialMutation", () => {
  const getWrapper = someProps => {
    return mount(
      <MockBoot>
        <OfferRoute {...someProps} />
      </MockBoot>
    )
  }

  let testProps: any
  beforeEach(() => {
    testProps = {
      order: { ...UntouchedOfferOrder, id: "1234" },
      relay: { environment: {} } as RelayProp,
      router: { push: jest.fn() },
      mediator: { trigger: jest.fn() },
    } as any
  })

  it("renders", () => {
    const component = getWrapper(testProps)
    const input = component.find(Input)
    expect(input.text()).toContain("Your offer")
  })

  it("can receive input, which updates the transaction summary", () => {
    const component = getWrapper(testProps)
    const input = component.find(Input)
    const transactionSummary = component.find(TransactionSummary)

    expect(transactionSummary.text()).toContain("Your offer")

    input.props().onChange({ currentTarget: { value: "1" } } as any)
    expect(transactionSummary.update().text()).toContain("Your offer$1")

    input.props().onChange({ currentTarget: { value: "1.23" } } as any)
    expect(transactionSummary.update().text()).toContain("Your offer$1")

    input.props().onChange({ currentTarget: { value: "1023.23" } } as any)
    expect(transactionSummary.update().text()).toContain("Your offer$1,023")
  })

  describe("mutation", () => {
    const errorLogger = console.error

    beforeEach(() => {
      console.error = jest.fn() // Silences component logging.
      commitMutation.mockReset()
    })

    afterEach(() => {
      console.error = errorLogger
    })

    it("routes to shipping screen after mutation completes", () => {
      const component = getWrapper(testProps)
      const mockCommitMutation = commitMutation as jest.Mock<any>
      mockCommitMutation.mockImplementationOnce(
        (_environment, { onCompleted }) => {
          onCompleted(initialOfferSuccess)
        }
      )

      component.find(Button).simulate("click")

      expect(testProps.router.push).toHaveBeenCalledWith(
        "/orders/1234/shipping"
      )
    })

    it("shows the button spinner while loading the mutation", () => {
      const component = getWrapper(testProps)
      const mockCommitMutation = commitMutation as jest.Mock<any>
      mockCommitMutation.mockImplementationOnce(() => {
        const buttonProps = component
          .update() // We need to wait for the component to re-render
          .find("Button")
          .props() as any
        expect(buttonProps.loading).toBeTruthy()
      })

      component.find(Button).simulate("click")
    })

    it("shows an error modal when there is an error from the server", () => {
      const component = getWrapper(testProps)
      const mockCommitMutation = commitMutation as jest.Mock<any>
      mockCommitMutation.mockImplementationOnce(
        (_environment, { onCompleted }) => {
          onCompleted(initialOfferFailedCannotOffer)
        }
      )

      component.find(Button).simulate("click")

      const errorComponent = component.find(ErrorModal)
      expect(errorComponent.props().show).toBe(true)
      expect(errorComponent.text()).toContain("An error occurred")
      expect(errorComponent.text()).toContain(
        "Something went wrong. Please try again or contact orders@artsy.net."
      )

      component.find(ModalButton).simulate("click")
      expect(component.find(ErrorModal).props().show).toBe(false)
    })
  })
})

// import { Button } from "@artsy/palette"
// import { Input } from "Components/Input"
// import { ErrorModal, ModalButton } from "Components/Modal/ErrorModal"
// import { MockBoot, renderRelayTree } from "DevTools"
// import React from "react"
// import { graphql } from "react-relay"
// import { commitMutation as _commitMutation } from "react-relay"
// import { UntouchedOfferOrder } from "../../../__tests__/Fixtures/Order"
// import { TransactionSummary } from "../../Components/TransactionSummary"
// import { OfferFragmentContainer as OfferRoute } from "../Offer"

// import {
//   initialOfferFailedCannotOffer,
//   initialOfferSuccess,
// } from "../__fixtures__/MutationResults"

// jest.unmock("react-relay")

// const commitMutation = _commitMutation as any

// describe("Offer", () => {
//   let wrapper
//   beforeEach(async () => {
//     wrapper = await renderRelayTree({
//       Component: ({ order }: any) => (
//         <OfferRoute order={order} {...testProps} />
//       ),
//       query: graphql`
//         query OfferTestQuery {
//           order: ecommerceOrder(id: "unused") {
//             ...Offer_order
//           }
//         }
//       `,
//       wrapper: n => <MockBoot breakpoint="xs">{n}</MockBoot>,
//       mockResolvers: {
//         Order: () => UntouchedOfferOrder,
//       },
//     })
//   })

//   const testProps = {
//     order: { ...UntouchedOfferOrder, id: "1234" },
//     router: {
//       push: jest.fn(),
//     } as any,
//     route: {
//       onTransition: jest.fn(),
//     } as any,
//     relay: {
//       environment: {},
//     } as any,
//     mediator: {
//       trigger: jest.fn(),
//     } as any,
//   }

//   it("renders", () => {
//     const input = wrapper.find(Input)
//     expect(input.text()).toContain("Your offer")
//   })

//   it("can receive input, which updates the transaction summary", () => {
//     const input = wrapper.find(Input)
//     const transactionSummary = () => wrapper.find(TransactionSummary)

//     expect(transactionSummary().text()).toContain("Your offer—")

//     input.props().onChange({ currentTarget: { value: "1" } } as any)
//     wrapper.update()
//     expect(transactionSummary().text()).toContain("Your offer$1")

//     input.props().onChange({ currentTarget: { value: "1.23" } } as any)
//     wrapper.update()
//     expect(transactionSummary().text()).toContain("Your offer$1")

//     input.props().onChange({ currentTarget: { value: "1023.23" } } as any)
//     wrapper.update()
//     expect(transactionSummary().text()).toContain("Your offer$1,023")
//   })

//   describe("mutation", () => {
//     beforeEach(() => {
//       console.error = jest.fn() // Silences component logging.
//       commitMutation.mockReset()
//     })

//     it("routes to shipping screen after mutation completes", () => {
//       const mockCommitMutation = commitMutation as jest.Mock<any>
//       mockCommitMutation.mockImplementationOnce(
//         (_environment, { onCompleted }) => {
//           onCompleted(initialOfferSuccess)
//         }
//       )

//       wrapper.find(Button).simulate("click")

//       expect(testProps.router.push).toHaveBeenCalledWith(
//         "/orders/1234/shipping"
//       )
//     })

//     it("shows the button spinner while loading the mutation", () => {
//       const mockCommitMutation = commitMutation as jest.Mock<any>
//       mockCommitMutation.mockImplementationOnce(() => {
//         const buttonProps = wrapper
//           .update() // We need to wait for the component to re-render
//           .find("Button")
//           .props() as any
//         expect(buttonProps.loading).toBeTruthy()
//       })

//       wrapper.find(Button).simulate("click")
//     })

//     it("shows an error modal when there is an error from the server", () => {
//       const mockCommitMutation = commitMutation as jest.Mock<any>
//       mockCommitMutation.mockImplementationOnce(
//         (_environment, { onCompleted }) => {
//           onCompleted(initialOfferFailedCannotOffer)
//         }
//       )

//       wrapper.find(Button).simulate("click")

//       const errorComponent = wrapper.find(ErrorModal)
//       expect(errorComponent.props().show).toBe(true)
//       expect(errorComponent.text()).toContain("An error occurred")
//       expect(errorComponent.text()).toContain(
//         "Something went wrong. Please try again or contact orders@artsy.net."
//       )

//       wrapper.find(ModalButton).simulate("click")
//       expect(wrapper.find(ErrorModal).props().show).toBe(false)
//     })
//   })
// })