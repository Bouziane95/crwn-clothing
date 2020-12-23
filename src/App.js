import React from "react";
import "./App.css";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header.jsx"
import SignInAndSignUp from './pages/signin-signup';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
