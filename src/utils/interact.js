import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { abis, contracts } from "../constants";

const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_API_URL_MAINNET);

const Randomice_ADDRESS = contracts.Randomice_ADDRESS;
const contract = new web3.eth.Contract(abis.Randomice_ABI, Randomice_ADDRESS);

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const obj = {
        status: "",
        address: addressArray[0],
      };

      return obj;
    } catch (err) {
      return {
        address: "",
        status: "Oh shit! " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            <a href="https://metamask.io/download.html">
              You need an Ethereum wallet MetaMask.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      await window.ethereum.request({
        method: "eth_accounts",
      });
      const addressArray = await web3.eth.getAccounts();

      if (addressArray.length) {
        return {
          address: addressArray[0],
          status: "",
        };
      } else {
        return {
          address: "",
          status: "",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "Oh shit, " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            <a href="https://metamask.io/download.html">
              You need an Ethereum wallet MetaMask.
            </a>
          </p>
        </span>
      ),
    };
  }
};

// Contract Methods

export const getMaxMintAmount = async () => {
  const result = await contract.methods.maxMint().call();
  return result;
};

export const getTotalSupply = async () => {
  const result = await contract.methods.minted().call();
  return result;
};


export const getNftPrice = async () => {
  const result = await contract.methods.cost().call();
  const resultEther = web3.utils.fromWei(result, "ether");
  return resultEther;
};

export const getPublicState = async () => {
  const result = await contract.methods.status().call();
  return result;
};

export const getFreeClaimedByAddress = async () => {
  if (window.ethereum.selectedAddress) {
    const result = await contract.methods.mintlist(window.ethereum.selectedAddress).call();
    return result;
  }
};

export const getIsWhitelisted = async () => {
  if (window.ethereum.selectedAddress) {
    const result = await contract.methods.isHolder(window.ethereum.selectedAddress).call();
    return result;
  }
};



export const mintNFT = async (mintAmount) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: (
        <p>
          Connect to Metamask using{" "}
          <span className="px-2 text-purple-600">Connect Wallet</span> button.
        </p>
      ),
    };
  }

  //set up your Ethereum transaction
  const transactionParameters = {
    to: Randomice_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    value: parseInt(web3.utils.toWei("0.025", "ether") * mintAmount).toString(
      16,
    ), // hex
    gasLimit: "0",
    data: contract.methods.mint(mintAmount).encodeABI(), //make call to NFT smart contract
  };
  //sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status: (
        <span>
          <p>
            {" "}
            <a>
              Your RandoMice is minting! <p>&nbsp;</p> Once transaction is
              approved, check it out on
            </a>
            <a
              className="px-2 text-purple-600"
              href="https://opensea.io/collection/Randomice"
            >
              OpenSea.io!
            </a>
          </p>
        </span>
      ),

      //   "Check out your transaction on Etherscan: https://etherscan.io/tx/" +
      //   txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "Oh shit! " + error.message,
    };
  }
};

export const claimNFT = async (address) => {
  if (!window.ethereum.selectedAddress) {
    return {
      success: false,
      status: (
        <p>
          Connect to Metamask using{" "}
          <span className="px-2 text-purple-600">Connect Wallet</span> button.
        </p>
      ),
    };
  }

  //set up your Ethereum transaction
  const transactionParameters = {
    to: Randomice_ADDRESS, // Required except during contract publications.
    from: window.ethereum.selectedAddress, // must match user's active address.
    gasLimit: "0",
    data: contract.methods.claim(address).encodeABI(), //make call to NFT smart contract
  };
  //sign the transaction via Metamask
  try {
    const txHash = await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameters],
    });
    return {
      success: true,
      status: (
        <span>
          <p>
            {" "}
            <a>
              Your RandoMice is minting! <p>&nbsp;</p> Once transaction is
              approved, check it out on
            </a>
            <a
              className="px-2 text-purple-600"
              href="https://opensea.io/collection/Randomice"
            >
              OpenSea.io!
            </a>
          </p>
        </span>
      ),

      //   "Check out your transaction on Etherscan: https://etherscan.io/tx/" +
      //   txHash,
    };
  } catch (error) {
    return {
      success: false,
      status: "Oh shit! " + error.message,
    };
  }
};


export const getURI = async (tokenId) => {
  const result = await contract.methods.tokenURI(tokenId).call();
  return result;
};
