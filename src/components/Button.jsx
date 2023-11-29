import { useState } from "react";
import { calcFunc } from "./calcFunc";

const btnItem = [
  [7, 8, 9, "÷"],
  [4, 5, 6, "*"],
  [1, 2, 3, "-"],
  [0, ".", "AC", "+"],
];
const buttonStyle =
  "px-2 py-1 m-0.5 h-16 w-16 text-white font-semibold rounded-full disabled:bg-yellow-200 text-2xl";

const Button = ({ ans, setAns }) => {
  const [isCheck, setIsCheck] = useState(false);

  const handleButtonClick = (value) => {
    switch (value) {
      case "AC":
        setAns("");
        break;
      case "=":
        setAns(calcFunc(ans));
        break;
      default:
        setAns(ans + value);
        setIsCheck(
          value !== "+" && value !== "-" && value !== "*" && value !== "÷"
        );
    }
  };
  return (
    <div>
      {btnItem.map((ary, index1) => {
        return (
          <div key={index1}>
            {ary.map((item, index2) => {
              return (
                <button
                  key={index2}
                  className={`${buttonStyle} ${
                    index2 === 3
                      ? "bg-yellow-500 hover:bg-yellow-400"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  onClick={() => handleButtonClick(item)}
                  disabled={index2 === 3 ? !isCheck : false}
                >
                  {item}
                </button>
              );
            })}
          </div>
        );
      })}
      <button
        className={`${buttonStyle} bg-gray-600 hover:bg-gray-400"`}
        onClick={() => handleButtonClick("=")}
      >
        =
      </button>
    </div>
  );
};

export default Button;
