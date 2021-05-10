package com.employee.skillservice.service;

import com.employee.skillservice.dataTransferObj.SkillDTO;
import com.employee.skillservice.entity.Employee;
import com.employee.skillservice.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees(){
        List<Employee> employees = new ArrayList<>();
        employeeRepository.findAll().forEach(employees::add);
        return employees;
    }

    public Employee getEmployeeById(long id){
        return employeeRepository.findById(id).get();
    }

    public void delete(long id){
        employeeRepository.deleteById(id);
    }

    public boolean saveOrUpdate(SkillDTO skillDTO){
        Employee employee = new Employee();
        try{
            employee.setName(skillDTO.getName());
            employee.setSkills(skillDTO.getSkills());
            employeeRepository.save(employee);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
