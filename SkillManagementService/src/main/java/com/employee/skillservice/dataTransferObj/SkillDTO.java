package com.employee.skillservice.dataTransferObj;

public class SkillDTO {
    private long id;
    private String skills;

    SkillDTO(){};

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }
}
