import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";
import ResumePage from "./ResumePage";

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/LandingPage" component={LandingPage} />
        <Route path="/ContactPage" component={ContactPage} />
        <Route path="/ProjectsPage" component={ProjectsPage} />
        <Route path="/ResumePage" component={ResumePage} />
    </Switch>
)

export default Main;