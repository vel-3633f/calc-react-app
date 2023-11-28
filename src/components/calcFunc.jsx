export const calcFunc = (ans) => {
  let ansAry = [];
  let beforeNum = "";
  for (let i = 0; i < ans.length; i++) {
    if (ans[i] === "+") {
      ansAry.push(beforeNum);
      ansAry.push("+");
      beforeNum = "";
    } else {
      beforeNum += ans[i];
    }
    // while (ansAry.length === 1) {
  }
  ansAry.push(beforeNum);
  console.log(ansAry);

  let sum = 0;
  while (ansAry.indexOf("+") !== -1) {
    let plusIndex = ansAry.indexOf("+");
    sum = Number(ansAry[plusIndex - 1]) + Number(ansAry[plusIndex + 1]);
    ansAry.splice(plusIndex - 1, 3, sum);
  }

  console.log(ansAry);
  return sum;
};
