import { useRef, useState } from "react";
import api from "../api/api";
import { useDispatch } from "react-redux";
import { userAuthenticated } from "../reducer/userSlice";
import { useNavigate } from "react-router-dom";

const LoginComponent = (props) => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const history = useNavigate();
  const [authMessage, setAuthMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    api
      .get(`/users/${usernameRef.current.value}`)
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.password === passwordRef.current.value) {
          setAuthMessage(false);
          console.log("user authenticated");
          dispatch(
            userAuthenticated({
              id: resp.data.id,
              role: resp.data.role,
            })
          );
          history("/");
        } else {
          setAuthMessage(true);
          console.log("user login failed");
        }
      })
      .catch((err) => {
        console.log("error in login");
        console.log(err);
        setAuthMessage(true);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <form onSubmit={handleSubmit} className="col-md-4 mt-4">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter Username"
              ref={usernameRef}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              ref={passwordRef}
            ></input>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {authMessage ? (
            <small id="LoginFailed" className="form-text text-muted">
              The username and password combination is incorrect. Please try
              again.
            </small>
          ) : (
            <div></div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
