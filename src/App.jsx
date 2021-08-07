import React from "react";
import {Switch, Route } from "react-router-dom";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Todo from "./pages/Todo";
import Profile from "./pages/profile/Profile";
import Users from "./pages/users/Users";
import Dashboard from "./pages/dashboard/Dashboard";
import CreateUser from "./pages/users/CreateUser";
import Tasks from "./pages/Tasks/Tasks";
import Reports from "./pages/Reports/Reports";

function App() {
  return (
      <Switch>
        <Route exact path="/forgot/password" component={ForgotPassword} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/users/create" component={CreateUser} />
        <Route exact path="/todos" component={Todo} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/tasks" component={Tasks} />
        <Route exact path="/" component={Dashboard} />
        <Route path="**" component={Dashboard} />
      </Switch>
  );
}

export default App;
