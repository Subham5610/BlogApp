
import axios from 'axios'

const BLOG_API_BASE_URL = "http://localhost:8080/blogs";
class BlogService{

    getBlogs(){
        return axios.get(BLOG_API_BASE_URL);
    }
    createBlog(blog){
        return axios.post(BLOG_API_BASE_URL,blog);
    }
    
    getBlogsByUserId = (userId) =>
    axios.get(`${BLOG_API_BASE_URL}/userId/${userId}`);
  



}

export default new BlogService()