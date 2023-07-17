import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogComponent from './components/BlogComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateBlogComponent from './components/CreateBlogComponent';
import UserBlogComponent from './components/UserBlogComponent';
function App() {
  return (
    <div>
      <Router>
          <div className='container'>
              <div className='container'>
                <Routes>
                  <Route path="/" element={<BlogComponent/>}/>
                  <Route path="/blogs" element={<BlogComponent/>}/>
                  <Route path="/add-blog" element={<CreateBlogComponent/>}/>
                  <Route path="/user-blog" element={<UserBlogComponent/>}/>
                </Routes>
              </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
