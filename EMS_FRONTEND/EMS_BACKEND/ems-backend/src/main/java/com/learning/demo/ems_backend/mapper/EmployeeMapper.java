package com.learning.demo.ems_backend.mapper;

import com.learning.demo.ems_backend.dto.EmployeeDto;
import com.learning.demo.ems_backend.entity.Employee;
import com.learning.demo.ems_backend.repository.EmployeeRepository;

// Maps employee entity to employee dto, vice versa
public class EmployeeMapper {

    public  static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
              employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public  static Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getEmail()
        );
    }
}
