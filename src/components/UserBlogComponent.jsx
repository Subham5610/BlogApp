// import React, { Component } from 'react';
// import BlogService from '../services/BlogService';

// class UserBlogComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogs: [],
//       userId: props.userId,
//     };
//   }

//   componentDidMount() {
//     this.fetchBlogsByUserId();
//   }

//   fetchBlogsByUserId = async () => {
//     try {
//         console.log("user id is :" + this.state.userId);
//       const response = await BlogService.getBlogsByUserId(this.state.userId);
//       this.setState({ blogs: response.data });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   render() {
//     const { blogs } = this.state;

//     return (
//       <div>
//         <h2>Blogs by User</h2>
//         {blogs.map((blog) => (
//           <div key={blog.blogId}>
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default UserBlogComponent;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BlogService from '../services/BlogService';

const UserBlogComponent = () => {
  const { userId } = useParams();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogsByUserId();
  }, []);

  const fetchBlogsByUserId = async () => {
    try {
      const response = await BlogService.getBlogsByUserId(userId);
      setBlogs(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container d-flex flex-column" style={{ borderRight: "1px solid black", borderLeft: "1px solid black", display: "flex", alignItems: "center" }}>
      <h2 className="text-center" style={{ marginTop: "20px", fontFamily: "nunito" }}><b>Blogs by User {userId}</b></h2>
      <div className="row my-3">
        <div className="container">
          {blogs.map((blog) => (
            <div className="card" style={{ width: "40rem", padding: "10px", margin: "30px" }} key={blog.blogId}>
              <div className="card-body">
                <div className="column" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <h5 className="card-title"><b>{blog.title}</b></h5>
                  <footer className="blockquote-footer">{blog.blogId}</footer>
                </div>
                <p className="card-text">{blog.content}</p>
                <footer className="muted">
                  by <b><i>{blog.userId}</i></b> 
                </footer>
                  <footer className="muted">
                   <i>{blog.email}</i> </footer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBlogComponent;



