import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import ElectorateMap from "./components/ElectorateMap"

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <ElectorateMap/>
      </div>
    </div>
  );
}

export default App;
