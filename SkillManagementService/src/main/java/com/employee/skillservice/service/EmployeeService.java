package com.employee.skillservice.service;

import com.employee.skillservice.dataTransferObj.SkillDTO;
import com.employee.skillservice.entity.Skill;
import com.employee.skillservice.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    SkillRepository skillRepository;

    public List<SkillDTO> getAllSkills(){
        return mapToDTO((List<Skill>) skillRepository.findAll());
    }

//    public Employee getEmployeeById(long id){
//        return employeeRepository.findById(id).get();
//    }

    public void delete(long id){
        skillRepository.deleteById(id);
    }

    public List<SkillDTO> saveOrUpdate(SkillDTO skillDTO) throws Exception{
        System.out.println(skillDTO.getId());
        if(skillDTO.getId()>0){
            Skill skill = skillRepository.findById(skillDTO.getId()).orElseThrow(()-> new Exception("Not Found"));
            skill.setSkills(skillDTO.getSkills());
            skillRepository.save(skill);
            return mapToDTO(skillRepository.findAll());
        }else{
            Skill skill = new Skill();
            skill.setSkills(skillDTO.getSkills());
            skillRepository.save(skill);
            return null;
        }

    }

    public List<SkillDTO> mapToDTO(List<Skill> skills){
        List<SkillDTO> skillDTOS = new ArrayList<>();
        for(Skill skill : skills){
            skillDTOS.add(new SkillDTO(skill.getId(), skill.getSkills()));
        }
        return skillDTOS;
    }
}
