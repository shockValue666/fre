// components/Navbar.js
import React,{ useState } from 'react';
import { ethers } from 'ethers'


const Navbar = ({address,setAddress}) => {
  // const [address, setAddress] = useState(null);

  async function connectWallet() {
    if (window.ethereum) {
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // const address = await signer.getAddress();

      // setAddress(address);
       const accounts = await window.ethereum.request({
                method:"eth_requestAccounts",
        })
        setAddress(accounts[0])
    } else {
      console.log('Please install MetaMask');
    }
  }
  return (
    <nav className="bg-lab-blue p-4">
      <ul className="flex justify-end">
        <li className="mx-2">
          <button onClick={connectWallet} className="bg-lab-green text-white px-4 py-2 rounded">
            {address ? `Connected: ${address}` : "Connect"}
          </button>
        </li>
        <li className="mx-2">
          <a href="https://twitter.com/your-twitter" className="text-white">Twitter</a>
        </li>
        <li className="mx-2">
          <a href="https://discord.gg/your-discord" className="text-white">Discord</a>
        </li>
        <li className="mx-2">
          <a href="#about" className="text-white">About</a>
        </li>
        <li className="mx-2">
          <a href="#team" className="text-white">Team</a>
        </li>
      </ul>
    </nav>
    // <nav className="bg-lab-blue p-4">
    //   <ul className="flex justify-end">
    //     {/* ...other navbar code... */}
    //     <button onClick={connectWallet} className="bg-lab-green text-white px-4 py-2 rounded">
    //       {address ? `Connected: ${address}` : 'Connect'}
    //     </button>
    //     {/* ...other navbar code... */}
    //   </ul>
    // </nav>

  );
};

export default Navbar;
