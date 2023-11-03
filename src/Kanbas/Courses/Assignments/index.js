import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import { View } from 'react-native';
import "./index.css";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentReducer";
import { useSelector, useDispatch } from "react-redux";
import { Button, Icon, Input, Divider } from 'semantic-ui-react'
import { BiPlus } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs'
import { MdOutlineAssignment } from 'react-icons/md'
import { BiCheckCircle } from 'react-icons/bi'

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="mx-4">
      <div className="d-flex justify-content-between">
        <div>
          <input icon='search' class="form-control assign" placeholder='Search for Assignment'/>
        </div>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary">
            <div className="d-flex">
              <BiPlus className='btn-icon' />
              Group
            </div>
          </button>
          <button className="btn btn-danger" onClick={() => {navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);}}>
            <div className="d-flex">
              <BiPlus className='btn-icon' />
              Assignment
            </div>
          </button>
          <button className="btn btn-secondary">
            <BsThreeDotsVertical className='btn-icon' />
          </button>
        </div>
      </div >
      <hr />
      <div>
        <h2>Assignments for course {courseId}</h2>
        <div className="list-group">
          {courseAssignments.map((assignment) => (
            <div className="d-flex justify-content-between list-group-item no_under">
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="assignmentlink"
              >
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}> 
                <BsThreeDotsVertical className='btn-icon icon-small BsThreeDotsVertical' />
                <MdOutlineAssignment className='btn-icon sheet iconright' />
                
                <View style={{ flexDirection: 'col' }}> 
                <b>{assignment._id} - {assignment.title}</b>
                Multiple Module | {assignment.point} pts | description: {assignment.description}
                </View>
                </View>
              </Link>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <BiCheckCircle className='btn-icon sheet iconright' />
                <BsThreeDotsVertical className='btn-icon icon-small BsThreeDotsVertical' />
                <button className="btn btn-danger" onClick={() => dispatch(deleteAssignment(assignment._id))}>
                  Delete
                </button>
              </View>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Assignments;