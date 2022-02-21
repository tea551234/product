import "./App.css";
import Japan from "./components/Japan";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Japan /> */}

        <BrowserRouter>
          <Routes>
            <Route path="/Japan" component={Japan} exact />
            <Route path="/Japan" component={Japan} exact />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
