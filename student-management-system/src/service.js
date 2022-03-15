import api from "./api/api";

export const addDepartment = async (deptName) => {
  return api.post("/departments", {
    deptName: deptName,
  });
};

export const updateDepartment = async (deptId, deptName) => {
  return api.put(`/departments/${deptId}`, {
    deptName: deptName,
  });
};

export const deleteDepartment = async (deptId) => {
  return api.delete(`/departments/${deptId}`);
};

export const addSubject = async (subjectName, deptId) => {
  return api.post("/subjects", {
    subName: subjectName,
    deptId: deptId,
  });
};

export const updateSubject = async (subjectId, subjectName, deptId) => {
  return api.put(`/subjects/${subjectId}`, {
    subName: subjectName,
    deptId: deptId,
  });
};

export const deleteSubject = async (subjectId) => {
  return api.delete(`/subjects/${subjectId}`);
};

export const addTeacher = async (teacherName, deptId, subjectIds) => {
  return api.post("/teachers", {
    teacherName: teacherName,
    deptId: deptId,
    subjectId: subjectIds,
  });
};

export const updateTeacher = async (
  teacherId,
  teacherName,
  deptId,
  subjectIds
) => {
  return api.put(`/teachers/${teacherId}`, {
    teacherName: teacherName,
    deptId: deptId,
    subjectId: [subjectIds],
  });
};

export const deleteTeacher = async (teacherId) => {
  return api.delete(`/teachers/${teacherId}`);
};

export const addStudent = async (studentName, subjectId, teacherId, deptId) => {
  return api.post("/subjects", {
    studentName: studentName,
    subjectid: subjectId,
    teacherId: teacherId,
    deptId: deptId,
  });
};

export const updateStudent = async (
  studentId,
  studentName,
  subjectId,
  teacherId,
  deptId
) => {
  return api.put(`/subjects/${studentId}`, {
    studentName: studentName,
    subjectid: subjectId,
    teacherId: teacherId,
    deptId: deptId,
  });
};

export const deleteStudent = async (studentId) => {
  return api.delete(`/subjects/${studentId}`);
};
