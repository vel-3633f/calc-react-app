const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "÷": (a, b) => a / b,
};

export const calcFunc = (ans,setBeforeFormula) => {
  let ansAry = [];
  let beforeNum = "";

  for (let i = 0; i < ans.length; i++) {
    if (ans[i] in operators) {
      ansAry.push(beforeNum);
      ansAry.push(ans[i]);
      beforeNum = "";
    } else {
      beforeNum += ans[i];
    }
  }
  ansAry.push(beforeNum);
  setBeforeFormula(`${ansAry.join("")}=`)

  const calcDevide = (operator1, operator2) => {
    while (ansAry.includes(operator1) || ansAry.includes(operator2)) {
      for (let i = 0; i < ansAry.length; i++) {
        if (ansAry[i] === operator1) {
          const calcResult = operators[operator1](
            Number(ansAry[i - 1]),
            Number(ansAry[i + 1])
          );
          ansAry.splice(i - 1, 3, calcResult);
          break;
        }
        if (ansAry[i] === operator2) {
          const calcResult = operators[operator2](
            Number(ansAry[i - 1]),
            Number(ansAry[i + 1])
          );
          ansAry.splice(i - 1, 3, calcResult);
          break;
        }
      }
    }
  };

  calcDevide("*", "÷");
  calcDevide("+", "-");

  if (ansAry.includes(Infinity) || ansAry.includes(NaN)) {
    ans = "エラー";
  } else {
    ans = String(ansAry[0]);
  }
  console.log(ansAry);
  return ans;
};
