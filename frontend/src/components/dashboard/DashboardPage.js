import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import UpcomingOpportunities from "../feeds/UpcomingOpportunities";
import AllOpportunities from "../feeds/AllOpportunities";
import InterestedOpportunities from "../feeds/InterestedOpportunities";
import CreatedOpportunities from "../feeds/CreatedOpportunities";

class DashboardPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            activeTab: 0,
            search: '',
            view: 'list'
        };
    }

    changeTab = index => {
        this.setState({
            activeTab: index
        });
    };

    handleChange = event => {
        this.setState({search: event.target.value});
    };

    changeView = option => {
        this.setState({
            view: option
        })
    };

    render() {
        return (
            <div className="container">
                <h1 className={"text-center"}>Dashboard</h1>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link
                            to={"/dashboard/"}
                            onClick={() => this.changeTab(0)}
                            className={"nav-link" + (this.state.activeTab === 0 ? " active" : "")}>
                            Opportunities
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/dashboard/myopportunities"}
                            onClick={() => this.changeTab(1)}
                            className={"nav-link" + (this.state.activeTab === 1 ? " active" : "")}>
                            My Opportunities
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/dashboard/interestedin"}
                            onClick={() => this.changeTab(2)}
                            className={"nav-link" + (this.state.activeTab === 2 ? " active" : "")}>
                            Opportunities I'm Interested In
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={"/dashboard/upcoming"}
                            onClick={() => this.changeTab(3)}
                            className={"nav-link" + (this.state.activeTab === 3 ? " active" : "")}>
                            Upcoming Opportunities
                        </Link>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-9">
                        <Switch>
                            <Route path={"/dashboard/myopportunities"}>
                                <h1>My Opportunities</h1>
                                <CreatedOpportunities search={this.state.search} view={this.state.view}/>
                            </Route>
                            <Route path={"/dashboard/interestedin"}>
                                <h1>Interested in</h1>
                                <InterestedOpportunities search={this.state.search} view={this.state.view}/>
                            </Route>
                            <Route path={"/dashboard/upcoming"}>
                                <h1>Upcoming</h1>
                                <UpcomingOpportunities search={this.state.search} view={this.state.view}/>
                            </Route>
                            <Route path={"/dashboard"}>
                                <h1>Opportunities</h1>
                                <AllOpportunities search={this.state.search} view={this.state.view}/>
                            </Route>
                        </Switch>
                    </div>
                    <div className="col-3">
                        <div className="card mt-2">
                            <div className="card-header text-center">
                                <p className="h5 mb-0">Options</p>
                            </div>
                            <div className="card-body">
                                <form
                                    onSubmit={e => {
                                        e.preventDefault()
                                    }}
                                    className="mb-0">
                                    <div className="form-group">
                                        <input
                                            name="search"
                                            type="text"
                                            className="form-control"
                                            id="searchBox"
                                            value={this.state.search}
                                            onChange={this.handleChange}
                                            placeholder="Search"/>
                                    </div>
                                    <div className="form-group">
                                        <p className="h5">View</p>
                                        <div className="form-check">
                                            <label>
                                                <input
                                                    onChange={() => this.changeView('list')}
                                                    checked={this.state.view === 'list'}
                                                    type="radio"
                                                    value={'list'}
                                                    id={"list"}
                                                    name="view"/> List
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label>
                                                <input
                                                    onChange={() => this.changeView('card')}
                                                    checked={this.state.view === 'card'}
                                                    type="radio"
                                                    value={'card'}
                                                    id={"card"}
                                                    name="view"/> Card
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <p className="h5">Filter By Language</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardPage;