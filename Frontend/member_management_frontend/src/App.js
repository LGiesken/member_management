import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserTable from "./components/userTable";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

library.add(faSortUp, faSortDown);

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
