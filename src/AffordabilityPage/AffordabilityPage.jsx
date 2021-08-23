import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Confetti from 'react-confetti';
import { Bar } from 'react-chartjs-2';
import * as _ from 'lodash';


import { userActions, affordabilityActions } from "../_actions";

class AffordabilityPage extends React.Component {

  state = {
    chartData : {}
  }

  componentDidMount() {
    const { getUsers, createAffordability, getAffordability } = this.props;
    getUsers();
    createAffordability();
    getAffordability();
  }

 componentDidUpdate(prevProps) {
  const { affordability } = this.props;
  const  { affordability: prevAffordability } = prevProps;
  if(!_.isEqual(affordability, prevAffordability)) {
    if(prevAffordability && prevAffordability.summary) {
      const chartData = this.formatChartData(prevAffordability.summary)
      this.setState({ chartData });
    }
  }
 }

  formatChartData(summary) {
    const requiredColumns = [
      { columnID: 'assets', columnTitle: 'Assets'}, 
      { columnID: 'liabilities', columnTitle: 'Liabilities'},
      { columnID: 'netPosition', columnTitle: 'Net Position'}, 
      { columnID: 'creditLimit', columnTitle: 'Credit Limit'},
      { columnID: 'expenses', columnTitle: 'Expenses'},
      { columnID: 'savings', columnTitle: 'Savings'}, 
      { columnID: 'loanRepaymentsMonthly', columnTitle: 'Repayments'},
    ]
    console.log("SUmmary", summary);
      const data =  _.reduce(summary, (result, value, key) => {
        let column = _.find(requiredColumns, (columnName) => {
          return columnName.columnID === key;
        });
        console.log('Column', column);
        if(column) {
          if(!result.labels)
            result.labels = []
          result.labels.push(column.columnTitle);
          if(!result.datasets) {
            result.datasets = [];
            result.datasets.push({
              data: [value],
              label: 'Summary of Affordability'
            });
          } else {
            result.datasets[0].data.push(value);
          } 
        }
        return result;
      }, {});
  
      console.log('Chart data',data);
      return data;
  }

  handleDeleteUser(id) {
    return (e) => this.props.deleteUser(id);
  }

  render() {
    const { user = {}, users = [], affordability = {}, uiState = {} } = this.props;
    const { chartData: data } = this.state;
    console.log("affordability", affordability);
    const { summary = {} } = affordability;
    const { loanAmount} = uiState;
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };
    
    return (
      <div className="col-md-6 col-md-offset-3">
        <Confetti      width={500}      height={500}    />
        <h3>Congratulations {users?.items?.data[0]?.email}!</h3>
        <b>You're eligible to get the Home Loan {loanAmount}</b>
        <br></br><br></br>

        <Bar data={data} options={options} />


        {users.loading && <em>Loading users...</em>}
        {users.error && (
          <span className="text-danger">ERROR: {users.error}</span>
        )}
        {}



      </div>
    );
  }
}

function mapState(state) {
  const { users, authentication, affordability, uiState } = state;
  const { user } = authentication;
  return { user, users, affordability, uiState };
}

const actionCreators = {
  getUsers: userActions.getAll,
  deleteUser: userActions.delete,
  createAffordability: affordabilityActions.createAffordability,
  getAffordability: affordabilityActions.getAffordability,
};

const connectedHomePage = connect(mapState, actionCreators)(AffordabilityPage);
export { connectedHomePage as AffordabilityPage };
