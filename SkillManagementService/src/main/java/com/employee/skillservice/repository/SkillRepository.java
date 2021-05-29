package com.employee.skillservice.repository;

import com.employee.skillservice.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface SkillRepository extends JpaRepository<Skill, Long> {
}
