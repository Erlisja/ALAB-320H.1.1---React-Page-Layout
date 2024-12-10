import "./App.css";
import Homepage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";
import "./styles.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Homepage />
        <EmployeePage />
      </div>
    </>
  );
}

export default App;
