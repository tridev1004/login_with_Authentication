import { Switch, Route } from "react-router-dom";
import AuthContext from "./Store/Auth-context";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import { Redirect } from "react-router-dom";

function App() {
  const AuthCtx = useContext(AuthContext);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!AuthCtx.isLoggedin && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {AuthCtx.isLoggedin && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
