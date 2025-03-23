
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HelloWorld from './HelloWorld';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import EmployeeComponent from './components/EmployeeComponent';

function App() {
  return (
    // the empty tag is called fragment in Reactjs.
    <>
      {/* <HelloWorld/> */}
      <BrowserRouter>
        <HeaderComponent />
        {/* <nav>
          <ul>
            <li>
              <Link to = "/">HelloWorld</Link>
            </li>
            <li>
              <Link to = "/employees">Employees</Link>
            </li>
          </ul>
          </nav> */}
        <Routes>
          {/* //https://localhost:3000/  Route is like a container*/}
          <Route path="/" element={<ListEmployeeComponent />} />
          {/* //https://localhost:3000/employees */}
          <Route path="/employees" element={<ListEmployeeComponent />} />
           {/* //https://localhost:3000/add-employee */}
          <Route path="/add-employee" element={<EmployeeComponent />} />
           {/* //https://localhost:3000/edit-employee/1 */}
          <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
        </Routes>

        <FooterComponent />
      </BrowserRouter>

    </>
    // <div>
    //   <h1> Hello World!!</h1>
    // </div>
  );
}

export default App;

/**
 * The BrowserRouter component wraps the entire application, enabling routing.
The nav element contains Link components that create navigation links.
The Routes component contains Route components that define the mappings between URL paths and components.
The Route component's path prop specifies the URL path, and the element prop specifies the component to render.
 */

/**
 * Add Employee:
 * **************
 * 
 * Create React functional component EmployeeComponent
 * Add'Add Employee' button in ListEmployeeComponent
 * Configure Route for EmployeeComponent
 * Test the above changes
 * 
 */