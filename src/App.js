import { useState, useRef, useEffect } from "react";

function App() {
  const [value, setValue] = useState("Hello");
  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 3000);
  }, []);

  const valueHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <input
        type="text"
        className="rounded-xl text-6xl px-2 py-1 border-8 border-black focus:border-blue-500"
        value={value}
        onChange={valueHandler}
        ref={inputRef}
      />
    </div>
  );
}

export default App;
