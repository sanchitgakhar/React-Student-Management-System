import { BrowserRouter as Router } from "react-router-dom";
import NavigationComponent from "./component/NavigationComponent";

function App() {
  return (
    <div>
      <Router>
        <NavigationComponent />
      </Router>
    </div>
  );
}

export default App;
