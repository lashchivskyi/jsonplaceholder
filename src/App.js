import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "../src/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Posts from "./components/Posts";
import pagePostAndComments from "./components/PostsAndComments";
import UsersPage from "./components/Users";
// import Comments from "./components/Comments";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/:id" component={pagePostAndComments} />
          <Route exact path="/users/:id" component={UsersPage} />
          {/* <Route exact path="/comments" component={Comments} /> */}
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
