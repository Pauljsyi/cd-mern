import "./App.css";
import DisplayAllProducts from "./components/DisplayAllProducts";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <DisplayAllProducts />
      <Form />
    </div>
  );
}

export default App;
