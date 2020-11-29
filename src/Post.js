import React, { Component } from 'react'
import './App.css'
import Comment from './Comment';
import Author from './Author'

class Post extends Component {
  state = {
    newBody: '',
    newBodyArray: []
  }

  handleChange = event => {
    this.setState({
      newBody: event.target.value
    })
  }
  handleSave = () => {
    let newBodyArray = [...this.state.newBodyArray, this.state.newBody];
    this.setState({
      newBody: "",
      newBodyArray: newBodyArray
    });
  };
  render() {
    console.log(this.state);

    let allComments = this.props.comments.map((comment, index) => <Comment comment={comment} key={index} />
    )
    let allAuthors = this.props.authors.map((author, index) =>
      <Author author={author} key={index} />
    )
    const newBodyArrayEls = this.state.newBodyArray.map((body) => {
      return <h1>{body}</h1>;
    });
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        {allAuthors}
        <p>{this.state.newBody}</p>
        New Body: <input onChange={this.handleChange} />
        <button onClick={this.handleSave}>Save New Body</button>
        {newBodyArrayEls}
        <h4>Comments:</h4>
        <ul>{allComments}</ul>
      </div>
    );
  }
}

export default Post;
