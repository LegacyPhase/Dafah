import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          style={{ color: "red" }}
          className="navbar navbar-dark bg-dark navbar-expand-lg"
        >
         
          <Link to="/Homepage" className="navbar-brand">
          <img src="https://scontent.famm6-1.fna.fbcdn.net/v/t1.0-0/p526x296/130718705_234742021327237_7787704828151028395_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=PIRTUk7cZygAX9-gYuB&_nc_ht=scontent.famm6-1.fna&tp=6&oh=daff5e999197a12864302f3a5ef19e3c&oe=5FF749C4" width="50"></img>
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/AddItems" className="nav-link">
                  Add Items
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/ItemsList" className="nav-link">
                  Clothes
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="navbar-item" onClick={logout}>
                <Link to="/logout" className="nav-link">
                  Log out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

function logout() {
  window.localStorage.clear();
  window.location = "/Homepage";
}
