const newWallet = (wallet) => ({
  address: `${wallet.address ? wallet.address : "unnown"}`,
  balance: `${wallet.balance ? wallet.balance : "unnown"}`,
  create_time: `${wallet.create_time ? wallet.create_time : "unnown"}`,
  latest_opration_time: `${
    wallet.latest_opration_time ? wallet.latest_opration_time : "unnown"
  }`,
});

const makeData = (wallets) => wallets.map(newWallet);
export default makeData;
