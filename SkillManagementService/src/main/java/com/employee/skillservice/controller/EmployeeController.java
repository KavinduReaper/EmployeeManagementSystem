package com.employee.skillservice.controller;

import com.employee.skillservice.entity.Employee;
import com.employee.skillservice.repository.EmployeeRepository;
import com.employee.skillservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employees")
    private List<Employee> getAllEmployees(){
        return employeeService.getAllEmployees();
    }

    @GetMapping("/employee/{id}")
    private Employee getEmployee(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @DeleteMapping("/employee/{id}")
    private void deleteEmployee(@PathVariable Long id){
        employeeService.delete(id);
    }

    @PostMapping("/employees")
    private long saveOrUpdate(@RequestBody Employee employee){
        employeeService.saveOrUpdate(employee);
        return employee.getId();
    }
}
