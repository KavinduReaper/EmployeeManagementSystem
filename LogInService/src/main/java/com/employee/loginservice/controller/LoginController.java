package com.employee.loginservice.controller;


import com.employee.loginservice.dto.LoginDTO;
import com.employee.loginservice.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/login")

public class LoginController {
    @Autowired
    LoginService loginService;

//    @CrossOrigin(origins = "http://localhost:4200")
//    @RequestMapping(value = "",method = RequestMethod.GET)
//    public LoginDTO Check(){
//
//        return loginService.checklogin();
//    }


}
