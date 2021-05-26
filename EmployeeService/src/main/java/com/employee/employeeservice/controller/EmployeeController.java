package com.employee.employeeservice.controller;

import com.employee.employeeservice.dto.EmployeeDTO;
import com.employee.employeeservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/employee")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "",method = RequestMethod.GET)
    public List<EmployeeDTO> GetAllEmployee(){
        return employeeService.GetAllEmployee();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="",method = RequestMethod.POST)
    public boolean AddEmployee(@RequestBody EmployeeDTO employeeDTO){
        return employeeService.AddEmployee(employeeDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="",method = RequestMethod.PUT)
    public List<EmployeeDTO> UpdateEmployee(@RequestBody EmployeeDTO employeeDTO) throws Exception {
        return employeeService.UpdateEmployee(employeeDTO);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value="",method = RequestMethod.DELETE)
    public Boolean DeleteEmployee(@RequestBody Long id){
        return employeeService.DeleteEmployee(id);
    }
}
