import { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assects/logo.png";
import Cookies from "js-cookie";
import moment from "moment";
import "./index.css";
import axios from "axios";

import { RiDeleteBinLine } from "react-icons/ri";

class AdminDashboard extends Component {
  state = { showQuotes: false, data: "", isLogout: false, dummy: "" };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const response = await axios.get("http://localhost:3030/getQuotes");
      this.setState({ data: response.data });
    } catch (e) {
      alert("Network err");
    }
  };

  toggleShowQuotes = () => {
    // const { showQuotes } = this.state;
    this.setState((prevState) => ({
      showQuotes: !prevState.showQuotes,
    }));
  };

  logout = () => {
    Cookies.remove("jwtToken");
    this.setState({ isLogout: true });
  };

  updateIsChecked = (id, status) => {
    const { data } = this.state;
    const updatedData = data.map((each) => {
      if (each._id === id) {
        return { ...each, isChecked: status };
      }
      return each;
    });
    this.setState({ data: updatedData });
  };

  updateDeleted = (id) => {
    const { data } = this.state;
    const filteredData = data.filter((each) => each._id !== id);
    this.setState({ data: filteredData });
  };

  delete = async (event) => {
    try {
      const id = event.target.id.split(" ")[1];
      if (id !== undefined) {
        this.setState({ dummy: " " }, this.updateDeleted(id));
        await axios.delete(`http://localhost:3030/deleteItem/${id}`);
      } else {
        console.log(`failed due to`);
      }
    } catch (e) {
      console.log(`failed due to ${e}`);
    }
  };

  isChecked = async (event) => {
    const id = event.target.id.split(" ")[1];
    const status = event.target.checked;
    this.setState({ dummy: "" }, this.updateIsChecked(id, status));
    await axios.put("http://localhost:3030/updateChecked", {
      id: event.target.id,
      status: event.target.checked,
    });
  };

  quotesContainer = () => {
    const { data } = this.state;
    const headings = [
      "S.No",
      "Name",
      "City",
      "Email",
      "Phone",
      "Mfg Year",
      "Mfg Make",
      "Mfg Model",
      "Part",
      "Engine Type",
      "Transmission Type",
      "Date",
    ];

    return (
      <div className="quotesContainer">
        {data.length > 0 ? (
          <table className="QuotesTable">
            <tr className="QuoteTableRow head">
              {headings.map((each) => (
                <th key={each} id={each}>
                  {each}
                </th>
              ))}
            </tr>

            {data.map((each, index) => (
              <tr
                key={each._id}
                className={
                  each.isChecked ? "QuoteTableRow checked" : "QuoteTableRow"
                }
              >
                <td>{index + 1}</td>
                <td>{each.name}</td>
                <td>{each.city}</td>
                <td>{each.email}</td>
                <td>{each.Phone}</td>
                <td>{each.year}</td>
                <td>{each.make}</td>
                <td>{each.model}</td>
                <td>{each.part}</td>
                <td>{each.engine_type}</td>
                <td>{each.transmission}</td>
                <td>{moment(each.date).format("DD/MM/YYYY")}</td>
                <td>
                  <input
                    id={`check ${each._id}`}
                    className="tableCheck"
                    type="checkbox"
                    onChange={this.isChecked}
                  />
                </td>
                <td>
                  <RiDeleteBinLine
                    className="deleteBtn"
                    onClick={this.delete}
                    id={`delete ${each._id}`}
                  />
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <h3>No Quotes Found</h3>
        )}
      </div>
    );
  };

  render() {
    const { showQuotes, isLogout } = this.state;
    const renderQuotes = showQuotes ? (
      this.quotesContainer()
    ) : (
      <div className="welcomeContainer">
        <h1>Welcome to Admin Dashboard</h1>
      </div>
    );
    const showQuotesClassname = showQuotes
      ? "navitem navitemactive"
      : "navitem";
    return (
      <div className="AdmindashboardMainContainer">
        {isLogout && <Navigate to="/" />}
        <nav className="adminDashNavBar">
          <div className="logoContainer">
            <img className="logoImage" src={logo} alt="logo" />
          </div>
          <div className="tabsContainer">
            <Link className="link" to="/">
              <button type="button" className="navitem">
                Home
              </button>
            </Link>
            <button
              onClick={this.toggleShowQuotes}
              type="button"
              className={showQuotesClassname}
            >
              Quote Requests
            </button>
            <button onClick={this.logout} className="navitem">
              Logout
            </button>
          </div>
        </nav>
        {renderQuotes}
      </div>
    );
  }
}

export default AdminDashboard;
