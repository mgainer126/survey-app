import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Questions from "./pages/Questions";

import "./App.css";

function App() {
  return (
    <>
      {/* <Router>
        <Switch>
          <Route exact path="/"> component={Main} />

          <Route exact path="questions" component={Questions}>
            <Questions />
          </Route>
        </Switch>
      </Router> */}

      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/questions" component={Questions} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
