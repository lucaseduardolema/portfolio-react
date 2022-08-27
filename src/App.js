import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Principal from "./pages/Principal";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Principal } />
      <Route path='*' component={ NotFound } />
    </Switch>
  );
}

export default App;
