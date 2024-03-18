import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function CourseInfo() {
  const { course_id } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    // Fetch course data from the API endpoint
    axios.get(`http://localhost:3001/courses/${course_id}`)
      .then(response => {
        setCourseData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [course_id]);



  if (!courseData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container course_display text-center'>
      <div className='row mt-5'>
        <div className='col-lg-12 col-md-6 mb-4'>
          <div className="card">
            <img className="card-img-top mt-2 course_detail_image" src={courseData.image_url} alt="Course" />
            <div className="card-body">
              <h6 className="card-text text-secondary">Category</h6>
              <h5 className='card-title'>{courseData.category}</h5>
              <p className="card-text text-secondary">Title: {courseData.title}</p>
              <p className="card-text text-secondary">{courseData.description}</p>
              <p className="card-text text-secondary">Price: ${courseData.price}</p>
              <p className="card-text text-secondary">Rating: {courseData.rating.rate}</p>
              {courseData.isUpcoming ? (
                <button className='btn btn-success' disabled>Upcoming Course</button>
              ) : (
                <button className='btn btn-success'>Add to cart</button>
              )}
              &nbsp;&nbsp;&nbsp;
              <Link to='/courses_listing' className='btn btn-danger'>Back to Courses</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
