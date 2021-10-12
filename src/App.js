import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import { useGetUser } from "./hooks";

function App() {
  // eslint-disable-next-line
  const [{ user, isLoading, isError }, dispatch] = useGetUser();

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/home" /> : <Login dispatch={dispatch}/>}
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
