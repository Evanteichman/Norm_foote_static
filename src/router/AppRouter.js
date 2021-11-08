import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageHome from "../pages/PageHome";
import PageFooteNotes from "../pages/PageFooteNotes";
import PageOutreach from "../pages/PageOutreach";
import PageContact from "../pages/PageContact";
import PageConcerts from "../pages/PageConcerts";
import PagePhotos from "../pages/PagePhotos";
import PageSymphony from "../pages/PageSymphony";

function AppRouter() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <PageHome />
          </Route>
          <Route path="/foote-notes">
            <PageFooteNotes />
          </Route>
          <Route path="/outreach">
            <PageOutreach />
          </Route>
          <Route path="/contact">
            <PageContact />
          </Route>
          <Route path="/concerts">
            <PageConcerts />
          </Route>
          <Route path="/photos">
            <PagePhotos />
          </Route>
          <Route path="/symphony">
            <PageSymphony />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
