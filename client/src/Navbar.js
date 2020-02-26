import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Tabs/Home/Home'
import Apps from './Tabs/Apps/Apps'
import Contact from './Tabs/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
        <Router>
            <div class="navv">
                <nav class="d-flex justify-content-around navbar navbar-expand-lg navbar-dark">
                    <ul class="navbar-nav">
                        <li class='p-3 flex-grow-1 nav-item'><Link className='nav-link' to="/">Home</Link></li>
                        <li class='p-3 flex-grow-1 nav-item'><Link className='nav-item nav-link' to="/apps">Apps</Link></li>
                        <li class='p-3 flex-grow-1 nav-item'><Link className='nav-item nav-link' to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/apps">
                        <Apps />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Navbar
