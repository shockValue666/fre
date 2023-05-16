import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import contractJson from '../DegNA.json'

export const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [address, setAddress] = useState(null);
  const [network, setNetwork] = useState(null);
  const [contract, setContract] = useState(null);

  // Insert your contract ABI and address here
  const contractAbi = contractJson.abi; // ABI goes here
  const contractAddress = "0x03e46FA8485ab7D31D00dbA56C2ef1cCf76bBfb6"; // Contract address goes here

  // This function will enable the user's Metamask account
  async function enableMetamask() {
    if (window.ethereum) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log("sss")
      const signer = provider.getSigner();
      const network = await provider.getNetwork();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);

      setProvider(provider);
      setSigner(signer);
      setNetwork(network);
      setContract(contract);

      const address = await signer.getAddress();
      setAddress(address);
    } else {
      console.log("Please install Metamask");
    }
  }

  // Handle minting NFTs
  async function mintNft(amount) {
    if (contract) {
      const tx = await contract.mint({ value: ethers.utils.parseEther("0.005") * amount });
      await tx.wait();
    } else {
      console.log("The contract is not connected");
    }
  }

  return (
    <Web3Context.Provider value={{ enableMetamask, mintNft, address, network }}>
      {children}
    </Web3Context.Provider>
  );
}
