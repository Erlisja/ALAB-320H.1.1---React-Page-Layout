import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
    return(
        <div className="employee-list">  
            <EmployeeListItem  name="Jame King "job="President and CEO" />
            <EmployeeListItem  name="Julie Taylor "job="VP of Marketing" />
            <EmployeeListItem  name="Eugene Lee "job="CFO" />
            <EmployeeListItem  name="John Williams "job="VP of Engineering" />
            <EmployeeListItem  name="Ray Moore "job="VP of Sales" />
            <EmployeeListItem  name="Paul Jones "job="VP of Operations" />

        </div>
    )
}

export default EmployeeList;