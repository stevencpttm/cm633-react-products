import React, { useState } from "react";
import ListItem from "./ListItem";
import SharedContext from "./SharedContext";
import ThemeSwitch from "./ThemeSwitch";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const productSelectHandler = (product) => {
    let newSelectedProducts = [...selectedProducts];

    if (newSelectedProducts.includes(product)) {
      // Should Delete
      newSelectedProducts = selectedProducts.filter((oneProduct) => {
        return oneProduct !== product;
      });

      newSelectedProducts = [];
      for (let i = 0; i < selectedProducts.length; i++) {
        let oneProduct = selectedProducts[i];
        if (oneProduct !== product) {
          newSelectedProducts.push(product);
        }
      }
    } else {
      // Should Add
      newSelectedProducts.push(product);
    }

    setSelectedProducts(newSelectedProducts);
  };

  return (
    <SharedContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggleTheme,
      }}
    >
      <div className="min-h-screen flex justify-center items-center bg-slate-200">
        <ThemeSwitch className="absolute top-12 right-12" />
        <div className="flex max-w-3xl mx-auto w-full gap-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold">Apple Products</h2>
            <ul className="mt-4 flex flex-col gap-y-3">
              {["iPhone", "iPad", "Mac", "Apple TV", "HomePod"].map(
                (product) => {
                  return (
                    <ListItem
                      title={product}
                      active={selectedProducts.includes(product)}
                      onSelect={productSelectHandler}
                      key={product}
                    />
                  );
                }
              )}
            </ul>
            <p className="mt-3 text-slate-400 text-sm">
              {selectedProducts.length} item(s) selected
            </p>
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-slate-400">
              Selected Products
            </h2>
            <p className="mt-4 text-slate-800 text-lg">
              {selectedProducts.join(", ")}
            </p>
          </div>
        </div>
      </div>
    </SharedContext.Provider>
  );
}

export default App;
