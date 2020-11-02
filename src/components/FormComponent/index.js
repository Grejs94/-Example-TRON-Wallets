import React from "react";
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
  setMessageSuccess,
  setMessageFailed,
  setMessagerepeats,
  setMessageAddAddresses,
  addAddress,
} from "features/addresses/addressesSlice";
import {
  fetchAllWallets,
  clearSortedData,
} from "features/wallets/walletsSlice";

const FormComponent = () => {
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

  const onSubmit = async (values) => {
    const wallet = await API.wallet.fetchWallet(values.address);

    if (!wallet.create_time) {
      dispatch(setMessageFailed());
      return;
    }

    let walletAllreadyAdded = false;

    addresses.forEach((element) => {
      if (element === wallet.address) {
        walletAllreadyAdded = true;
      }
    });

    if (walletAllreadyAdded) {
      dispatch(setMessagerepeats());
      return;
    } else {
      dispatch(addAddress(values.address));
      dispatch(setMessageSuccess());
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
          }}
        >
          <Styles.FormContainer>
            <Field name="address">
              {({ input, meta }) => (
                <>
                  <TextField
                    size="small"
                    styles={{ fontSize: "35px" }}
                    className={classes.input}
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
              size="small"
              variant="contained"
              color="primary"
              type="submit"
              className={classes.margin}
            >
              Add address
            </Button>
            <Button
              size="small"
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
