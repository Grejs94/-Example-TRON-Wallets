import React from "react";

import * as Styles from "./styles";

const CorrectAddresses = () => {
  const CreateDevModeAddressesList = () =>
    [
      "TGmcz6UMqeTUoNryw4LcPeTWmo1DWrxRUK",
      "TSFKJsiJrt6bUTmxS1F1Fmv6UUYdGVB9Ws",
      "TN1nWMYqhnqrBXPMH1ECYouVaafRkYxhNb",
      "TCFQhzJgXJnn56sqJV38H8c5YAwELZugvz",
      "TUv34RrPNY2qTNHZ9q4mLc9AuUu9Tpy3Jg",
    ].map((address) => (
      <Styles.AddressItem key={address}>{address}</Styles.AddressItem>
    ));

  return (
    <div>
      <p>Correct Addresses (dev mode only)</p>
      {CreateDevModeAddressesList()}
    </div>
  );
};

export default CorrectAddresses;
