import { Component } from "react";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import "./index.css";
import logo from "../../assects/logo 1.png";

class Header extends Component {
  state = { currentTab: "" };
  render() {
    return (
      <>
        <nav className="navBarMainContainerBig">
          <div className="logoContainer">
            <Link to="/">
              <img className="logoImage" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="tabsContainer">
            <Link className="link" to="/">
              <button
                ic="Home"
                onClick={this.changeActive}
                type="button"
                className="navitem"
              >
                Home
              </button>
            </Link>
            <Link className="link" to="/Shop">
              <button id="Shop" type="button" className="navitem">
                Shop
              </button>
            </Link>
            <Link className="link" to="/Payment">
              <button id="Shop" type="button" className="navitem">
                Payments
              </button>
            </Link>
            <Link className="link" to="/contactUs">
              <button type="button" className="navitem">
                Contact Us
              </button>
            </Link>
            {/* <Link className="link" to="/adminPanel/login">
              <button className="navitem">AdminLogin</button>
            </Link> */}
            <Link className="link" to="/about">
              <button type="button" className="navitem">
                About
              </button>
            </Link>
          </div>
        </nav>
        <nav className="navBarMainContainerSm">
          <div className="logoContainer">
            <img className="logoImage" src={logo} alt="logo" />
          </div>
          <button type="button" className="hamButton">
            <GiHamburgerMenu className="hamMenu" />
            <ul className="listItems">
              <Link className="link" to="/">
                <li>Home</li>
              </Link>
              <Link className="link" to="/Shop">
                <li>Shop</li>
              </Link>
              <Link className="link" to="/Payments">
                <li>Payments</li>
              </Link>
              <Link className="link" to="/contactUs">
                <li>Contact us</li>
              </Link>
              <Link className="link" to="/about">
                <li>About</li>
              </Link>
            </ul>
          </button>
        </nav>
      </>
    );
  }
}

export default Header;
