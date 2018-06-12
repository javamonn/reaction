import React from "react"
import { Formik, FormikProps } from "formik"
import {
  FormContainer as Form,
  Footer,
  MobileContainer,
  MobileHeader,
  MobileInnerWrapper,
  MobileSubmitButton,
} from "Components/Authentication/commonElements"
import Input from "Components/Input"
import { FormComponentType, InputValues } from "../Types"
import { ResetPasswordValidator } from "../Validators"

export const MobileResetPasswordForm: FormComponentType = props => {
  return (
    <Formik
      initialValues={props.values}
      onSubmit={props.handleSubmit}
      validationSchema={ResetPasswordValidator}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        isValid,
      }: FormikProps<InputValues>) => {
        return (
          <MobileContainer>
            <MobileInnerWrapper>
              <Form onSubmit={handleSubmit} height={260}>
                <MobileHeader>Reset your password</MobileHeader>
                <Input
                  block
                  quick
                  error={errors.email}
                  placeholder="Enter your email address"
                  name="email"
                  label="Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <MobileSubmitButton disabled={isSubmitting}>
                  Next
                </MobileSubmitButton>
                <Footer
                  handleTypeChange={type => (window.location.href = "/" + type)}
                  mode="reset_password"
                />
              </Form>
            </MobileInnerWrapper>
          </MobileContainer>
        )
      }}
    </Formik>
  )
}
