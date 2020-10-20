import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";

import * as Styles from "./styles";

import API from "API";
import {
  selectValidatedSuccess,
  selectMessage,
  addAddress,
  setMessageSuccess,
  setMessageFailed,
} from "features/addresses/addressesSlice";

const FormComponent = () => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const validatedStatus = useSelector(selectValidatedSuccess);

  const showSuccess = () => {
    dispatch(setMessageSuccess());
  };

  const showFailure = () => {
    dispatch(setMessageFailed());
  };

  const validateAddress = async (values, showSuccess, showFailure) => {
    console.log(values);
    const wallet = await API.wallet.fetchWallet(values.address);
    // console.log(wallet.create_time);
    if (wallet.create_time) {
      const newValues = { ...values, id };

      showSuccess();
      dispatch(addAddress(newValues));
      setId(id + 1);
    } else {
      showFailure();
    }
  };

  const onSubmit = (values) => {
    if (values.address) {
      validateAddress(values, showSuccess, showFailure);
    }
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
          <Styles.ValidationContainer>
            <Styles.ValidationMessage
              successColor={validatedStatus ? "success" : null}
            >
              {message}
            </Styles.ValidationMessage>
          </Styles.ValidationContainer>
        </form>
      )}
    />
  );
};

export default FormComponent;
