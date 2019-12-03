import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import UpcomingOpportunities from "../feeds/UpcomingOpportunities";
import AllOpportunities from "../feeds/AllOpportunities";
import SearchAndFilterOptions from "../common/SearchAndFilterOptions";

class ExplorePage extends React.Component {

    state = {
        activeTab: this.props.location.pathname,
        search: '',
        view: 'list',
        languageFilter: []
    };

    static getDerivedStateFromProps(props, state) {
        if (props.location.pathname !== state.activeTab) {
            return {
                activeTab: props.location.pathname
            }
        }
        return null;
    }

    changeTab = tabName => {
        this.setState({
            activeTab: tabName
        });
    };

    render() {
        return (
            <div className="container">
                <h1 className={"text-center"}>Explore</h1>
                <div className="row my-2">
                    <SearchAndFilterOptions
                        searchCallback={(search) => {
                            this.setState({search: search})
                        }}
                        viewCallback={(view) => {
                            this.setState({view: view})
                        }}
                        filterCallback={(filter) => {
                            this.setState({languageFilter: filter})
                        }}/>
                </div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            to={"/explore"}
                            onClick={() => this.changeTab("/explore")}
                            className={"nav-link" + (this.state.activeTab === "/explore" ? " active" : "")}>
                            Opportunities
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/explore/upcoming"}
                            onClick={() => this.changeTab("/explore/upcoming")}
                            className={"nav-link" + (this.state.activeTab === "/explore/upcoming" ? " active" : "")}>
                            Upcoming Opportunities
                        </Link>
                    </li>
                </ul>
                <div className="row mt-2">
                    <Switch>
                        <Route path={"/explore/upcoming"}>
                            <UpcomingOpportunities filter={this.state.languageFilter} search={this.state.search} view={this.state.view}/>
                        </Route>
                        <Route path={"/explore"}>
                            <AllOpportunities filter={this.state.languageFilter} search={this.state.search} view={this.state.view}/>
                        </Route>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default ExplorePage;