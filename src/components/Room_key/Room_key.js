import React, { useState } from "react";
import NfcManager from "nfc-react-web";

function NfcReader() {
  const [nfcKey, setNfcKey] = useState("");

  const handleNfcRead = async () => {
    try {
      await NfcManager.start();
      NfcManager.setEventListener(async (tag) => {
        const nfcData = tag.data;
        setNfcKey(nfcData);
        await sendOpenDoorRequest(nfcData);
      });
    } catch (ex) {
      console.warn(ex);
    }
  };

  const sendOpenDoorRequest = async (nfcData) => {
    try {
      const response = await fetch("/open-door", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nfcData }),
      });
      if (response.ok) {
        console.log("Door opened successfully!");
      } else {
        console.error("Failed to open door");
      }
    } catch (ex) {
      console.error("Error opening door", ex);
    }
  };

  return (
    <div  style={{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      marginTop:"20%"
    }}>
      <button 
  style={{
    backgroundColor: "green",
    borderRadius: "50%",
    color: "white",
    fontSize: "2em",
    padding: "1em 2em",
    border: "none",
    boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.25)"
  }}
  onClick={handleNfcRead}
>
  Read NFC
</button>
      <p>NFC key: {nfcKey}</p>
    </div>
  );
}

export default NfcReader;