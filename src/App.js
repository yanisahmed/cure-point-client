import Home from "./Pages/Home/Home/Home";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTop from "./Pages/Shared/HeaderTop/HeaderTop";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";

function App() {
  return (
    <Router>
      <HeaderTop></HeaderTop>
      <HeaderNav></HeaderNav>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>

      <Footer></Footer>
    </Router>

  );
}

export default App;
