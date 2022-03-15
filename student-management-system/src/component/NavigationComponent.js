import { Link } from "react-router-dom";
import "../style.css";

const NavigationComponent = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        SMS
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDepartment"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Department
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDepartment">
              <Link to="/display-department" className="dropdown-item">
                Display
              </Link>
              <Link to="/add-department" className="dropdown-item">
                Add
              </Link>
              <Link to="/update-department" className="dropdown-item">
                Update
              </Link>
              <Link to="/delete-department" className="dropdown-item">
                Delete
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarSubject"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Subject
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarSubject">
              <Link to="/display-subject" className="dropdown-item">
                Display
              </Link>
              <Link to="/add-subject" className="dropdown-item">
                Add
              </Link>
              <Link to="/update-subject" className="dropdown-item">
                Update
              </Link>
              <Link to="/delete-subject" className="dropdown-item">
                Delete
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarTeacher"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Teacher
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarTeacher">
              <Link to="/display-teacher" className="dropdown-item">
                Display
              </Link>
              <Link to="/add-teacher" className="dropdown-item">
                Add
              </Link>
              <Link to="/update-teacher" className="dropdown-item">
                Update
              </Link>
              <Link to="/delete-teacher" className="dropdown-item">
                Delete
              </Link>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarStudent"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Teacher
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarStudent">
              <Link to="/display-student" className="dropdown-item">
                Display
              </Link>
              <Link to="/add-student" className="dropdown-item">
                Add
              </Link>
              <Link to="/update-student" className="dropdown-item">
                Update
              </Link>
              <Link to="/delete-student" className="dropdown-item">
                Delete
              </Link>
            </div>
          </li>
        </ul>

        <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-sm btn-outline-success my-2 my-sm-0">
            Login
          </button>
        </form>
      </div>
    </nav>
  );
};
export default NavigationComponent;
