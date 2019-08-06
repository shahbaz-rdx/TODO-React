import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addPost } from "../actions/postActions";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newPost = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.addPost(newPost);
  };

  render() {
    return (
      <div>
        <h1>Add POST</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="body">Body</label>
            <br />
            <textarea
              name="body"
              id="body"
              value={this.state.body}
              onChange={this.onChange}
            />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

/* const mapStateToProps = state => ({

}) */

export default connect(
  null,
  { addPost }
)(PostForm);
