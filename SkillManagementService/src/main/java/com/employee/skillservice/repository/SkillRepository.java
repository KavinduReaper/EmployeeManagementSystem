package com.employee.skillservice.repository;

import com.employee.skillservice.entity.Skill;
import org.springframework.data.repository.CrudRepository;

public interface SkillRepository extends CrudRepository<Skill, Long> {
}
