import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

function Orders() {
  const ordersString = localStorage.getItem("ordesList");
  const orders = JSON.parse(ordersString);
  if (orders !== null) {
    return (
      <div className="OrdersContainer">
        <Link className="link" to="/">
          <p className="homeButton">Home</p>
        </Link>
        <h1>Orders</h1>
        <table className="tables">
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Brand</th>
            <th>Year of Manfacture</th>
          </tr>
          {orders.map((each) => (
            <tr>
              <td>{each[0]}</td>
              <td>{each[1]}</td>
              <td>{each[3]}</td>
              <td>{each[2]}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
  if (orders === null) {
    return (
      <div className="OrdersContainer">
        <Link className="link" to="/">
          <p className="homeButton">Home</p>
        </Link>
        <h1>No orders found</h1>
      </div>
    );
  }
}

export default Orders;
