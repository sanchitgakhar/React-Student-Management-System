import "../style.css"
import {useSelector} from "react-redux"

const Landing = () => {

    const {userdata}=useSelector((state)=>state.users)


  return (
    <div className="center">
        <h1>Welcome, {userdata.id} to Student Management System</h1>
    </div>
  );
};

export default Landing;
