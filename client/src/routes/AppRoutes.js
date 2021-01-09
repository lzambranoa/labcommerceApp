import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { SearchBar } from "../components/SearchBar";

export default function AppRoutes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={SearchBar} />
                </Switch>
            </div>
        </Router>
    );
}

