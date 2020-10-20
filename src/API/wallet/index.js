import { config } from "../../config";

export const fetchWallet = async (wallet) => {
  const response = await fetch(`${config.url}/wallet/getaccount`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      address: wallet,
      visible: true,
    }),
  });

  return await response.json();
};
