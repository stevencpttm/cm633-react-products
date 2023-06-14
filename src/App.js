import React from "react";
import ListItem from "./ListItem";

class App extends React.Component {
  state = {
    selectedProducts: [],
  };

  productSelectHandler = (product) => {
    let newSelectedProducts = [...this.state.selectedProducts];

    if (newSelectedProducts.includes(product)) {
      // Should Delete
      newSelectedProducts = this.state.selectedProducts.filter((oneProduct) => {
        return oneProduct !== product;
      });

      newSelectedProducts = [];
      for (let i = 0; i < this.state.selectedProducts.length; i++) {
        let oneProduct = this.state.selectedProducts[i];
        if (oneProduct !== product) {
          newSelectedProducts.push(product);
        }
      }
    } else {
      // Should Add
      newSelectedProducts.push(product);
    }

    this.setState({
      selectedProducts: newSelectedProducts,
    });
  };

  render() {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <div className="flex max-w-3xl mx-auto w-full gap-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Apple Products</h2>
            <ul className="mt-4 flex flex-col gap-y-3">
              {["iPhone", "iPad", "Mac", "Apple TV", "HomePod"].map(
                (product) => {
                  return (
                    <ListItem
                      title={product}
                      active={this.state.selectedProducts.includes(product)}
                      onSelect={this.productSelectHandler}
                      key={product}
                    />
                  );
                }
              )}
            </ul>
            <p className="mt-3 text-slate-400 text-sm">
              {this.state.selectedProducts.length} item(s) selected
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-slate-400">
              Selected Products
            </h2>
            <p className="mt-4 text-slate-800 text-lg">
              {this.state.selectedProducts.join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
