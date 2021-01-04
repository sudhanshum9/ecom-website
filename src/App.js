import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/shop/Shop.js";
import Header from './components/header/Header.js'

function App() {
  return (
    <div className="App">
    <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
