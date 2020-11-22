import React, { Component } from 'react';
import { connect } from 'react-redux';
import { githubUser, onInputChange } from '../actions';
import Navbar from './commons/Navbar';

class Search extends Component {
  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    const handleOnClick = () => {
      this.props.githubUser(this.props.input.inputValue);
    }

    const handleOnChange = (e) => {
      this.props.onInputChange(e.target.value);
    }

    return (
      <div>
        <Navbar />
        < br ></br >
        <div>
          <form onSubmit={e => handleSubmit(e)}>
            <input type="text" id="user-name" placeholder="search" onChange={e => handleOnChange(e)}></input>
            <button onClick={handleOnClick}>Submit</button>
          </form>
        </div>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { githubUser, onInputChange })(Search);
