import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";

import * as Styles from "./styles";

import API from "API";
import {
  selectValidatedSuccess,
  selectMessage,
  selectAddresses,
  addAddress,
  setMessageSuccess,
  setMessageFailed,
  setMessagerepeats,
} from "features/addresses/addressesSlice";
import { fetchAllWallets } from "features/wallets/walletsSlice";

const FormComponent = () => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const validatedStatus = useSelector(selectValidatedSuccess);
  const addresses = useSelector(selectAddresses);

  const handleFetchWallets = (addresses) => {
    dispatch(fetchAllWallets(addresses));
  };

  const validateAddress = async (values) => {
    const wallet = await API.wallet.fetchWallet(values.address);
    if (wallet.create_time) {
      let walletAllreadyAdded = false;
      const workingAddresses = addresses;
      workingAddresses.forEach((element) => {
        if (element.address === wallet.address) {
          walletAllreadyAdded = true;
        }
      });

      if (walletAllreadyAdded) {
        dispatch(setMessagerepeats());
      } else {
        const newValues = { ...values, id };
        dispatch(setMessageSuccess());
        dispatch(addAddress(newValues));
        setId(id + 1);
      }
    } else {
      dispatch(setMessageFailed());
    }
  };

  const onSubmit = (values) => {
    if (values.address) {
      validateAddress(values);
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
            <Styles.Button
              type="button"
              onClick={() => handleFetchWallets(addresses)}
            >
              Generate board
            </Styles.Button>
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
