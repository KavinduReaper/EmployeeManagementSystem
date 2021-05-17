package com.employee.loginservice.dto;

import com.employee.loginservice.controller.LoginController;

public class LoginDTO {
    private String userName;
    private String password;
    LoginDTO (){

    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
