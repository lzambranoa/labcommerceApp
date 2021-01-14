import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { HomeScreen } from "../pages/HomeScreen";
import { SearchBar } from "../components/SearchBar";
import { CatalogueScreen } from "../pages/CatalogueScreen";

export default function AppRoutes() {
    return (
        <Router>
            <div>
                <SearchBar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/:params" component={CatalogueScreen} />
                </Switch>
            </div>
        </Router>
    );
}

