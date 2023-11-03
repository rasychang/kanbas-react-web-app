import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../Database";
import { Button, Input } from 'semantic-ui-react'
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./assignmentReducer";

function AssignmentEditor() {
  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const { assignmentId } = useParams();
  let assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSave = (title, description, point) => {
    console.log("Actually saving assignment TBD in later assignments");
    console.log(assignment._id);
    let newassignment = {
      _id: assignment._id,
      title: title || assignment.title,
      course: assignment.course,
      point: point || assignment.point,
      description: description || assignment.description,
    }

    let aaa = assignments.find((a) => a._id === newassignment._id);
    dispatch(updateAssignment({ ...newassignment }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  if (assignment === undefined) {
    assignment = {
      _id: new Date().getTime().toString(),
      title: "New Course",
      course: courseId,
      description: "Discription",
      point: 100,
    }
  }

  return (
    <div className="mt-3">
      <div>
        <h4>Assignment Name</h4>
        <input className="form-control" id="titleField" fluid size='massive' icon='search' placeholder={assignment.title} />
        <textarea className="form-control my-2" id="desField" style={{ width: "400px", height: "30px" }} placeholder="Discription" />
      </div>
      <div>
        <label className="mx-4">Points</label>
        <input placeholder="100" id="pointField" />
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