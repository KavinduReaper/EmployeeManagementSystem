package com.employee.employeeservice.service;

import com.employee.employeeservice.dto.EmployeeDTO;
import com.employee.employeeservice.model.Employee;
import com.employee.employeeservice.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
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
            employee.setSkills(Arrays.toString(employeeDTO.getSkills()));

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
            employee.setSkills(Arrays.toString(employeeDTO.getSkills()));
            employeeRepo.save(employee);
            return mapToDTO(employeeRepo.findAll());

    }

    public List<EmployeeDTO> mapToDTO(List<Employee> employees){
        List<EmployeeDTO> employeeDTOS = new ArrayList<>();
        for(Employee employee: employees){
            int[] skills = null;
            if(employee.getSkills()!=""){
                String tempory = employee.getSkills().substring(1,employee.getSkills().length()-1);
                skills = Arrays.stream(tempory.split(", ")).mapToInt(Integer::parseInt).toArray();
            }
            employeeDTOS.add(new EmployeeDTO(employee.getId(),employee.getName(),employee.getEmail(),employee.getDob(),skills));
        }
        return employeeDTOS;
    }


}
