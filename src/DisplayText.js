import React from "react";
import SharedContext from "./SharedContext";

class DisplayText extends React.Component {
  render() {
    return (
      <SharedContext.Consumer>
        {(value) => {
          return (
            <>
              <h1 className="text-blue-500">{this.props.children}</h1>
              <p className="text-3xl">The theme is: {value.theme}</p>
            </>
          );
        }}
      </SharedContext.Consumer>
    );
  }
}

export default DisplayText;
