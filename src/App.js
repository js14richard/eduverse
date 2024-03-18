import './App.css';
import './components/static_components/StaticStyes.css';
import './components/user_components/UserStyles.css';

import StaticNavbar from './components/static_components/StaticNavbar'
import Home from './components/static_components/Home'
import About from './components/static_components/About'
import Contact from './components/static_components/Contact'
import UserRegistration from './components/static_components/UserRegistration'
import UserLogin from './components/static_components/UserLogin'
import NotFound from './components/static_components/NotFound'

import { Route, Routes } from 'react-router-dom';
import ComingSoon from './components/static_components/ComingSoon';
import CoursesListing from './components/static_components/CoursesListing';
import CourseInfo from './components/static_components/CourseInfo';
import UserNavbar from './components/user_components/UserNavbar';
import Navbar from './components/static_components/StaticNavbar';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about_us" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses_listing" element={<CoursesListing />} />
        <Route path="user_registration" element={<UserRegistration />} />
        <Route path="user_login" element={<UserLogin />} />
        <Route path="coming_soon" element={<ComingSoon />} />
        <Route path="courses_listing/course_info/:course_id" element={<CourseInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
