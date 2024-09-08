import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import firebase from "./firebase";

import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useRef, useState } from "react";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const recaptchaRef = useRef(null);

  const handleSendOtp = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.innerHTML = `<div id="recaptcha-container"></div>`;
    }
    const varifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, varifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        // logic
      })
      .catch((error) => {
        console.log("Error sending OTP: ", error);
      });
  };
  return (
    <ThemeProvider>
      <Header />
      <div>
        <h1>Phone OTP Authentication</h1>
        <div ref={recaptchaRef}></div>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSendOtp}>send OTP</button>
      </div>
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
