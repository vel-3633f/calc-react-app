import { useState } from "react";
import { calcFunc } from "./calcFunc";

const btnItem = [
  [7, 8, 9, "÷"],
  [4, 5, 6, "*"],
  [1, 2, 3, "-"],
  [0, "AC", ".", "+"],
];
const buttonStyle =
  "px-2 py-1 m-0.5 h-16 w-16 text-white bg-gray-600 font-semibold rounded-full hover:bg-gray-400 disabled:bg-gray-300";

const Button = ({ ans, setAns }) => {
  const [isCheck, setIsCheck] = useState(false);

  const addAns = (e) => {
    const newValue = e.target.textContent;
    switch (newValue) {
      case "AC":
        setAns("");
        break;
      case "+":
        setAns(ans + newValue);
        setIsCheck(false);
        break;
      case "-":
        setAns(ans + newValue);
        setIsCheck(false);
        break;
      case "*":
        setAns(ans + newValue);
        setIsCheck(false);
        break;
      case "÷":
        setAns(ans + newValue);
        setIsCheck(false);
        break;
      case "=":
        setAns(calcFunc(ans));
        break;
      default:
        setAns(ans + newValue);
        setIsCheck(true);
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
                  className={buttonStyle}
                  onClick={addAns}
                  disabled={index2 === 3 ? !isCheck : false}
                >
                  {item}
                </button>
              );
            })}
          </div>
        );
      })}
      <button className={buttonStyle} onClick={addAns}>
        =
      </button>
    </div>
  );
};

export default Button;
