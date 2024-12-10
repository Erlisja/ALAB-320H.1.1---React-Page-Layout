function EmployeeListItem({ name, job }) {
  return (
    <div className="employee-list-item">
      <div className="contents">
        <img
          src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  
          alt="employee"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <div className="emp-info">
          <h3>{name}</h3>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeListItem;
