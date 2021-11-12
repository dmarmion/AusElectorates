import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Map from "./components/Map"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Map/>
      </div>
    </div>
  );
}

export default App;
