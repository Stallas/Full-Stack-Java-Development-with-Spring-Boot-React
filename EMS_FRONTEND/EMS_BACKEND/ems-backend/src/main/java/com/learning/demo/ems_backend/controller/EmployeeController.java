package com.learning.demo.ems_backend.controller;

import com.learning.demo.ems_backend.dto.EmployeeDto;
import com.learning.demo.ems_backend.entity.Employee;
import com.learning.demo.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// When we annotate this class then it becomes spring mvc controller to
// handle http requests. Also, rather than create constructor and injecting , lets use lombok annotation.
// REST CLient and server running on different ports, CORS policy so annotate and star means all clients can access thhis data.
@CrossOrigin("*")
@RestController
@RequestMapping("/api/employees")
@AllArgsConstructor
public class EmployeeController {

    private EmployeeService employeeService;

    //Build Add Employee REST API
    //RequestBody --> extracts incoming json and maps to emp entity ie deserialization
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
        EmployeeDto saveEmployee =  employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(employeeDto, HttpStatus.CREATED);
    }

    @GetMapping("{empId}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("empId") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees(){
        List<EmployeeDto> employeeDto =  employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeDto);
    }

    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") Long employeeId, @RequestBody EmployeeDto empDto){
        EmployeeDto employeeDto = employeeService.updatedEmployee(employeeId,empDto);
        return ResponseEntity.ok(employeeDto);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted successfully");
    }
}
