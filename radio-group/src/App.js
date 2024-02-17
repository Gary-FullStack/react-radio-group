import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>Look!   See this awesome radio group?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="yes">Yes</RadioOption>
        <RadioOption value="youbet">You Bet I do</RadioOption>
        <RadioOption value="wellduh">Well Duh</RadioOption>
        <RadioOption value="ofcourse">Of Course</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default App;
