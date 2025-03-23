import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { listEmployees, updateEmployee, deleteEmployee } from '../Services/EmployeeService';
/**
 * In order to hold the response of the rest api calls, we have to use state variables.
 * @useState Hook allows us to declare state variables in functional components.
 * useState hook is a javascript function that takes initial value and returns an array.
 * 2 params: state variables, function that updates state variables
 */
const ListEmployeeComponent = () => {
   
    const dummyData = [
        {
            "id":1,
            "firstName": "Sri",
            "lastName":"tallas",
            "email":"sri@gmail.com"
        },
        {
            "id":2,
            "firstName": "Sri",
            "lastName":"bolly",
            "email":"sri@gmail.com"
        },
        {
            "id":3,
            "firstName": "dhruv",
            "lastName":"tallas",
            "email":"sri@gmail.com"
        }
    ]

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployees();
    },[])


    console.log(listEmployees);

    // useEffect(() => {
    //     listEmployees().then(response => setEmployees(response.data)
    //     ).catch(error => console.error(error))
    // },[]);

    const navigator = useNavigate();
    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        console.log("Employee ID:", id); // Debugging step
        if (!id) {
          console.error("ID is undefined");
          return;
        }
        navigator(`/edit-employee/${id}`); // Redirects to the edit page. imp its back tick else id wont be retrieved error.
    }

    function removeEmployee(id){
        console.log(id);
        deleteEmployee(id).then((response) => {
            console.log("employee deleted successfully" , id);
            getAllEmployees()
        }).catch(error => console.log(error))
    }

  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <button className="btn btn-primary mb-2" onClick = {addNewEmployee}>Add Employee</button>
      <table className='table table-striped table-bordered'>
          <thead>
              <tr>
                  <th>Employee Id</th>
                  <th>Employee First Name</th>
                  <th>Employee Last Name</th>
                  <th>Employee Email Id</th>
                  <th> Actions</th>
              </tr>
          </thead>
          <tbody>
              {
                  //use dummydata inplace of employees
                  employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                            <button className = 'btn btn-info' onClick = {() => updateEmployee(employee.id)}>Update</button>
                            <button className = 'btn btn-danger' style = {{marginLeft:'10px'}} 
                            onClick = {() => removeEmployee(employee.id)}>Delete</button>
                        </td>

                    </tr>
                  )
              }
          </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent
