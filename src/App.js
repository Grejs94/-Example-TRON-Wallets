import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectWallet, fetchAllWallets } from "features/wallet/walletSlice";

import { walletList } from "assets";

import * as Styles from "./styles";

import { ButtonsContainer, AddressContainer } from "components";

function App() {
  const dispatch = useDispatch();
  const wallet = useSelector(selectWallet);
  console.log(wallet);

  const [address, setAddress] = useState(0);

  const handleAddAdress = () => {
    if (address < wallet.length) {
      setAddress(address + 1);
    }
  };

  const handleRemoveAdress = () => {
    if (address > 0) {
      setAddress(address - 1);
    }
  };

  useEffect(() => {
    dispatch(fetchAllWallets(walletList));
  }, []);

  return (
    <Styles.Wrapper className="App">
      <ButtonsContainer
        handleAddAdress={() => handleAddAdress()}
        handleRemoveAdress={() => handleRemoveAdress()}
      />
      <AddressContainer address={address} />
      {address}
    </Styles.Wrapper>
  );
}

export default App;
