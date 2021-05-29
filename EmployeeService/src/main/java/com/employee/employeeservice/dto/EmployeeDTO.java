package com.employee.employeeservice.dto;

import java.util.List;

public class EmployeeDTO {
    private long id;
    private String name;
    private String email;
    private String dob;
    private int[] skills;

    public EmployeeDTO(){}

    public EmployeeDTO(long id, String name, String email, String dob, int[] skills) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.skills = skills;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }


    public int[] getSkills() {
        return skills;
    }

    public void setSkills(int[] skills) {
        this.skills = skills;
    }
}
