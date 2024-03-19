import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../redux/actions/courseActions';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { addToCart } from '../../redux/actions/cartAction'; // Import addToCart action creator

const CoursesListing = ({ fetchCourses, courses }) => {
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const [filter, setFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('');
  const [showUpcoming, setShowUpcoming] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const user = useSelector(state => state.auth.user); 
  const dispatch = useDispatch();


  const handleAddToCart = (courseId) => {
    if (!user) {
      alert('Please log in to add courses to your cart.');
      return;
    }
    dispatch(addToCart(user.id, courseId));
  };

  const CourseCard = ({ course }) => {
    return (
      <div className='col-lg-4 col-md-6 mb-4'>
        <div className="card card_scale">
          <img className="card-img-top course_card_image" src={course.image_url} alt="Course" />
          <div className="card-body">
            <h6 className="card-text text-secondary">{course.category}</h6>
            <h5 className='card-title'>{course.title}</h5>
            <p className="card-text text-secondary">Price: ${course.price}</p>
            <p className="card-text text-secondary">Rating: {course.rating.rate}</p>
            <div className='text-center'>
              {course.isUpcoming ? (
                <button className='btn btn-danger' disabled>Upcoming</button>
              ) : (
                <button onClick={() => handleAddToCart(course.id)} className='btn btn-success'>Add to cart</button> 
              )}
              &nbsp;&nbsp;&nbsp;
              <Link to={`course_info/${course.id}`} className='btn btn-warning ml-2'>More details</Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const filteredCourses = courses.filter(course => {
    const categoryMatch = filter === 'All' || course.category === filter;
    const ratingMatch = !ratingFilter || course.rating.rate >= parseInt(ratingFilter);
    const upcomingMatch = showUpcoming ? true : !course.isUpcoming;
    const searchMatch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && ratingMatch && upcomingMatch && searchMatch;
  });

  return (
    <div>
      <div className='container course_listing_page_wrapper'>
        <div className='row mt-5'>
          <div className='filter_section card col-lg-3 col-md-6 mb-4'>
            <div className="mb-3 mt-4">
              <h5>Search Courses</h5>
              <input
                type="search"
                className="form-control"
                placeholder="Search by title or description"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <h5>Filter by Category</h5>
            <select className="form-select mb-3" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Full Stack Development">Full Stack Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Designing">Graphic Designing</option>
            </select>
            <h5>Filter by Rating</h5>
            <select className="form-select mb-3" value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
              <option value="">All Ratings</option>
              <option value="4">4 Stars & Above</option>
              <option value="3">3 Stars & Above</option>
              <option value="2">2 Stars & Above</option>
              <option value="1">1 Star & Above</option>
            </select>
            
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={showUpcoming}
                onChange={() => setShowUpcoming(!showUpcoming)}
                id="upcomingCheckbox"
              />
              <label className="form-check-label" htmlFor="upcomingCheckbox">
                Show Upcoming Courses
              </label>
            </div>
          </div>
          <div className='course_listing_container col-lg-9'>
            <div className='row'>
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const mapStateToProps = state => ({
  courses: state.courses.courses
});

export default connect(mapStateToProps, { fetchCourses })(CoursesListing);
