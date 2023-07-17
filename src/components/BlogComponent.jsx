
import React, { Component } from 'react'
import BlogService from '../services/BlogService';
import { Link } from 'react-router-dom';
class BlogComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs:[]
        }
    }
    componentDidMount()
    {
        BlogService.getBlogs().then((res)=>{
            this.setState({blogs: res.data});
        })
    }
    addBlog(){
        this.props.history.push('/add-blog');
    }
    render() {
        return (
            <div className='container d-flex flex-column' style={{borderRight:"1px solid black", borderLeft: "1px solid black", display: "flex", alignItems:"center"}}>
                <h2 className="text-center" style={{marginTop: "20px", fontFamily: "nunito"}}><b>Blog Dashboard</b></h2>
                <div className='row' style={{marginTop: "20px",width: "700px"}}>
                    <Link to='/add-blog' className='btn btn-primary'>Add Blog</Link>
                </div>
                <div className='row my-3'>
                                <div className="container">
                                
                                { this.state.blogs.map(blog=>
                                    <div className="card" style={{width: "40rem",padding: "10px", margin:"30px"}}>
                                    <div className="card-body">
                                    <div className='column' style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                    <h5 className="card-title"><b>{blog.title}</b></h5>
                                    <footer className="blockquote-footer">{blog.blogId}</footer>
                                    </div>
                                    <p className="card-text">{blog.content}</p>
                                        <footer className="muted">
                                            <Link to={`/user-blog?userId/${blog.userId}`} className='muted'>by <b><i>{blog.userId}</i></b> </Link></footer>
                                    </div>
                                </div>
                                )
                                }
                                </div>
                </div>
            </div>
        )
    }
}
export default BlogComponent;