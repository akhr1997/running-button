import React, { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const App = () => {
  const { width, height } = useWindowSize();
  const [noButtonPos, setNoButtonPos] = useState({ left: null, top: null });
  const [isAccepted, setIsAccepted] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);

  const moveNoButton = () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    setNoButtonPos({ left: `${x}px`, top: `${y}px` });
    setYesButtonSize((prev) => prev + 0.2);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundColor: "#fff0f3",
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    overflow: "hidden",
    margin: 0,
    position: "relative",
  };

  const noBtnStyle = {
    position: noButtonPos.left ? "absolute" : "relative",
    left: noButtonPos.left,
    top: noButtonPos.top,
    padding: "10px 20px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.1s ease",
  };

  if (isAccepted) {
    return (
      <div style={containerStyle}>
        <Confetti
          width={width}
          height={height}
          colors={["#ff4d6d", "#ff758f", "#ffb3c1"]}
        />
        <h1 style={{ color: "#ff4d6d", fontSize: "3rem" }}>
          Yay! See you on the 14th! ❤️
        </h1>
        <h1 style={{ color: "#ff4d6d", fontSize: "3rem" }}>
          (Mera birthday gift abhi bhi baaki hai ji xD)
        </h1>
        <h1 style={{ color: "#ff4d6d", fontSize: "3rem" }}>
          PS: More such websites are in the works, hehe
        </h1>
        <h1 style={{ color: "#ff4d6d", fontSize: "3rem" }}>
          (Unless you want a silly useless PPT, ik, i'm upping the game here xD)
        </h1>
      </div>
    );
  }

  return (
    <div data-testid="hello" style={containerStyle}>
      <h1 style={{ color: "#c9184a", marginBottom: "40px" }}>
        Helluuu, Nushkuuu ji!
      </h1>
      <h1 style={{ color: "#c9184a", marginBottom: "40px" }}>
        Will you be my Valentine? 🌹
      </h1>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <button
          onClick={() => setIsAccepted(true)}
          style={{
            transform: `scale(${yesButtonSize})`,
            padding: "10px 20px",
            backgroundColor: "#ff4d6d",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1.2rem",
            transition: "transform 0.2s",
          }}
        >
          Yes
        </button>

        <button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          style={noBtnStyle}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
