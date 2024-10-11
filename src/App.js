import Details from "./Components/Details";
import Home from "./Home";
import PageNotFound from "./Components/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateList from "./CreateList";
import UpdateList from "./Components/UpdateList";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/createList">
              <CreateList />
            </Route>
            <Route exact path="/datas/:id">
              <Details />
            </Route>
            <Route exact path="/updateList/:id">
              <UpdateList />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
