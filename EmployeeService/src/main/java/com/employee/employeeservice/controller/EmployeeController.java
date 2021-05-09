package com.employee.employeeservice.controller;

import com.employee.employeeservice.dto.EmployeeDTO;
import com.employee.employeeservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/employee")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "",method = RequestMethod.GET)
    public void getAll(){
        System.out.println("Yes");
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="",method = RequestMethod.POST)
    public boolean addEmployee(@RequestBody EmployeeDTO employeeDTO){
        return employeeService.addEmployee(employeeDTO);
    }
}
