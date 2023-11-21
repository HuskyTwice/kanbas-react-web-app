import axios from "axios";

// const BASE_URL = "http://localhost:4000";
const BASE_URL = "https://kanbas-node-server-app-mitf.onrender.com";
const COURSES_URL = `${BASE_URL}/api/courses`;
const ASSIGNMENTS_URL = `${BASE_URL}/api/assignments`;

export const updateAssignment = async (assignment) => {
    const response = await axios.put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId) => {
    const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
};

export const createAssignment = async (courseId, assignment) => {
    const response = await axios.post(`${COURSES_URL}/${courseId}/assignments`, assignment);
    return response.data; // problem here
};

export const findAssignmentsForCourse = async (courseId) => {
    const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
};

