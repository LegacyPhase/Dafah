import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    var value = false;
    if (window.localStorage.length > 0) {
      value = true;
    } else {
      value = false;
    }
    return (
      <div>
        {value === false ? (
          <nav
            style={{ color: "red" }}
            className="navbar navbar-dark bg-dark navbar-expand-lg"
          >
            <Link to="/Homepage" className="navbar-brand">
              <img
                src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-0/p600x600/144494914_943026146504585_7994889188697286598_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeHs98EPIUgxPCBcBDo9x5ZE0SxRFJieO1LRLFEUmJ47Upq-_9ZIUpCAFknKqA3D_-7M3iGkKn8OyR0eCCI_jK-W&_nc_ohc=8nZowFc4V1EAX__sjn6&_nc_ht=scontent.famm2-3.fna&tp=6&oh=6917b330cd7c01236b55cbe08485eadd&oe=603C6512
                "
                width="50"
              ></img>
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
                {/* <li className="navbar-item" onClick={logout}>
                <Link to="/logout" className="nav-link">
                  Log out
                </Link>
              </li> */}
              </ul>
            </div>
          </nav>
        ) : (
          <nav
            style={{ color: "red" }}
            className="navbar navbar-dark bg-dark navbar-expand-lg"
          >
            <Link to="/Homepage" className="navbar-brand">
              <img
                src="https://scontent.famm2-3.fna.fbcdn.net/v/t1.0-0/p600x600/144494914_943026146504585_7994889188697286598_o.jpg?_nc_cat=107&ccb=2&_nc_sid=730e14&_nc_eui2=AeHs98EPIUgxPCBcBDo9x5ZE0SxRFJieO1LRLFEUmJ47Upq-_9ZIUpCAFknKqA3D_-7M3iGkKn8OyR0eCCI_jK-W&_nc_ohc=8nZowFc4V1EAX__sjn6&_nc_ht=scontent.famm2-3.fna&tp=6&oh=6917b330cd7c01236b55cbe08485eadd&oe=603C6512
                "
                width="50"
              ></img>
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
                {/* <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li> */}
                <li className="navbar-item" onClick={logout}>
                  <Link to="/logout" className="nav-link">
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </div>
    );
  }
}
function logout() {
  window.localStorage.clear();
  window.location = "/Homepage";
}
