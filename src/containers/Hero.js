import { useState, useEffect } from "react";

import HeroInfo from "../components/Hero/HeroInfo";
import HeroStats from "../components/Hero/HeroStats";
import HeroMint from "../components/Hero/HeroMint";

import { useStatus } from "../context/statusContext";
import {
  getMaxMintAmount,
  getTotalSupply,
  getNftPrice,
  getPublicState,
  getCurrentWalletConnected,
} from "../utils/interact";

export default function Hero() {
  const { status, setStatus } = useStatus();

  // Info
  const [isPublicSaleActive, setIsPublicSaleActive] = useState(true);
  const [maxMintAmount, setMaxMintAmount] = useState(0);
  const [nftPrice, setNftPrice] = useState("0.025");
  const [totalSupply, setTotalSupply] = useState(0);
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setMaxMintAmount(await getMaxMintAmount());
      setCurrentAccount((await getCurrentWalletConnected()).address);
      setNftPrice(await getNftPrice());
      await updateTotalSupply();
      await updateIsPublicSaleActive();
    };
    fetchData();
  }, []);

  const updateTotalSupply = async () => setTotalSupply(await getTotalSupply());
  const updateIsPublicSaleActive = async () =>
    setIsPublicSaleActive(await getPublicState());

  return (
    <main id="main" className=" pt-10 pb-20 scrollingBG ">
      <div className="flex flex-wrap items-center   ">
        <div className="container relative flex flex-wrap py-3 pt-16 mx-auto mt-10 sm:mx-auto lg:w-10/12 md:w-10/12 sm:w-10/12  ">
          <div className=""></div>
          <div className="container relative px-4 py-10 bg-gray-100 shadow-lg sm:rounded-3xl sm:p-4 gradient-background border-solid border-4 border-indigo-400">
            <div className="container relative flex flex-wrap px-8 py-8 lg:flex-nowrap">
              {/* Info */}
              <HeroInfo
       
                maxMintAmount={maxMintAmount}
                nftPrice={nftPrice}
              />
              {/* Minter */}
              <div className="container flex flex-col items-center py-6 lg:w-2/5">
                {/* Stats */}
                <HeroStats
                  isPublicSaleActive={isPublicSaleActive}
                  totalSupply={totalSupply}
                />
                {/* Minting */}
                <HeroMint
                  currentAccount={currentAccount}
                  isPublicSaleActive={isPublicSaleActive}
               
                  maxMintAmount={maxMintAmount}
                  nftPrice={nftPrice}
                  setStatus={setStatus}
                  updateTotalSupply={updateTotalSupply}
                />

                {/* Status */}
                {status && (
                  <div className="flex items-center justify-center px-4 py-4 mt-8 font-semibold text-center text-white bg-red-400 rounded-md font-flower ">
                    {status}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
