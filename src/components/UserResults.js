import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resultsUnmount } from '../actions';
import Navbar from './commons/Navbar';

class Users extends Component {

  componentWillUnmount() {
    this.props.resultsUnmount();
  }

  render() {
    var profile_url;
    (this.props.user.isResultPresent) ?
      (
        profile_url = `https://www.github.com/${this.props.user.userArray[0].login}`
      ) : (
        profile_url = ''
      )

    return (this.props.user.isResultPresent) ? (
      (this.props.user.total_count > 0) ? (
        <div>
          <Navbar />
          Total Results: {this.props.user.total_count}
          <br></br>
          <div className="search-result-row">
            <img src={this.props.user.userArray[0].avatar_url} alt=""></img>
            <a href={profile_url}>{this.props.user.userArray[0].login}</a>
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

export default connect(mapStateToProps, { resultsUnmount })(Users);
