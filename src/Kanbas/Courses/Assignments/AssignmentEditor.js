import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { Button, Input } from 'semantic-ui-react'
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./assignmentReducer";
import * as client from "./client";

function AssignmentEditor() {
  //const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const [assignments, setAssignments] = useState([]);
  const [assignment, setAssignment] = useState({});
  const [isNew, setIsNew] = useState(false);
  const { assignmentId } = useParams();
  

  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(courseId);
    setAssignments(assignments);

    let assignment = assignments.find(
      (assignment) => assignment._id === assignmentId);
    if (assignment === undefined) {
      assignment = {
        _id: assignmentId,
        title: "New Course",
        course: courseId,
        point: 100,
        description: "Discription",
      }
      setIsNew(true);
    }
    setAssignment(assignment);
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  const handleSave = (title, description, point) => {
    console.log("Actually saving assignment TBD in later assignments");
    console.log(assignment._id);
    let newassignment = {
      _id: assignmentId,
      title: title || assignment.title,
      course: assignment.course,
      point: point || assignment.point,
      description: description || assignment.description,
    }

    if (isNew) {
      client.addAssignment(courseId, newassignment);
    } else {
      client.updateAssignment(assignmentId, newassignment);
    }
    
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="mt-3">
      <div>
        <h4>Assignment Name</h4>
        <input className="form-control" id="titleField" fluid size='massive' icon='search' placeholder={assignment.title} />
        <textarea className="form-control my-2" id="desField" style={{ width: "400px", height: "30px" }} placeholder={assignment.description} />
      </div>
      <div>
        <label className="mx-4">Points</label>
        <input placeholder={assignment.point} id="pointField" />
      </div>
      <br/>
      <div className="d-flex">
        <label className="mx-3">Assign</label>
        <div className="border mb-4 rounded-2" style={{ width: "300px" }}>
          <label className="mx-4">Due</label>
          <input className="form-control my-2" type="date" />
          <label className="mx-4">Available from</label>
          <input className="form-control my-2" type="date" />
          <label className="mx-4">Until</label>
          <input className="form-control my-2" type="date" />
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Button as={Link} className="btn btn-secondary" to={`/Kanbas/Courses/${courseId}/Assignments`}>
          Cancel
        </Button>
        <button className="btn btn-success" onClick={() => {handleSave(document.getElementById("titleField").value, document.getElementById("desField").value, document.getElementById("pointField").value)}} >
          Save
        </button>
      </div>
    </div>
  );
}


export default AssignmentEditor;