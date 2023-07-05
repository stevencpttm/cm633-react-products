import React from "react";
import SharedContext from "./SharedContext";
import DisplayText from "./DisplayText";

class App extends React.Component {
  render() {
    return (
      <SharedContext.Provider value={{ theme: "Dark" }}>
        <div className="flex flex-col justify-center items-center min-h-screen text-9xl font-bold">
          <DisplayText>Hello</DisplayText>
        </div>
      </SharedContext.Provider>
    );
  }
}

export default App;
