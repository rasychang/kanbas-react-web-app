import db from "../../Database";
import { useParams } from "react-router-dom";
import { View } from 'react-native';
import "./index.css";
import { FaCog } from "react-icons/fa";
import { HiFilter } from "react-icons/hi"

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <h1>Grades</h1>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <button class="btn btn-secondary">Import</button>
        <button class="btn btn-secondary">Export</button>
        <button class="btn btn-secondary"><FaCog className="wd-icon" /></button>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'column', width: '400px', marginRight: '10px' }}>
          <h5>Student Names</h5>
          <input type="text" class="form-control" placeholder="Search Students" />
        </View>
        <View style={{ flexDirection: 'column', width: '400px' }}>
          <h5>Assignment Names</h5>
          <input type="text" class="form-control" placeholder="Search Assignments" />
        </View>
      </View>
      <button class="btn btn-secondary"><HiFilter className="wd-icon" />Apply Filters</button>
      <br />
      <br />
      
      <div className="table-responsive">
        <table className="table">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td>{user.firstName} {user.lastName}</td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                    return (<td>{grade?.grade || ""}</td>);
                  })}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;