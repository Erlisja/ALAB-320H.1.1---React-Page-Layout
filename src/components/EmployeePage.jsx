import Header from "./Header";  
import EmployeeListItem from "./EmployeeListItem";

function EmployeePage(){
    return (
        <div className="emp-page">
            <Header  props="Employee Directory"/>
            <div className="contents">
            <img src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="employee"
            style={{width: "50px", height: "50px", borderRadius: "50%"}}
             />
             <div className="emp-info">
            <h3>Julie Taylor</h3>
            <p>VP of Marketing</p>
            </div>
            </div>
            <ul style={{border: '1px solid black'}}>
            <li>Call Office</li>
            <li>Phone: 123-456-7890</li>
            </ul>
            <ul style={{border: '1px solid black', margin:"0px", padding:"0px"}}>
            <li>Call Office</li>
            <li>Phone: 123-456-7890</li>
            </ul>
            <ul style={{border: '1px solid black'}}>
            <li>Call Office</li>
            <li>Phone: 123-456-7890</li>
            </ul>
            



        </div>
    )
}

export default EmployeePage