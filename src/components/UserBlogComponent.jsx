import React, { Component } from 'react';
import BlogService from '../services/BlogService';

class UserBlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      userId: props.userId,
    };
  }

  componentDidMount() {
    this.fetchBlogsByUserId();
  }

  fetchBlogsByUserId = async () => {
    try {
        console.log("user id is :" + this.state.userId);
      const response = await BlogService.getBlogsByUserId(this.state.userId);
      this.setState({ blogs: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { blogs } = this.state;

    return (
      <div>
        <h2>Blogs by User</h2>
        {blogs.map((blog) => (
          <div key={blog.blogId}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default UserBlogComponent;
