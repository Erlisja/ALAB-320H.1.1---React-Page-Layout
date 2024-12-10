import EmployeeList from "./EmployeeList";
import Header from "./Header";
import SearchBar from "./SearchBar";


function Homepage(){
    return (
        <div className="homepage">
           <Header props="Employee Directory" />
           <SearchBar />
              <EmployeeList />

        </div>
    )
}

export default Homepage