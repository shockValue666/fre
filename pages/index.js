import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import MintSection from '../components/MintSection';
import AboutSection from '../components/AboutSection';
import CreatorsSection from '../components/CreatorsSection';
import Footer from '../components/Footer';

export default function Home() {
  const [address,setAddress] = useState(null);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar address={address} setAddress={setAddress}/>
      <MintSection address={address} setAddress={setAddress}/>
      <AboutSection />
      <CreatorsSection />
      <Footer />
    </div>
  );
}


//https://sepolia.etherscan.io/address/0x03e46FA8485ab7D31D00dbA56C2ef1cCf76bBfb6#readContract