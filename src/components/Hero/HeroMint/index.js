import { useEffect, useState } from "react";

import HeroMintButton from "../HeroMintButton";
import HeroClaimButton from "../HeroClaimButton";
import HeroMintCounter from "./HeroMintCounter";
import HeroPrice from "../HeroPrice";
import {
  mintNFT,
  claimNFT,
  getFreeClaimedByAddress,
  getIsWhitelisted
} from "../../../utils/interact";

export default function HeroMint({
  isPublicSaleActive,
  setStatus,
  maxMintAmount,
  nftPrice,
  updateTotalSupply,
  currentAccount,
}) {
  // Counter
  const [count, setCount] = useState(1);

  // Free mint claimed by address
  const [freeClaimedByAddress, setFreeClaimedByAddress] = useState(false);

  //Whitelist status
  const [isWhitelisted, setIsWhitelisted] = useState(false);

    useEffect(() => {
    if (currentAccount) {
      const fetchData = async () => {
        setFreeClaimedByAddress(await getFreeClaimedByAddress(currentAccount));
        setIsWhitelisted(await getIsWhitelisted(currentAccount));
      };
      fetchData();
    }
  }, [currentAccount]);

  // Counter
  const incrementCount = () => {
    if (count < maxMintAmount) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Updates

  const updateFreeClaimedByAddress = async () => {
    const freeClaimedByAddress = await getFreeClaimedByAddress(currentAccount);
    setFreeClaimedByAddress(freeClaimedByAddress);
  };


  // Randomice minting
  const mintRandomice = async () => {
    const { status } = await mintNFT(count);
    setStatus(status);
    updateTotalSupply();
    
  };

  const claimRandomice = async () => {
    const { status } = await claimNFT(currentAccount);
    setStatus(status);
    updateTotalSupply();
    updateFreeClaimedByAddress(currentAccount);
  };

  if (!isPublicSaleActive) {
    return (
      <h3 className="mt-4 font-semibold text-center text-6xl text-purple-800 font-flower">
        SOLD OUT!
      </h3>
    );
  } else {
    if (currentAccount != "") {
      if (isPublicSaleActive) {
        return (
          <>
            <HeroMintCounter
              count={count}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
            />
            <HeroPrice nftPrice={(nftPrice * count).toFixed(3)} />
            <HeroMintButton mintRandomice={mintRandomice} />

            {isWhitelisted ? (
            !freeClaimedByAddress ? (
              <>
                <h3 className="mt-2 font-semibold text-2xl text-center text-green-600 font-flower">
                  YOU ARE WHITELISTED!
                </h3>
                <HeroClaimButton claimRandomice={claimRandomice} />
              </>
            ) : (
              <h3 className="mt-2 font-semibold text-2xl text-center text-pink-600 font-flower">
                ALREADY CLAIMED
              </h3>
            )
          ) : (
            <h3 className="mt-2 font-semibold text-2xl text-center text-pink-600 font-flower">
              YOU ARE NOT <br></br> WHITELISTED!
            </h3>
          )}







          </>
        );








        
      }

      return (
        <div className="px-4 py-2 mt-4 mb-8 text-center rounded-md">

          
        </div>
      );
    } else {
      return (
        <h3 className="mt-4 font-semibold text-center text-2xl text-pink-600 font-flower">
          NOT CONNECTED!<br></br> PLEASE CONNECT AND <br></br> REFRESH THE PAGE {currentAccount}
        </h3>
      );
    }
  }
}
