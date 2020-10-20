import React from "react";

import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

import * as Styles from "./styles";

import { addAddress } from "features/addresses/addressesSlice";

const FormComponent = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addAddress(values.address));
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={() => {}}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            form.reset();
          }}
        >
          <Styles.FormContainer>
            <Field name="address">
              {({ input, meta }) => (
                <>
                  <Styles.Input
                    type="text"
                    {...input}
                    placeholder="Enter address"
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>

            <Styles.Button type="submit">Add address</Styles.Button>
          </Styles.FormContainer>
        </form>
      )}
    />
  );
};

export default FormComponent;
