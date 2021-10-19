import Home from "./Pages/Home/Home/Home";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderTop from "./Pages/Shared/HeaderTop/HeaderTop";
import HeaderNav from "./Pages/Shared/HeaderNav/HeaderNav";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Services from "./Pages/Services/Services/Services";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Details from "./Pages/Services/Details/Details";

function App() {
  return (
    <AuthProvider>
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
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute exact path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/services/:id">
            <Details></Details>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
