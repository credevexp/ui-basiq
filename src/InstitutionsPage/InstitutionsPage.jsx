import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions, institutionsActions } from "../_actions";

class InstitutionsPage extends React.Component {
  componentDidMount() {
    const { getUsers, getInstitutions } = this.props;
    getUsers();
    getInstitutions();
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user = {}, users = [], institutions = {} } = this.props;
    console.log("institu", institutions);
    const { data = [] } = institutions;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>Hi {user.firstName}!</h1>
        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        
        {data && (
          <ul>
            {data.map((institution, index) => (
              <li key={institution.id}>
                <img
                  width="36px"
                  height="36px"
                  src={institution.logo.links.square}
                />
                &nbsp;&nbsp;<a href="/login" target="_top">{institution.name + " - " + institution.shortName}</a>

              </li>
            ))}
          </ul>
        )}

      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication, institutions } = state;
  const { user } = authentication;
  return { user, users, institutions };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
  getInstitutions: institutionsActions.getInstitutions,
};

const connectedInstitutionsPage = connect(mapState, actionCreators)(InstitutionsPage);
export { connectedInstitutionsPage as InstitutionsPage };
