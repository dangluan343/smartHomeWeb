import React from "react";
import { useState } from "react";
function Switch(props) {
  const [color, setColor] = useState("black");

  const changeColorFunc = () => {
    if (color === "black") {
      setColor("#3ACE21");
    } else {
      setColor("black");
    }
  };
  return (
    <div onClick={() => changeColorFunc()}>
      <svg
        width="50"
        height="50"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.1329 7.07021C20.3913 8.329 21.2482 9.93265 21.5952 11.6784C21.9423 13.4242 21.7639 15.2336 21.0826 16.878C20.4013 18.5223 19.2478 19.9278 17.7678 20.9166C16.2878 21.9054 14.5479 22.4331 12.7679 22.4331C10.988 22.4331 9.2481 21.9054 7.76812 20.9166C6.28814 19.9278 5.13459 18.5223 4.45331 16.878C3.77204 15.2336 3.59364 13.4242 3.94067 11.6784C4.28769 9.93265 5.14457 8.329 6.40295 7.07021"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.7729 2.43021V12.4302"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default Switch;
