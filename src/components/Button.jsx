const btnItem = [
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, "AC", ".", "÷"],
];

const Button = () => {
  return (
    <div>
      {btnItem.map((ary, index1) => {
        return (
          <div key={index1}>
            {ary.map((item,index2) => {
              return (
                <button
                  key={index2}
                  className="px-2 py-1 m-0.5 h-16 w-16 text-yellow-500 border border-yellow-500 font-semibold rounded-full hover:bg-yellow-100"
                >
                  {item}
                </button>
              );
            })}
          </div>
        );
      })}
      <h1>さだ</h1>
      <button className="px-2 py-1 m-0.5 h-16 w-16 text-yellow-500 border border-yellow-500 font-semibold rounded-full hover:bg-yellow-100">=</button>
    </div>
  );
};

export default Button;

// {
//   ary.map((item, index) => {
//     return (
//       <div key={index}>
//         <button>{item}</button>
//       </div>
//     );
//   })
// };
// })}
