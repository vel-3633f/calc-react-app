import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [ans, setAns] = useState("");
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <p className="h-10">{ans}</p>
      <Button ans={ans} setAns={setAns} />
    </div>
  );
}

export default App;
