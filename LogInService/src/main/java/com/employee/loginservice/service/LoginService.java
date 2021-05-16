package com.employee.loginservice.service;

import com.employee.loginservice.dto.LoginDTO;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    public LoginDTO checklogin() {
        LoginDTO loginDTO = new LoginDTO();
        return loginDTO;
    }
}
