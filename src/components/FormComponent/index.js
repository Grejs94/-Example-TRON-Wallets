import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field } from "react-final-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import API from "API";

import { styledComponents as Styles, useStyles } from "./styles";
import {
  selectValidatedSuccess,
  selectMessage,
  selectAddresses,
  addAddress,
  setMessageSuccess,
  setMessageFailed,
  setMessagerepeats,
  setMessageAddAddresses,
} from "features/addresses/addressesSlice";
import {
  fetchAllWallets,
  clearSortedData,
} from "features/wallets/walletsSlice";

const FormComponent = () => {
  const [id, setId] = useState(0);
  const dispatch = useDispatch();
  const message = useSelector(selectMessage);
  const validatedStatus = useSelector(selectValidatedSuccess);
  const addresses = useSelector(selectAddresses);
  const classes = useStyles();

  const handleFetchWallets = (addresses) => {
    if (addresses.length < 1) {
      dispatch(setMessageAddAddresses());
    } else {
      dispatch(fetchAllWallets(addresses));
      dispatch(clearSortedData());
    }
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
                  <TextField
                    className={classes.margin}
                    id="standard-search"
                    label="Enter Adresses"
                    type="search"
                    {...input}
                    placeholder="Enter address"
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.margin}
            >
              Add address
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={() => handleFetchWallets(addresses)}
              className={classes.margin}
            >
              Generate board
            </Button>
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
