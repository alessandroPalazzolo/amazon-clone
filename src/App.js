import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/home/home";
import User from "./pages/user/user";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Footer from "./shared/Navigation/Footer";

function App() {
  return (
     <>
        <MainNavigation />

        <Switch>
           <Route exact path="/">
              <Home />
           </Route>
           <Route path="/address">
           </Route>
           <Route path="/account">
              <User />
           </Route>
           <Route path="/resi">
           </Route>
           <Route path="/carrello">
           </Route>
           <Route path="/lower-header">
           </Route>

           <Route path="/random-category">
           </Route>
           <Redirect to="/"></Redirect>
        </Switch>

        <Footer/>
     </>
  );
}

export default App;
