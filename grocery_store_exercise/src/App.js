import "./App.css";
import GroceryItem from "./Components/GroceryItem";

import { itemsList } from "./ItemsList";

function App() {
  return (
    <div className="App">
      <section className="Main-section">
        <GroceryItem item={itemsList.eggs} />
        <GroceryItem item={itemsList.bananas} />
        <GroceryItem item={itemsList.bread} />
        <GroceryItem item={itemsList.strawberries} />
      </section>
    </div>
  );
}

export default App;
