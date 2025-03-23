import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { createEmployees, updateEmployee } from '../Services/EmployeeService'
import { getEmployee } from '../Services/EmployeeService'

const EmployeeComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const navigator = useNavigate();

  const { id } = useParams();
  const [errors, setErrors] = useState({
    'firstName': '',
    'lastName': '',
    'email': ''
  })

  useEffect( () => {
    console.log("Employee ID received:", id); // Debugging
    if(id){
      getEmployee(id).then((response) => {
        console.log("Employee Data:", response.data); // Debugging API response
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName)
        setEmail(response.data.email)
      }) .catch(error => console.log("Error fetching employee",error))
    }

  },[id])

  // function handleFirstName(e){
  //   setFirstName(e.target.value);
  // }
  const handleFirstName = (e) => setFirstName(e.target.value);

  // function handleLastName(e) {
  //   setLastName(e.target.value);
  // }
  // function handleEmail(e) {
  //   setEmail(e.target.value);
  // }
  /** 
  function saveEmployee(e) {
    e.preventDefault();

    if (validateForm()) { // use brackets else it wont get executed as well.
      const employee = { firstName, lastName, email }; //json not array
      console.log(employee);

      createEmployees(employee).then((response) => {
        console.log(response.data);
        navigator('/employees')
      })
        .catch((error) => {
          console.error("Error saving employee:", error);
          // Handle the error appropriately (e.g., show an error message)
        });
    }

  }*/
  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if (validateForm()) { // use brackets else it wont get executed as well.
      const employee = { firstName, lastName, email }; //json not array
      console.log(employee);

      if(id){
        console.log("updating the employee");
        updateEmployee(id,employee).then((response) => {
          console.log(response.data);
          navigator('/employees')
        })
          .catch((error) => {
            console.error("Error updating employee:", error);
            // Handle the error appropriately (e.g., show an error message)
          });
      }
      else{
        createEmployees(employee).then((response) => {
          console.log(response.data);
          navigator('/employees')
        })
          .catch((error) => {
            console.error("Error saving employee:", error);
            // Handle the error appropriately (e.g., show an error message)
          });
      }
      
    }

  }

  function validateForm() {
    let valid = true;
    const errorCopy = { ...errors };

    // ✅ Create a new fresh object (not copying old state)
    // const errorCopy = {}; // this is correct way as react re-renders as updates are async in react

    if (firstName.trim()) {
      errorCopy.firstName = ''
    }
    else {
      errorCopy.firstName = 'FirstName is required';
      valid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = ''
    }
    else {
      errorCopy.lastName = 'LastName is required';
      valid = false;
    }

    if (email.trim()) {
      errorCopy.email = ''
    }
    else {
      errorCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorCopy);// ✅ React detects state change properly
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update Employee</h2>
    }
    else {
      <h2 className='text-center'>Add Employee</h2>
    }
  }
  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {/* <h2 className='text-center'>Add Employee</h2> */}
          {
            pageTitle()
          }
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                  type='text'
                  placeholder='Enter the First Name'
                  name='firstName'
                  value={firstName}
                  // className = 'form-control' below backtick is used not single quotes.
                  className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                  // onChange = {handleFirstName}
                  onChange={e => setFirstName(e.target.value)}
                >
                </input>
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  type='text'
                  placeholder='Enter the Last Name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                  // onChange = {handleLastName}>
                  onChange={e => setLastName(e.target.value)} >
                </input>
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  type='text'
                  placeholder='Enter the Email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  // onChange = {handleEmail}> 
                  onChange={e => setEmail(e.target.value)} >
                </input>
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
              </div>
              <button className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent
