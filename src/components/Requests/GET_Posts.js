import React, { Component } from "react";
import axios from "axios";

class GET_Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errMessage: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      this.setState({ posts: response.data });
      console.log(response);
    } catch (err) {
      console.log(err);
      this.setState({ errMessage: "Problem During requesting" });
    }
  }

  //  Alternative Approach
  //   componentDidMount(){
  //     axios.get(
  //         "https://jsonplaceholder.typicode.com/posts"
  //       ).then(response => {
  //         this.setState({ posts: response.data });
  //       })
  //       .catch(err => {
  //           console.log(err);
  //           this.setState({ errMessage: "Problem During requesting" });
  //       })
  //   }

  render() {
    const { posts, errMessage } = this.state;
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errMessage ? <div>{errMessage}</div> : null}
      </div>
    );
  }
}

export default GET_Posts;
