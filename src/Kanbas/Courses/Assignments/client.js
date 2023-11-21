import axios from "axios";

const COURSES_URL = `${process.env.REACT_APP_API_URL}/api/courses`;
const ASSIGNMENTS_URL = `${process.env.REACT_APP_API_URL}/api/assignments`;

export const addAssignment = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignmentId, assignment) => {
  const response = await axios.put(`${ASSIGNMENTS_URL}/${assignmentId}`, assignment);
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
  return response.data;
};
