import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [ans, setAns] = useState("");
  const [beforeFormula, setBeforeFormula] = useState("");
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-zinc-950">
      <div>
        <p className="h-10 text-gray-300 text-xl text-right pr-5">{beforeFormula}</p>
        <p className="h-10 text-white text-4xl text-right pr-5 mb-4">{ans}</p>
        <Button ans={ans} setAns={setAns} setBeforeFormula={setBeforeFormula} />
      </div>
    </div>
  );
}

export default App;
