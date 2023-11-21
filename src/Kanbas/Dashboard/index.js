import { React, useState, useEffect } from "react";
import db from "../Database";
import { Link } from "react-router-dom";

import * as client from "../Courses/client";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const fetchCourses = async () => {
    const courses = await client.fetchCourses();
    setCourses(courses);
  };

  const deleteCourse = async (id) => {
    try {
      await client.deleteCourse(id);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.log(error);
    }
  };

  const addCourse = async () => {
    const newCourse = await client.addCourse(course);
    setCourses([newCourse, ...courses]);
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button onClick={updateCourse}>Update</button>

      <button onClick={addCourse}>Add</button>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div class="grid-container">
          {courses.map((course, index) => (
            <div class="col-md-4 course-card grid-item">
            <div class="card h-100">
              <img src="/images/react.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>

                <h5 class="card-title">{course.name}</h5>

                <Link
                  key={course._id}
                  to={`/Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course.name}
                </Link>
                <p class="card-text">
                {`${course._id}_${course.name}`}
                </p>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Dashboard;
