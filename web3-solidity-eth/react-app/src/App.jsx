// import { ethers } from "ethers";
import "./App.css";

function App() {
  const wave = () => {
    console.log("waved");
  };
  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">👋 Hey there!</div>

        <div className="bio">
          I am lance and I am working with web3 project now, that's pretty cool
          right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}

export default App;
