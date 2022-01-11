import { useEffect, useState } from "react";

import HeroMintButton from "../HeroButton";
import HeroMintCounter from "./HeroMintCounter";
import HeroPrice from "../HeroPrice";
import {
  mintNFT,
  claimNFT,
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
  // Free mint total claimed
  const [freeClaimedAmount, setFreeClaimedAmount] = useState(0);
  // Free mint claimed by address
  const [freeClaimedByAddress, setFreeClaimedByAddress] = useState(0);

  // Whitelist mint
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  useEffect(() => {
    if (currentAccount) {
      const fetchData = async () => {

  
        setIsWhitelisted(true);

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
  const updateFreeClaimedAmount = async () => {
    const freeClaimedAmount = await getFreeClaimed();
    setFreeClaimedAmount(freeClaimedAmount);
  };

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

  const presaleMintRandomice = async () => {
    const { status } = await claimNFT(proof);
    setStatus(status);
    updateTotalSupply();
    updateFreeClaimedAmount();
    updateFreeClaimedByAddress(currentAccount);
  };

  if (!isPublicSaleActive) {
    return (
      <h3 className="mt-4 font-semibold text-center text-6xl text-purple-800 font-flower">
        COMING SOON!
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
          </>
        );
      }

      return (
        <div className="px-4 py-2 mt-4 mb-8 text-center rounded-md bg-sky-200">
          <h2 className="mt-1 font-semibold text-center text-purple-600 font-flower">
            PRESALE
          </h2>
          <HeroPrice nftPrice={0} />
          <h2 className="mt-1 font-semibold text-center text-black font-flower">
            claimed:
          </h2>

          {isWhitelisted ? (
            freeClaimedByAddress < 1 ? (
              <>
                <h3 className="mt-4 font-semibold text-center text-green-600 font-flower">
                  YOU ARE WHITELISTED!
                </h3>
                <HeroMintButton mintRandomice={presaleMintRandomice} />
              </>
            ) : (
              <h3 className="mt-4 font-semibold text-center text-pink-600 font-flower">
                ALREADY CLAIMED
              </h3>
            )
          ) : (
            <h3 className="mt-4 font-semibold text-center text-pink-600 font-flower">
              YOU ARE NOT <br></br> WHITELISTED!
            </h3>
          )}
        </div>
      );
    } else {
      return (
        <h3 className="mt-4 font-semibold text-center text-black font-">
          NOT CONNECTED!<br></br> PLEASE CONNECT AND <br></br> REFRESH THE PAGE {currentAccount}
        </h3>
      );
    }
  }
}
