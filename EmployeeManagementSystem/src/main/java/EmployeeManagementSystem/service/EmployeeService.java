package EmployeeManagementSystem.service;


import EmployeeManagementSystem.dto.EmployeeDTO;
import EmployeeManagementSystem.model.Employee;
import EmployeeManagementSystem.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo employeeRepo;

    public boolean addEmployee(EmployeeDTO employeeDTO){
        Employee employee = new Employee();
        try{
            employee.setName(employeeDTO.getName());
            employee.setDob(employeeDTO.getDob());
            employee.setEmail(employeeDTO.getEmail());
            employeeRepo.save(employee);
            return true;
        }catch (Exception e){
            return false;
        }

    }
}
