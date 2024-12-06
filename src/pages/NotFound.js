import { useState } from "react";

export default function Home() {
  const [tab, setTab] = useState("Settings");

  function handleClick(tab) {
    setTab(tab);
  }

  return (
    <>
      {/* <button className="btn" onClick={handleClick}>
        {isOpen ? "x" : "="}
      </button> */}

      <div className="tabs tabs-boxed">
        <button onClick={()=>handleClick("Settings")} className={`tab ${tab === "Settings" ? "tab-active" : ""}`}>Settings</button>
        <button onClick={()=>handleClick("Security")} className={`tab ${tab === "Security" ? "tab-active" : ""}`}>Security</button>
        <button onClick={()=>handleClick("Account")} className={`tab ${tab === "Account" ? "tab-active" : ""}`}>Account</button>
      </div>


      <div>
        {tab === "Settings" && <h1>Settings Settings Settings</h1>}
        {tab === "Security" && <h1>Security Security Security</h1>}
        {tab === "Account" && <h1>Account Account Account</h1>}
      </div>
    </>
  );
}
