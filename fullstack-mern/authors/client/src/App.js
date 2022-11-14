import "./App.css";
import axios from "axios";

function App() {
  const submitHandler = (e) => {
    e.preventDefault();
    axios.get("http://localhost:8000/hello").then((req, res) => {
      console.log("this is running");
      console.log("hello?:", req);
    });
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;
