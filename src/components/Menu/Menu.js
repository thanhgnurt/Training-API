import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
const menus = [
    {
        name: "Home",
        to: "/",
        exact: true,

    },
    {
        name: "Product manager",
        to: "/product-list",
        exact: false,

    },

];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? "active" : "";
                return (
                    <li className={`nav-item ${active}`}>
                        <Link
                            className='nav-link'
                            to={to}>
                            {label}
                        </Link>

                    </li>
                )
            }}
        />
    )
}

export default class Menu extends Component {
    showMenus = (menus) => {
        let result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink

                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result

    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/home">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>

        )
    }

}
