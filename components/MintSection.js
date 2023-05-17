// components/MintSection.js
import React, {useState,useEffect} from 'react';
import kavli from '../DegNA.json'
import {ethers,BigNumber} from 'ethers'




const psoliAddress = "0x3f1387648937c27e9A2E4894A179BAa12b769521"


const MintSection = ({address}) => {

  let mintAmount=1
  const [notification,setNotification] = useState("")
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
        <button onClick={mintToken} className="bg-lab-green text-white px-8 py-4 rounded">Mint</button>
      </div>
    </section>



  );
};

export default MintSection;
