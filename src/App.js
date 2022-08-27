import { Route, Switch } from "react-router-dom";
import Principal from "./pages/Principal";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Principal } />
    </Switch>
  );
}

export default App;
