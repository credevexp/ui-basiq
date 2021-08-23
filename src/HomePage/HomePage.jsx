import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions, accountsActions } from "../_actions";

class HomePage extends React.Component {
  componentDidMount() {
    const { getUsers, getAccounts } = this.props;
    getUsers();
    getAccounts();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user = {}, users = [], accounts = {} } = this.props;
    console.log("accounts", accounts);
    const { data = [] } = accounts;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h3>Hi {users?.items?.data[0]?.email}!</h3>
        <b>Your Accounts Summary:</b>
        <br></br><br></br>
        {data && (

            <table className="table">
              <thead>
                <tr>
                  <td><b>Account type</b></td>
                  <td><b>Account number</b></td>
                  <td><b>Account balance</b></td>
                </tr>
              </thead>
              <tbody>
              {data.map((accounts, index) => (
              <tr key={accounts.id}>
                <td>{accounts.name}</td>
                  <td>{accounts.accountNo}</td>
                  <td>{accounts.balance}</td>
              </tr>
            ))}
              </tbody>
            </table>

        )}
        <p>
          <Link to="/affordability" className="btn btn-primary">Check Affordability</Link>
        </p>
      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication, accounts } = state;
  const { user } = authentication;
  return { user, users, accounts };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
  getAccounts: accountsActions.getAccounts,
};

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
