// // components/MintSection.js
// import React, {useState,useEffect} from 'react';
// import kavli from '../DegNA.json'
// import {ethers,BigNumber} from 'ethers'




// const psoliAddress = "0x3f1387648937c27e9A2E4894A179BAa12b769521"


// const MintSection = ({address}) => {

//   const [mintAmount,setMintAmount] = useState(1)
//   const [notification,setNotification] = useState("")
//   async function mintToken(){
//     if(window.ethereum){

 
//             const provider = new ethers.providers.Web3Provider(window.ethereum);
//             const signer = provider.getSigner();
//             const contract = new ethers.Contract(
//                 psoliAddress,
//                 kavli.abi,
//                 signer,
//             );
//             // let web3 = new Web3(window.ethereum);
//             // let contract = await new web3.eth.Contract(kavli.abi, psoliAddress);
//             // console.log("contract: ",contract)
//             try{
//                 // const response = await contract.mint(BigNumber.from(mintAmount));
//                 // const gasPrice= signer.gasPrice;
//                 // console.log("gasPrice: ",gasPrice)
//                 // const gasLimit = contract.estimateGas.mint(BigNumber.from(10));
//                 // console.log("gasLimit: ",gasLimit)
//                 console.log("address: ",address);
//                 const response = await contract.mint(BigNumber.from(mintAmount),{value:String(1000000000*mintAmount)})
//                 // const response = await contract.mint(BigNumber.from(mintAmount),{value:String(140000000000000000*mintAmount)})
//                 setNotification(`https://mumbai.polygonscan.com/tx/${response.hash}`)
//                 console.log(response)
//                 alert("success!")

//                 // const result = contract.methods.mint(mintAmount).send({from:accounts[0],value:String(69000000000000000)})
//             }catch(err){
//                 alert("error! try again")
//                 console.log("error: ",err)
//             }
//         }
//   }
//   return (
//    <section id="mint" className="bg-lab-gray text-white min-h-[70vh] flex items-center justify-center" style={{ 
//       backgroundImage: "url(/images/background.jpg)",
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat'
//     }}
//     >
//       <div className="text-center  bg-black bg-opacity-60 p-10">
//         <h2 className="text-4xl mb-4">Mint your DegNA</h2>
//         {notification && <p className="notification text-center mb-4">
//           <a href={notification} target="_blank" className="text-lab-green">{notification}</a>
//         </p>}
//         <button onClick={mintToken} className="bg-lab-green text-white px-8 py-4 rounded">Mint</button>
//       </div>
//     </section>



//   );
// };

// export default MintSection;


import React, { useState, useEffect } from 'react';
import kavli from '../DegNA.json'
import { ethers, BigNumber } from 'ethers'

const psoliAddress = "0x3f1387648937c27e9A2E4894A179BAa12b769521"

const MintSection = ({ address }) => {

  const [mintAmount, setMintAmount] = useState(1)
  const [notification, setNotification] = useState("")

  const increment = () => setMintAmount(prev => prev + 1);
  const decrement = () => {
    if (mintAmount > 0) {
      setMintAmount(prev => prev - 1)
    }
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setMintAmount(value);
    }
  };

  //... rest of your code

  async function mintToken(){
    if(window.ethereum){

 
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                psoliAddress,
                kavli.abi,
                signer,
            );
            // let web3 = new Web3(window.ethereum);
            // let contract = await new web3.eth.Contract(kavli.abi, psoliAddress);
            // console.log("contract: ",contract)
            try{
                // const response = await contract.mint(BigNumber.from(mintAmount));
                // const gasPrice= signer.gasPrice;
                // console.log("gasPrice: ",gasPrice)
                // const gasLimit = contract.estimateGas.mint(BigNumber.from(10));
                // console.log("gasLimit: ",gasLimit)
                console.log("address: ",address);
                const response = await contract.mint(BigNumber.from(mintAmount),{value:String(1000000000*mintAmount)})
                // const response = await contract.mint(BigNumber.from(mintAmount),{value:String(140000000000000000*mintAmount)})
                setNotification(`https://mumbai.polygonscan.com/tx/${response.hash}`)
                console.log(response)
                alert("success!")

                // const result = contract.methods.mint(mintAmount).send({from:accounts[0],value:String(69000000000000000)})
            }catch(err){
                alert("error! try again")
                console.log("error: ",err)
            }
        }
  }

  return (
    <section id="mint" className="bg-lab-gray text-white min-h-[70vh] flex items-center justify-center" style={{
      backgroundImage: "url(/images/background.jpg)",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    >
      <div className="text-center  bg-black bg-opacity-60 p-10">
        <h2 className="text-4xl mb-4">Mint your DegNA</h2>
        {notification && <p className="notification text-center mb-4">
          <a href={notification} target="_blank" className="text-lab-green">{notification}</a>
        </p>}
        <div className="flex justify-center items-center mb-4">
          <button onClick={decrement} className="bg-lab-green text-white px-4 py-2 mr-2 rounded hover:bg-lab-green-light transition duration-200 ease-in-out">-</button>
          <input type="number" value={mintAmount} onChange={handleInputChange} className="text-center w-20 text-black bg-white p-2 rounded shadow-inner" />
          <button onClick={increment} className="bg-lab-green text-white px-4 py-2 ml-2 rounded hover:bg-lab-green-light transition duration-200 ease-in-out">+</button>
        </div>
        <p className="text-center mb-4">Minting {mintAmount} token(s) for a total of {mintAmount * 0.000000001} ETH</p>
        <button onClick={mintToken} className="bg-lab-green text-white px-8 py-4 rounded hover:bg-lab-green-light transition duration-200 ease-in-out">Mint</button>
      </div>
    </section>
  );
};

export default MintSection;
