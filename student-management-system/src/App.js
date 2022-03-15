import { useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AddDepartment from "./component/department/AddDepartment";
import DeleteDepartment from "./component/department/DeleteDepartment";
import DisplayDepartment from "./component/department/DisplayDepartment";
import UpdateDepartment from "./component/department/UpdateDepartment";
import Landing from "./component/Landing";
import NavigationComponent from "./component/NavigationComponent";
import AddStudent from "./component/student/AddStudent";
import DeleteStudent from "./component/student/DeleteStudent";
import DisplayStudent from "./component/student/DisplayStudent";
import UpdateStudent from "./component/student/UpdateStudent";
import AddSubject from "./component/subject/AddSubject";
import DeleteSubject from "./component/subject/DeleteSubject";
import DisplaySubject from "./component/subject/DisplaySubject";
import UpdateSubject from "./component/subject/UpdateSubject";
import AddTeacher from "./component/teacher/AddTeacher";
import DeleteTeacher from "./component/teacher/DeleteTeacher";
import DisplayTeacher from "./component/teacher/DisplayTeacher";
import UpdateTeacher from "./component/teacher/UpdateTeacher";
import LoginComponent from "./component/LoginComponent";

function App() {

  const [user, setUser] = useState(null);

  return (
    <div>
      <Router>
        <NavigationComponent />

        <Routes>
          <Route path="/" element={<Landing />}></Route>

          {/* Department Routes */}
          <Route
            path="/display-department"
            element={<DisplayDepartment />}
          ></Route>
          <Route
            path="/add-department"
            element={
              <ProtectedRoute user={user} basePath="/display-department">
                <AddDepartment />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/update-department"
            element={
              <ProtectedRoute user={user} basePath="/display-department">
                <UpdateDepartment />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/delete-department"
            element={
              <ProtectedRoute user={user} basePath="/display-department">
                <DeleteDepartment />
              </ProtectedRoute>
            }
          ></Route>

          {/* Subject Routes */}
          <Route path="/display-subject" element={<DisplaySubject />}></Route>
          <Route
            path="/add-subject"
            element={
              <ProtectedRoute user={user} basePath="/display-subject">
                <AddSubject />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/update-subject"
            element={
              <ProtectedRoute user={user} basePath="/display-subject">
                <UpdateSubject />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/delete-subject"
            element={
              <ProtectedRoute user={user} basePath="/display-subject">
                <DeleteSubject />
              </ProtectedRoute>
            }
          ></Route>

          {/* Teacher Routes */}
          <Route path="/display-teacher" element={<DisplayTeacher />}></Route>
          <Route
            path="/add-teacher"
            element={
              <ProtectedRoute user={user} basePath="/display-teacher">
                <AddTeacher />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/update-teacher"
            element={
              <ProtectedRoute user={user} basePath="/display-teacher">
                <UpdateTeacher />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/delete-teacher"
            element={
              <ProtectedRoute user={user} basePath="/display-teacher">
                <DeleteTeacher />
              </ProtectedRoute>
            }
          ></Route>

          {/* Student Routes */}
          <Route path="/display-student" element={<DisplayStudent />}></Route>
          <Route
            path="/add-student"
            element={
              <ProtectedRoute user={user} basePath="/display-student">
                <AddStudent />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/update-student"
            element={
              <ProtectedRoute user={user} basePath="/display-student">
                <UpdateStudent />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/delete-student"
            element={
              <ProtectedRoute user={user} basePath="/display-student">
                <DeleteStudent />
              </ProtectedRoute>
            }
          ></Route>
            <Route
                path="/login"
                element={<LoginComponent />}
            ></Route>
        </Routes>
      </Router>
    </div>
  );
}

const ProtectedRoute = (props) => {
  if (props.user) {
    return props.children;
  } else {
    return <Navigate to={props.basePath}></Navigate>;
  }
};

export default App;
