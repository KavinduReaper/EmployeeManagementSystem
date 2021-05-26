package com.employee.skillservice.controller;

import com.employee.skillservice.dataTransferObj.SkillDTO;
import com.employee.skillservice.entity.Employee;
import com.employee.skillservice.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/skills")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

//    @CrossOrigin(origins = "http://localhost:4200")
////    @GetMapping("/employees")
//    @RequestMapping(value = "", method = RequestMethod.GET)
//    private List<Employee> getAllEmployees(){
//        return employeeService.getAllEmployees();
//    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/get/{id}", method = RequestMethod.GET)
    private Employee getEmployee(@PathVariable Long id){
        return employeeService.getEmployeeById(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    private void deleteEmployee(@PathVariable Long id){
        employeeService.delete(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(value = "", method = RequestMethod.POST)
    private boolean saveOrUpdate(@RequestBody SkillDTO skillDTO){
        return employeeService.saveOrUpdate(skillDTO);
    }
}
