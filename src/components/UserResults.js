import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './commons/Navbar';

class Users extends Component {
  render() {
    return (this.props.user.isResultPresent) ? (
      (this.props.user.total_count > 0) ? (
        <div>
          <Navbar />
          Total Results: {this.props.user.total_count}
          <br></br>
          <div className="search-result-row">
            <img src={this.props.user.userArray[0].avatar_url} alt=""></img>
            {this.props.user.userArray[0].login}
          </div>
        </div >
      ) : (
          <div>
            <Navbar />
            No Results Found.. Please search with a valid input
          </div>
        )
    ) : (
        <div>
          <Navbar />
          Nothing to show at the moment.. Please go to search page
        </div>
      )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(Users);
