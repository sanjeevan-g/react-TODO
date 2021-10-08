import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"

class NavBar extends React.Component {
    render() {
        return <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__left">
                        <label className="header__brand">
                            <Link to="/">ToDoList</Link>
                        </label>
                    </div>
                    <ul className="header__right">
                        <li className="header__link">
                            <Link to="/add-todo">New ToDo</Link>
                        </li>
                        <li className="header__link">
                            <Link to="/add-note">New Notes</Link>
                        </li>
                        <li className="header__link">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    }

}

export default NavBar;