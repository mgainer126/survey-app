import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import QuestionPage from "./pages/QuestionPage/QuestionPage";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/questions" component={QuestionPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
