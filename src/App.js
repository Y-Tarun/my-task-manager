import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import TaskCard from "./components/TaskCard";
import SideMenuBar from "./components/SideMenuBar";
import TopNavBar from "./components/TopNavBar";

export default function App() {
  return (
    <div className="App">
    <TopNavBar/>
      
      <TaskCard />
    </div>
  );
}
