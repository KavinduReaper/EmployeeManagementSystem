package com.employee.employeeservice.service;

import com.employee.employeeservice.dto.EmployeeDTO;
import com.employee.employeeservice.model.Employee;
import com.employee.employeeservice.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo employeeRepo;

    public boolean addEmployee(EmployeeDTO employeeDTO){
        Employee employee = new Employee();
        try {
            employee.setName(employeeDTO.getName());
            employee.setDob(employeeDTO.getDob());
            employee.setEmail(employeeDTO.getEmail());
            employeeRepo.save(employee);
            return true;
        }catch (Exception e){
            return false;
        }
    }

    public List<EmployeeDTO> getAllEmployee(){
        List<EmployeeDTO> employeeDTO = new ArrayList<EmployeeDTO>();

        return employeeDTO;
    }

}
