import React from "react";

const greyLt = "#e7e6e6";
const greyDk = "#b4b1b1";

const container = {
  backgroundColor: greyDk,
  padding: "10"
};

const panel = {
  backgroundColor: greyLt,
  padding: "10",
  margin: "20"
};

const textHighlight = {
  color: "white",
  backgroundColor: "red"
};

class CommentSection extends React.Component {
  render() {
    return (
      <div className="commentSection" style={container}>
        <div>Comment Section</div>
        <div>(this is the parent container AKA root component)</div>
        <CommentCard />
        <CommentForm />
      </div>
    );
  }
}

class CommentCard extends React.Component {
  render() {
    return (
      <div className="commentCard" style={panel}>
        <Name text={this.props.name} />
        <Description text={this.props.description} />
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <span className="name" style={textHighlight}>
        Name
      </span>
    );
  }
}

class Description extends React.Component {
  render() {
    return (
      <div className="description">
        <p>
          This is the description text. Written by <Name />.
        </p>
      </div>
    );
  }
}

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log("this was typed into the text box:" + this.state.name);
  }

  handleSubmit(event) {
    alert(
      `Thanks, ${this.state.name}! Your comment was submitted: \"${
        this.state.description
      }\"`
    );
    event.preventDefault();
  }

  render() {
    return (
      <div className="commentForm" style={panel}>
        <p>This is the comment form.</p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="add name here"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Comment:</label>
            <textarea
              type="text"
              name="description"
              placeholder="add comment here"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

// This is the 'root' component.
// Ideally, this render method will include only a single component.
class App extends React.Component {
  render() {
    return <CommentSection />;
  }
}

export default App;
