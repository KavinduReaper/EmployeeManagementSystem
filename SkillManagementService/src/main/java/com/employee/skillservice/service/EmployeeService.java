package com.employee.skillservice.service;

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

    public void saveOrUpdate(Employee employee){
        employeeRepository.save(employee);
    }
}
