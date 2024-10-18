import PageNotFound from "./components/PageNotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateList from "./pages/CreateList";
import Details from "./components/Details";
import UpdateList from "./components/UpdateList";

function App() {
  return (
    <Router>
      <div className="App h-screen">
        <Navbar />
        <div className="content text-xl">
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
