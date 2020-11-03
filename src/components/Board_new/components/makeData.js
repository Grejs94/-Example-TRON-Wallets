const newWallet = (wallet) => {
  let address = `${wallet.address ? wallet.address : "unnown"}`;
  let balance = `${wallet.balance ? wallet.balance : "unnown"}`;
  let create_time = `${wallet.create_time ? wallet.create_time : "unnown"}`;
  let latest_opration_time = `${
    wallet.latest_opration_time ? wallet.latest_opration_time : "unnown"
  }`;

  return {
    address: address,
    balance: balance,
    create_time: create_time,
    latest_opration_time: latest_opration_time,
  };
};

export default function makeData(wallets) {
  const makeDataLevel = (wallets) => {
    return wallets.map((wallet) => {
      return {
        ...newWallet(wallet),
      };
    });
  };

  return makeDataLevel(wallets);
}
