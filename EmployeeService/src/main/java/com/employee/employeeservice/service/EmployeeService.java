package com.employee.employeeservice.service;

import com.employee.employeeservice.dto.EmployeeDTO;
import com.employee.employeeservice.model.Employee;
import com.employee.employeeservice.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    EmployeeRepo employeeRepo;

    public boolean AddEmployee(EmployeeDTO employeeDTO){
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

    public List<EmployeeDTO> GetAllEmployee(){
        return mapToDTO(employeeRepo.findAll());
    }

    public Boolean DeleteEmployee(Long id){
        try{
            this.employeeRepo.deleteById(id);
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }

    public List<EmployeeDTO> UpdateEmployee(EmployeeDTO employeeDTO) throws Exception{
            Employee employee = employeeRepo.findById(employeeDTO.getId()).orElseThrow(()-> new Exception("Not found"+
                    Long.toString(employeeDTO.getId())));
            employee.setName(employeeDTO.getName());
            employee.setDob(employeeDTO.getDob());
            employee.setEmail(employeeDTO.getEmail());
            employeeRepo.save(employee);
            return mapToDTO(employeeRepo.findAll());

    }

    public List<EmployeeDTO> mapToDTO(List<Employee> employees){
        List<EmployeeDTO> employeeDTOS = new ArrayList<>();
        for(Employee employee: employees){
            employeeDTOS.add(new EmployeeDTO(employee.getId(),employee.getName(),employee.getEmail(),employee.getDob()));
        }
        return employeeDTOS;
    }


}
