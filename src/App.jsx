import { useState } from "react";
import "./App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;
