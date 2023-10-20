import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen, assignmentId] = pathname.split("/");
  const course = db.courses.find((course) => course._id === courseId);
  const assignmentName = db.assignments.find((assignment) => assignment._id === assignmentId);
  return (
    <div>
      <ol class="breadcrumb custom-breadcrumb">
        <li class="breadcrumb-first"><a href="#"><svg class="sandwich" viewBox="0 -5 22 22">
              <path fill="red"
                d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
            c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
            s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
            c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z">
              </path>
            </svg></a></li>
        <li class="breadcrumb-item breadcrumb-second breadcrumb-not-first"><a href="#">{course.name}</a></li>
        {assignmentName === undefined
          ? <li class="breadcrumb-item active breadcrumb-not-first" aria-current="page">{screen}</li>
          : <li class="breadcrumb-item breadcrumb-not-first" aria-current="page">{screen}</li>
        }
        {assignmentName !== undefined &&
          <li class="breadcrumb-item active breadcrumb-not-first" aria-current="page">{assignmentName.title}</li>
        }
      </ol>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default Courses;


