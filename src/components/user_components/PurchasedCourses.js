import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function PurchasedCourses() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const userId = useSelector(state => state.auth.user.id);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/users/${userId}`);
        const userData = response.data;
        
        if (userData && userData.purchasedCourses) {
          setPurchasedCourses(userData.purchasedCourses);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        if (purchasedCourses && purchasedCourses.length > 0) {
          const coursesData = await Promise.all(
            purchasedCourses.map(async courseId => {
              const response = await axios.get(`http://localhost:3001/courses/${courseId}`);
              return response.data;
            })
          );
          setCourses(coursesData);
        }
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    };

    fetchCourses();
  }, [purchasedCourses]);

  const startLearning = () => {
    window.alert("Happy Learning!");
  };

  return (
    <div className="container purchased_courses_section">
      <h2 className="mb-4 mt-5 text-center">Purchased Courses</h2>
      <div className="row d-flex justify-content-center">
        {courses.map(course => (
          <div className='col-lg-4 mt-5' key={course.id}>
            <div className="card">
              <img src={course.image_url} className="card-img-top course_card_image2" alt={course.title} />
              <div className="card-body">
                <h5 className="card-title text-center">{course.title}</h5>
                <button className='col-lg-12 btn btn-success mt-3 text-center' onClick={startLearning}>Start Learning</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
