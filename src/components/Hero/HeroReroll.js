import { useState } from "react";

import HeroPrice from "./HeroPrice";
import HeroButton from "./HeroButton";
import { rerollNFT } from "../../utils/interact";

export default function HeroReroll({
  isPublicSaleActive,
  updateTotalRerolls,
  setStatus,
  currentAccount,
}) {
  const [tokenIdtoReroll, setTokenIdtoReroll] = useState(0);

  const rerollRandomice = async () => {
    const { status } = await rerollNFT(tokenIdtoReroll);
    setStatus(status);
    updateTotalRerolls();
  };

  if (!isPublicSaleActive || currentAccount == "") {
    return null;
  } else {
    return (
      <>
        {/* Reroll */}
        <div className="container flex flex-col items-center px-8 py-2 border-t-4">
          <h3 className="font-bold text-center text-xl text-purple-600 font-flower">
            Reroll
          </h3>
          <input
            type="number"
            name="idToReroll"
            placeholder="Token Id"
            className="container py-2 my-2 text-sm font-extrabold text-center text-gray-800 bg-purple-200 rounded-md w-min font-flower"
            onChange={(e) => setTokenIdtoReroll(e.target.value)}
          />

          {/* Price */}
          <HeroPrice nftPrice={0.01} />
          <HeroButton mintRandomice={rerollRandomice} reroll />
          <div></div>
        </div>
      </>
    );
  }
}
