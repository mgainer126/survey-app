import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Questions from "./pages/Questions/Questions";

import "./App.css";

function App() {
  return (
    <>
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
