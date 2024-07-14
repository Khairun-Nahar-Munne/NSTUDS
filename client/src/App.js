
import TopBar from "./components/topbar/TopBar";
import Login1 from "./pages/login1/Login1";
import Register from "./pages/register/Register";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Home1 from "./pages/home/Home1"
import Single from "./pages/single/Single";
import Blog1 from "./pages/blog/Blog1";
import Alumni from "./pages/alumni/Alumni";
import Acheivement from "./pages/acheivement/Acheivement";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Resources from "./pages/resources/Resources";
import Contact from "./pages/contact/Contact";
import Ec2 from "./pages/ec1/Ec2";
import Event from "./pages/event/Event";
import Gallery from "./pages/gallery/Gallery";
import EC4 from "./pages/ec4/EC4";
import EC5 from "./pages/ec5/EC5";
import EC6 from "./pages/ec6/EC6";



function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home1 />
        </Route>
        <Route exact path="/ec1">
          <Ec2 />
        </Route>
        <Route exact path="/ec4">
          <EC4 />
        </Route>
        <Route exact path="/ec5">
          <EC5 />
        </Route>
        <Route exact path="/ec6">
          <EC6 />
        </Route>
        <Route exact path="/alumni">
        <Alumni/>
        </Route>
        <Route exact path="/acheivement">
        <Acheivement/>
        </Route>
        <Route exact path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/blog">
          {user ? <Blog1 /> : <Register />}

        </Route>

        <Route path="/contact">
          {user ? <Contact /> : <Register />}
        </Route>
        <Route path="/resources">
          {user ? <Resources /> : <Register />}
        </Route>
        <Route path="/event">
          {user ? <Event/> : <Register />}
        </Route>
        <Route path="/register">
          {user ? <Home1 /> : <Register />}
        </Route>

        <Route path="/login">
          {user ? <Home1 /> : <Login1 />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Register />}
        </Route>
        <Route path="/settings">
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>

      </Switch>
      

    </Router>


  );
}

export default App;
