import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

import "./App.css";
import StatsPage from "./pages/StatsPage/StatsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/questions" component={QuestionPage} />
          <Route exact path="/stats" component={StatsPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
