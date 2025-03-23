package com.learning.demo.ems_backend.service;

import com.learning.demo.ems_backend.dto.EmployeeDto;
import com.learning.demo.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updatedEmployee(Long employeeId, EmployeeDto employeeDto);

    void deleteEmployee(Long EmployeeId);
}
