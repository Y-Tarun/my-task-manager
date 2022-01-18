import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TasksList from "./components/TasksList";
import SideMenuBar from "./components/SideMenuBar";
import TopNavBar from "./components/TopNavBar";

export default function App() {
  return (
    <div className="App">
    <TopNavBar/>
      
      <TasksList/>
    </div>
  );
}
