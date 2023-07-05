import React, { useState, useEffect, useContext } from "react";
const CounterContext = React.createContext();

function CountDisplayArea() {
  const countValueFromContext = useContext(CounterContext);

  return <span className="bg-yellow-400">{countValueFromContext}</span>;
}

function App() {
  const [count, setCount] = useState(100);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  return (
    <CounterContext.Provider value={count}>
      <div className="min-h-screen flex justify-center items-center flex-col">
        <h1 className="text-9xl font-bold">
          <CountDisplayArea />
        </h1>
        <button
          className="inline-block px-4 py-2 text-3xl font-bold bg-slate-300 rounded mt-8"
          onClick={incrementHandler}
        >
          Increment
        </button>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
