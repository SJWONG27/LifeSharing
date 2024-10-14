import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import MainPage from './main page/MainPage';
import BlogPage from './blog page/BlogPage';
import AdminPage from './admin page/AdminPage';
import Sidenav from './layout/side nav/Sidenav';

function App() {

  return (
    <div className='mainContainer'>
      <Router>
      <Sidenav />
        <div className='contentContainer'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/blogPage' element={<BlogPage />} />
            <Route path='/adminPage' element={<AdminPage />} />
          </Routes>
        </div>

      </Router>
    </div>
  )
}

export default App
